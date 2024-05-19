document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
      getWeather(city);
    } else {
      alert('Please enter a city name.');
    }
  });
  
  async function getWeather(city) {
    const apiKey = 'f6ec5f9d66142e945a255e618d9ebaf3'; // Replace with your new OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      console.log(data); // Log the data to see the API response
      
      if (data.cod === 200) {
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        
        document.getElementById('weather-info').style.display = 'block';
      } else {
        alert('City not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching the weather data', error);
      alert('An error occurred. Please try again later.');
    }
  }
  