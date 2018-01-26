let map

const whitespace = {
  lat: 55.948950, 
  lng: -3.205154
}

const mapOptions = {
  center: whitespace,
  disableDefaultUI: true,
  zoom: 15  
}

const elem = document.querySelector('.map')

function initMap() {
  if (elem) {
    map = new google.maps.Map(elem, mapOptions)
    var marker = new google.maps.Marker({
      position: whitespace,
      map: map
    })
  }
}

window.initMap = initMap
