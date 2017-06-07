describe("Thermostat", function(){
  var thermostat;
  var Thermostat = require('../lib/Thermostat');

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("returns the starting temperature", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increases the temperature by 1', function(){
    thermostat.up(1)
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature by 1', function(){
    thermostat.down(1)
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('decreases the temperature by 1', function(){  
    expect(function(){ thermostat.down(15); }).toThrowError('Minimum of ' + thermostat.MINIMUM_TEMPERATURE + ' degree reached. Temp set to min.');
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });

});
