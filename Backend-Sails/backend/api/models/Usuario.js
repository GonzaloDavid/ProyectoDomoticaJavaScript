/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'myconexion',
  attributes: {

    nombre: {type: 'string', required: true},//jaimito
    apellido: {type: 'string', required: true},
    correo: {type: 'string', required: true},
    telefono: {type: 'string', required: true},
    password: {type: 'string', required: true},
    tipoUsuario: {type: 'string', required: true},//admin,general
    eventos: {collection: 'Control', via: 'ownerUsuario'},
    ownerCasa: { model: 'Casa'},
    ownerAccesoUsuario: { model: 'Acceso'}

  },

};

