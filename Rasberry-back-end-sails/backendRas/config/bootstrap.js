
module.exports.bootstrap = async function (done) {

  // console.log('Enviar datos');
  const request = require('request');
  var Gpio = require('onoff').Gpio,
    getvalue = 9;
  buzzer = new Gpio(18, 'out'),
    pir = new Gpio(17, 'in', 'both');

  pir.watch(function (err, value) {
//console.log('valor de value',value);
    getvalue = value;

    if (err) exit();
    buzzer.writeSync(value);
    //console.log('Intruder detected ');
    getvalue = value;

    if (value == 1)
//console.log('enviar mail');
      getvalue = value;
//console.log('valor de get value',getvalue);

    const objetoRequest1 = {
      url: 'http://localhost:1339/SensorMagneticoI',
      form: {
        valor: getvalue,

      }
    };
    request
      .post(objetoRequest1)
  });


  function exit() {
    buzzer.unexport();
    pir.unexport();
    process.exit();
  }

  return done();

};
