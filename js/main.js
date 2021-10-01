//initialize and add the map
function initMap(){
  //your location
  const loc= { lat: 25.330100 , lng: 82.999740 };
  //centred map on location
  const map=new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  //the marker, positioned at location
  const marker= new google.maps.Marker({position: loc, map: map});
}
//Sticky menu background
window.addEventListener('scroll',function(){
  if(window.scrollY > 150) {
    this.document.querySelector('#navbar').getElementsByClassName.opacity = 0.8;
  } else {
    this.document.querySelector('#ssnavbar').getElementsByClassName.opacity = 1;
  }
});
//Smooth scrolling
$('#navbar a,btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html,body').animate(
      {
      scrollTop:$(hash).offset().top - 100
    },
    800
    );
  }
});