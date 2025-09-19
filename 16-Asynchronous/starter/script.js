'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const renderCountry = (countryData, className = '') => {
  const countryCard = `
  <article class="country ${className}">
    <img class="country__img" src="${countryData.flag}" />
     <div class="country__data">
        <h3 class="country__name">${countryData.name}</h3>
        <h4 class="country__region">${countryData.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +countryData.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          countryData.languages[0].name
        }</p>
        <p class="country__row"><span>💰</span>${
          countryData.currencies[0].name
        }</p>
      </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', countryCard);
  countriesContainer.style.opacity = '1';
};

const getCountry = (country) => {
  // AJAX call for country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [countryData] = JSON.parse(this.responseText);
    console.log(countryData);

    // Render country 1
    renderCountry(countryData);

    // Render country 2
    const [neighbor] = countryData.borders;
    if (!neighbor) return;

    // AJAX call for country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const countryData2 = JSON.parse(this.responseText);
      console.log(countryData2);
      renderCountry(countryData2, 'neighbor');
    });
  });
};
getCountry('cameroon');
