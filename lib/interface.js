
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function() {
    thermostat.changePowerMode();
    $('#power-saving-status').text(updatePowersaving());
    updateTemperature();
  });

  // $('#status').on('click', function(){
  //   alert(JSON.stringify(thermostat));
  // })

  function updatePowersaving() {
    switch(thermostat.powerSaveMode) {
      case true:
        return 'On';
      case false:
        return 'Off';
    }
  }

    function updateTemperature() {
      $('#current_temp').text(thermostat.getCurrentTemperature());
      $('#current_temp').attr('class', thermostat.energyUsage());
    }
});
