const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
      return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
      return "N/A";
    }
  }
  
  function displayWeatherInfo(temperature, windSpeed) {
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windSpeed');
    const weatherConditionElement = document.getElementById('weatherCondition');
    
    temperatureElement.textContent = temperature + "°C";
    windSpeedElement.textContent = windSpeed + " km/h";
    weatherConditionElement.textContent = getWeatherCondition();
  }
  

  function getWeatherCondition() {
    const conditions = ['Sunny', 'Cloudy'];
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
  }
  
  window.onload = function() {
    const temperature = 5; 
    const windSpeed = 10;
    const windChillElement = document.getElementById('windChill');
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = (windChill !== "N/A") ? windChill.toFixed(2) + "°C" : windChill;
    
    displayWeatherInfo(temperature, windSpeed);
    
    const footer = document.getElementById('footer');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;



  };
  