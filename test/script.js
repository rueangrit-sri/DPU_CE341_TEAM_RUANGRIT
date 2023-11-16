
var showImagesButton = document.getElementById('showImagesButton');
var backButton = document.getElementById('BackButton');
var images = document.querySelectorAll('.image-container img');

showImagesButton.addEventListener('click', function () {
    images.forEach(function (image) {
        image.style.display = 'block';
    });

    showImagesButton.style.display = 'none';
    backButton.style.display = 'inline-block';
});

backButton.addEventListener('click', function () {
    images.forEach(function (image) {
        image.style.display = 'none';
    });

    showImagesButton.style.display = 'inline-block';
    backButton.style.display = 'none';
});

function getIPAddress() {
    const apiUrl = 'https://api64.ipify.org?format=json';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('ipResult').innerText = 'Your IP Address is: ' + ipAddress;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            document.getElementById('ipResult').innerText = 'Error fetching IP address. Please try again.';
        });
}
