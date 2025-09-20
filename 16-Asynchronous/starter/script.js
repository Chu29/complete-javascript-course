'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
};

const renderErr = (msg) => {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
/*
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
*/

// using the fetch api to make AJAX calls
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

const getJSON = (url, errorMsg = 'Something wen wrong') => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = (country) => {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error('No neighbor found');

      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data, 'neighbor'))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderErr(`Something went wrong 💥💥 ${err.message}. Try again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', () => {
  getCountryData('australia');
  if (countriesContainer.textContent != '') {
    countriesContainer.textContent = '';
  }
});
