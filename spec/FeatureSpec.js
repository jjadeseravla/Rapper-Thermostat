describe("Thermostat", function(){
  var thermostat;
  var Thermostat = require('../lib/Thermostat');

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temperature()).toEqual(20);
  });

});