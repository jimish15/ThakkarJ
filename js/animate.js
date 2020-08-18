

$(document).ready(function(){

  $('.my-info').waypoint(function(direction){
    $('.my-info').addClass('animated pulse')
  }, {
    offset: '700px'
  });

  $('.edu-wit').waypoint(function(direction){
    $('.edu-wit').addClass('animated fadeInUp')
  }, {
    offset: '700px'
  });

  $('.edu-uri').waypoint(function(direction){
    $('.edu-uri').addClass('animated fadeInUp')
  }, {
    offset: '700px'
  });


})
