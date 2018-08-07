/**
 * Accion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'myconexion',
  attributes: {

    Tipoaccion: {type: 'string', required: true},
    fechas: {collection: 'RegistroEvento', via: 'ownerA' },
    ownerControlador: { model: 'Controlador'}

  },

};

