function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};
Thermostat.prototype.up = function(number){
  this.temperature + number;
};

module.exports = Thermostat;
