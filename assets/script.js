let currentDay = null, date = null;


//-----------SETS CURRENT DATE AND TIME -----------------------------
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

//-------------------VARIABLES--------------------------------------
    var city = $("#searchBar").val();
    var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
    var units = "&units=imperial";
    var apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;
    
// --------------AJAX call to get DAY 1 ---------------------
    $.ajax({
        url: apiURL,
        method: "GET"
      }).then(function(response) {

// --------------Log the queryURL---------------------------
      console.log(apiURL);
//------------Log the resulting object-----------------------
      console.log(response);


//------------Transfer content to HTML---------------------
     var img1 = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
      
      $(".city").html("<h1>" + response.name + " </h1>");
      $(".img1").attr("src", img1);
      $(".wind").text("Wind Speed (mph): " + response.wind.speed);
      $(".humidity").text("Humidity (%): " + response.main.humidity);
      $(".tempF").text("Temperature: " + response.main.temperature);
    
    
// -------------Convert the temp to fahrenheit---------------
      var tempF = (response.main.temp);

// --------------add temp content to html-------------------
      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// ------------Log the data in the console as well-----------
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);

//-------------------------UV LAT/LONG--------------------------------------- 

var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;

var apiLatLon = `https://api.openweathermap.org/data/2.5/uvi?lat=${response.coord.lat}&lon=${response.coord.lon}&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0${units}`;

$.ajax({
    url: apiLatLon,
    method: "GET"
  }).then(function(response) {
  $(".uvIndex").text("UV Index (DUV): " + response.value);
  
//----------------DYNAMIC UV COLOR CHANGE----------------------------   
// if (response.value <= 2){
//     $(".uvIndex").css("background-color", "#28a745")
// }

// if (response.value >= 2.1){
//     $(".uvIndex").css("background-color", "#ffc107")
// }

// if (response.value >= 7){
//     $(".uvIndex").css("background-color", "#dc3545")
// }
});

console.log(response.coord.lat);
console.log(response.coord.lon);




//----------------------- 5-DAY forecast pull--------------------------------------

var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL2 =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}${units}`;


$.ajax({
url: apiURL2,
method: "GET"
}).then(function(response) {

//----------------------------day 2 --------------------------------------------

    var imageOne = `https://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date2").text("" + response.list[4].dt_txt);
    $(".img2").attr("src", imageOne);
    $(".wind2").text("Wind Speed: " + response.list[4].wind.speed);
    $(".hum2").text("Humidity: " + response.list[4].main.humidity);
    $(".temp2").text("Temperature: " + response.list[4].main.temp);

//---------------------------day 3   -------------------------------------

var imageOne = `https://openweathermap.org/img/wn/${response.list[12].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date3").text("" + response.list[12].dt_txt);
    $(".img3").attr("src", imageOne);
    $(".wind3").text("Wind Speed: " + response.list[12].wind.speed);
    $(".hum3").text("Humidity: " + response.list[12].main.humidity);
    $(".temp3").text("Temperature: " + response.list[12].main.temp);

//----------------------------day 4 ---------------------------------------------

var imageOne = `https://openweathermap.org/img/wn/${response.list[20].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date4").text("" + response.list[20].dt_txt);
    $(".img4").attr("src", imageOne);
    $(".wind4").text("Wind Speed: " + response.list[20].wind.speed);
    $(".hum4").text("Humidity: " + response.list[20].main.humidity);
    $(".temp4").text("Temperature: " + response.list[20].main.temp);

//-----------------------------day 5 -----------------------------------------

var imageOne = `https://openweathermap.org/img/wn/${response.list[28].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date5").text("" + response.list[28].dt_txt);
    $(".img5").attr("src", imageOne);
    $(".wind5").text("Wind Speed: " + response.list[28].wind.speed);
    $(".hum5").text("Humidity: " + response.list[28].main.humidity);
    $(".temp5").text("Temperature: " + response.list[28].main.temp);

 // -------------------------day 6 --------------------------------------
 
 var imageOne = `https://openweathermap.org/img/wn/${response.list[36].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date6").text("" + response.list[36].dt_txt);
    $(".img6").attr("src", imageOne);
    $(".wind6").text("Wind Speed: " + response.list[36].wind.speed);
    $(".hum6").text("Humidity: " + response.list[36].main.humidity);
    $(".temp6").text("Temperature: " + response.list[36].main.temp);


//------------------------CLEARS THE SEARCH BAR-----------------------------
$('#searchBar').val('')

//-----------------------------------------------------------------------------
})
})
})

//-------------------------SET ITEMS TO LOCAL STORAGE--------------------------

var count = 0;
function saveLocally() {
    let data = $("#searchBar").val();

localStorage.setItem("city-"+count, data);
count++
}

var myData = newFunction();
function newFunction() {
    return localStorage.getItem('city', data);
}
//--------------above is working------------------------------------
