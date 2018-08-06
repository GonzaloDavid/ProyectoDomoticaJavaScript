/**
 * ControlController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  enviarBack: function(req, res) {
   // npm install request --save
    const request = require('request');
    console.log('Enviar datos');

    const objetoRequest = {
      url: 'http://localhost:1338/usuarioRasberry',
      form: {
        nombre: req.body.nombre,
        accion: req.body.accion,

      }
    };
    const objetoRequest1 = {
      url: 'http://localhost:1339/control',
      form: {
        nombre: req.body.nombre,
        accion: req.body.accion,

      }
    };
    request
      .post(objetoRequest1)
    request
      .post(objetoRequest)
    return res.send(req.body);
  },

};

