describe("Thermostat", function(){
  var thermostat;
  var Thermostat = require('../lib/Thermostat');

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
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

});
