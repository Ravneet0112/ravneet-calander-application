
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeDisplayEl = $('#currentDay');
var descriptionEL = $(".descrition");
var timeblockEl = $(".time-block");
var textarea = $("textarea")
var hourEl = $(".hour").text();
//console.log(Date.parseExact("8:00AM", "hh:mm tt"));

//let time = Date.parseExact('8:00 AM', "hh:mm tt");
//console.log(time);

var timetext = console.log($(this).hourEl);

var currenthour = dayjs().format('MMM DD, YYYY  hh:mm:ss a');
$(document).ready(function () {

  function displayTime() {
    var currenthour = dayjs().format('MMM DD, YYYY  hh:mm:ss a');
    timeDisplayEl.text(currenthour);
   }
   displayTime();
   setInterval(displayTime, 1000);
   
   
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.btn').click(function(event){
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, description);
    
    $(this).description = localStorage.getItem("item");
   
  })

 // if(rightNow < dayjs("10:00", "hh:mm"){
    
//  })
//function gettime(){
//if ($(this)."hourEl".attr() < currenthour){
//  timeblockEl.css(".past");
//}
//elseif ($(this).timeblockEl.hourEl.attr() > currenthour);{
//  timeblockEl.css(".future");
//}
//{
//  timeblockEl.css(".present");
//}}
//gettime();
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
    var hour = $(".timeblock div").text();
    var timer = dayjs().format(hour);
    console.log(timer);

    function lessthennine(){
      const lessthennine = '09:00:00';
      if (currenthour < lessthennine){
        $("#hour-9, #hour10, #hour11, #hour12, #hour13, #hour14, #hour15, #hour16, #hour17, #hour18, #hour19, #hour20, #hour 21, #hour22, #hour 23").css("background-color", "pink");
      }

    }

    lessthennine();
    
  //localStorage.setItem(key, value);
  //let lastname = localStorage.getItem(key);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // TODO: Add code to display the current date in the header of the page.
});

