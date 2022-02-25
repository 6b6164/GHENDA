

var modal = $(".modalBox");

$(".boutton-inscription").click(function(){
    modal.show();
});


$(".close").click(function(){
    modal.hide();
});

  $(document).ready(function() {
    init();
});

function init() {
    
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
    .addTo(map);
    
    L.marker([47, 2]).addTo(map)
    .bindPopup('France<br> Pays UE')
    .openPopup();	

}