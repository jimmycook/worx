let map

const mapOptions = {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8
}
const elem = document.querySelector('.map')

function initMap() {
  if (elem) {
    map = new google.maps.Map(elem, mapOptions)
  }
}

window.initMap = initMap
