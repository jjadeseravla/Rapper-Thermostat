describe("Thermostat", function(){
  var thermostat;
  var Thermostat = require('../lib/Thermostat');

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("returns the starting temperature", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});