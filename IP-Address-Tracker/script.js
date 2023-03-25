const apiKey = 'at_4D10nRRidkUii6g3S2VeQqKrjCs1j';
const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
const map = L.map('map');
const submitBtn = document.querySelector('button[type="submit"]');

showData(apiUrl);

submitBtn.addEventListener('click', (event) => {
    showLoading(true);
    searchAddress();
    event.preventDefault();
})

function searchAddress() {
    const ipAddressInput = document.querySelector('#ip-address-input');
    const address = ipAddressInput.value;

    if (isAddressValid(address)) {
        showData(`${apiUrl}&domain=${address}`);
        showError(false);
    } else {
        showLoading(false);
        showError(true);
    }
}

async function showData(apiUrl) {
    const ipAddressSpan = document.querySelector('#ip-address'),
        locationSpan = document.querySelector('#location'),
        timezoneSpan = document.querySelector('#timezone'),
        ispSpan = document.querySelector('#isp'),
        data = await getData(apiUrl),
        { lat, lng, postalCode, city, timezone } = data.location,
        postalCodeInfo = postalCode === '' ? '' : `, ${postalCode}`;

    ipAddressSpan.textContent = data.ip;
    locationSpan.textContent = city + postalCodeInfo;
    timezoneSpan.textContent = `UTC ${timezone}`;
    ispSpan.textContent = data.isp;

    console.log(data);
    showLocationOnMap(lat, lng);
    showLoading(false);
}

function showLocationOnMap(lat, lng) {
    map.setView([lat, lng], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
}

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function isAddressValid(address) {
    const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    const ipPattern = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;

    return Boolean(
        address.match(domainPattern) ||
        address.match(ipPattern)
    );
}

function showLoading(isLoad) {
    const curtain = document.querySelector('.curtain');
    curtain.style.display = isLoad ? "flex" : "none";
}

function showError(isError) {
    const error = document.querySelector('.error');
    error.style.display = isError ? "block" : "none";
}