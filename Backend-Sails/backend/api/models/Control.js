/**
 * Control.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'myconexion',
  attributes: {

    nombre: {type: 'string', required: true},
    accion: {type: 'string', required: true},
    fecha: {type: 'string', required: true},
    ownerUsuario: { model: 'Usuario'}

  },

};

