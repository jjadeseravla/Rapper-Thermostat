describe("Thermostat", function(){
  var thermostat;
  // var Thermostat = require('../lib/Thermostat');

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

  it('has power save mode on by default', function(){
    expect(thermostat.inPowerSaveMode()).toBeTruthy();
  });

  it('resets temperature to default value', function(){
    thermostat.up(5)
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('energy usage', function(){

    it('returns low-usage', function(){
      thermostat.down(5)
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('returns medium-usage', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('returns high-usage', function(){
      thermostat.up(5)
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });

  describe('if power save mode is on', function(){
    it('has a maximum temperature of 25', function(){
      expect(function(){ thermostat.up(10); }).toThrowError('Maximum temperature of 25 reached for Power Saving Mode');
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('if power save mode is off', function(){
    it('has a maximum temperature of 32', function(){
      thermostat.changePowerMode();
      expect(function(){ thermostat.up(15); }).toThrowError('Maximum temperature of 32 reached');
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
});
