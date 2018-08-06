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
    var str='';
    if(req.body.name.localeCompare('alarma'))
    {
      str='alarmaI';
    }if(req.body.name.localeCompare('luz'))
    {
      str='luzI';
    }if(req.body.name.localeCompare('puerta'))
    {
      str='puertaI';
    }
    console.log('El valor de str es',str);
      const objetoRequest = {

        url: 'http://192.168.43.195:1337/'+str,
        form: {
          nombre: req.body.nombre,
          accion: req.body.accion,

        }
      };
    const objetoRequest1 = {
      url: 'http://localhost:1338/control',
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

