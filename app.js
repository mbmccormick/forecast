document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');

  fetch('https://forecast.weather.gov/product.php?site=LSX&issuedby=LSX&product=AFD&format=txt&version=1&glossary=1')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const glossaryContent = doc.querySelector('.glossaryProduct');

      if (glossaryContent) {
        contentDiv.innerHTML = glossaryContent.innerHTML;
      } else {
        contentDiv.innerHTML = 'Glossary content not found.';
      }
    })
    .catch(error => {
      contentDiv.innerHTML = 'Failed to load data.';
      console.error('Error fetching data: ', error);
    });
});
