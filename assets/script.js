let currentDay = null, date = null;



let update = function () {
date = moment(new Date())
currentDay.html(date.format('LLLL'));
};

$(document).ready(function(){
currentDay = $('#currentDay')
update();
setInterval(update, 1000);
});


$("#submit").click(function (event) {
    event.preventDefault();
    saveLocally()
    console.log("test");


    var city = $("#searchBar").val();
    var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
    var units = "&units=imperial";
    var apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;
    

    $.ajax({
        url: apiURL,
        method: "GET"
      }).then(function(response) {


      console.log(apiURL);

      console.log(response);


     var img1 = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
      
      $(".city").html("<h1>" + response.name + " </h1>");
      $(".img1").attr("src", img1);
      $(".wind").text("Wind Speed (mph): " + response.wind.speed);
      $(".humidity").text("Humidity (%): " + response.main.humidity);
      $(".tempF").text("Temperature: " + response.main.temperature);
    
    

      var tempF = (response.main.temp);


      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));


      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);



var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;

var apiLatLon = `https://api.openweathermap.org/data/2.5/uvi?lat=${response.coord.lat}&lon=${response.coord.lon}&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0${units}`;


console.log(response.coord.lat);
console.log(response.coord.lon);






var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL2 =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}${units}`;


$.ajax({
url: apiURL2,
method: "GET"
}).then(function(response) {



    var imageOne = `https://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date2").text("" + response.list[4].dt_txt);
    $(".img2").attr("src", imageOne);
    $(".wind2").text("Wind Speed: " + response.list[4].wind.speed);
    $(".hum2").text("Humidity: " + response.list[4].main.humidity);
    $(".temp2").text("Temperature: " + response.list[4].main.temp);



var imageOne = `https://openweathermap.org/img/wn/${response.list[12].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date3").text("" + response.list[12].dt_txt);
    $(".img3").attr("src", imageOne);
    $(".wind3").text("Wind Speed: " + response.list[12].wind.speed);
    $(".hum3").text("Humidity: " + response.list[12].main.humidity);
    $(".temp3").text("Temperature: " + response.list[12].main.temp);



var imageOne = `https://openweathermap.org/img/wn/${response.list[20].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date4").text("" + response.list[20].dt_txt);
    $(".img4").attr("src", imageOne);
    $(".wind4").text("Wind Speed: " + response.list[20].wind.speed);
    $(".hum4").text("Humidity: " + response.list[20].main.humidity);
    $(".temp4").text("Temperature: " + response.list[20].main.temp);



var imageOne = `https://openweathermap.org/img/wn/${response.list[28].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date5").text("" + response.list[28].dt_txt);
    $(".img5").attr("src", imageOne);
    $(".wind5").text("Wind Speed: " + response.list[28].wind.speed);
    $(".hum5").text("Humidity: " + response.list[28].main.humidity);
    $(".temp5").text("Temperature: " + response.list[28].main.temp);


 
 var imageOne = `https://openweathermap.org/img/wn/${response.list[36].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date6").text("" + response.list[36].dt_txt);
    $(".img6").attr("src", imageOne);
    $(".wind6").text("Wind Speed: " + response.list[36].wind.speed);
    $(".hum6").text("Humidity: " + response.list[36].main.humidity);
    $(".temp6").text("Temperature: " + response.list[36].main.temp);



$('#searchBar').val('')


})})})


var count = 0;
function saveLocally() {
    let data1 = $("#searchBar").val();
    let data = data1;

localStorage.setItem("city-"+count, data1);
count++
}

var myData = newFunction();
function newFunction() {
    return localStorage.getItem('city', data1);
}

