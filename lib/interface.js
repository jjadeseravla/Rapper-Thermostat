
$(document).ready(function() {
  var SERVER = 'http://localhost:9292'
  var thermostat = new Thermostat();
  updateTemperature();

  $('.closebtn').on('click', function() {
    $('#alert_hot').css('visibility', 'hidden');
  });

  $('#up').on('click', function() {
    if (thermostat.isMaxTemp()) {
      $('#alert_hot').css('visibility', 'visible');
    }
    thermostat.up();
    updateTemperature();
  });

  $('.closebtn').on('click', function() {
    $('#alert_cold').css('visibility', 'hidden');
  });

  $('#down').on('click', function() {
    if (thermostat.isMinTemp()) {
      $('#alert_cold').css('visibility', 'visible');
    }
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
  } else if(thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css('color', 'black')
  } else {
    $('#temperature').css('color', 'red')
  }
}

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
      // $.post('http://localhost:4567/temperature', {temperature: thermostat.getCurrentTemperature()} );
    }

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })

    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var key = '&appid=3d706d9da7f2eabc337cf111e57da4e5';
      var units = '&units=metric';
      $.get(url + units + key, function(data) {
        $('#current-temperature').text(data.main.temp);
      });
    }

    displayWeather('London');
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      console.log(city)
      displayWeather(city);
    })

    function displayTemperature() {
      $.get(SERVER + '/temperature', function(data) {
        $('#current_temp').text(data);
        thermostat.temperature = data;
      });
    }

    function storeTemperature() {
      $.post(SERVER + '/temperature', {"temperature":thermostat.teperature});
    }
});
