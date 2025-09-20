'use strict';

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

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders[0];
//       const neighbor = 'dfsdfdef';

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbor'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// using the fetch api to make AJAX calls
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);
/*
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
  getCountryData('cameroon');
  if (countriesContainer.textContent != '') {
    countriesContainer.textContent = '';
  }
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

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
  countriesContainer.style.opacity = 1;
};

const renderErr = (msg) => {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

// return data off a country based on GPS coordinates
const whereAmI = (lat, lng) => {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Something went wrong ${response.status}`);
    response
      .json()
      .then((data) => {
        console.log(`You are in ${data.city} ${data.countryName}`);
        return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
      })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Country not found ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        renderCountry(data[0]);
      })
      .catch((error) => {
        console.error(`${error.message}`);
      });
  });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
