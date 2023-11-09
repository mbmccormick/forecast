document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');

  fetch('https://cors-anywhere.herokuapp.com/https://forecast.weather.gov/product.php?site=LSX&issuedby=LSX&product=AFD&format=CI&version=1&glossary=1')
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data; // This will not work as is due to CORS and formatting, but shows the basic idea
    })
    .catch(error => {
      contentDiv.innerHTML = 'Failed to load data.';
      console.error('Error fetching data: ', error);
    });
});
