/**
 * RegistroEvento.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'myconexion',
  attributes: {

    fecha: {type: 'string', required: true},
    ownerA: { model: 'Accion'},
    ownerControlador: { model: 'Controlador'}

  },

};

