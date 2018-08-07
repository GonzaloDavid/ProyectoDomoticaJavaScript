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
    var str='alarmaI';

   if(req.body.nombre.localeCompare('alarma')==0)
    {
      str='alarmaI';
    }if(req.body.nombre.localeCompare('luz')==0)
    {
      str='luzI';
    }if(req.body.nombre.localeCompare('puerta')==0)
    {
      str='puertaI';
    }

      const objetoRequest = {

        url: 'http://192.168.1.9:1337/'+str,
        form: {
          nombre: req.body.nombre,
          accion: req.body.accion,

        }
      };
    console.log('el valor de el body2 es :',req.body.nombre);
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

