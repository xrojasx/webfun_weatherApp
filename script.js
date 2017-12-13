$(document).ready(function() {
    $('form').submit(function(){
     var key = '38ed520286ab541243ddee4e7fe64fab';
     var city = $('input#city').val();
     $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`, function(res){
         console.log(res)
         var html = '';
         html += `<p> ${res['name']}: ${res['weather'][0]['description']} </p>`;
         html += `<p> Temperature:${res['main']['temp']} F</p>`;
         $('#results').html(html);
     }, 'jsonp');
     return false;
    })
 });