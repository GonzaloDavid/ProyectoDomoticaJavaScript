/**
 * Acceso.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'myconexion',
  attributes: {
    NivelAcceso: {type: 'string', required: true},
    accesosUsuario: {collection: 'Usuario', via: 'ownerAccesoUsuario' },
    accesosCasa: {collection: 'Casa', via: 'ownerAccesoCasa' }


  },

};

