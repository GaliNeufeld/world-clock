function updateTime() {
  //San-francisco
  let sanFranciscoElement = document.querySelector("#san-francisco");

  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  let sanFranciscoTime = moment().tz("America/Los_Angeles");
  sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM D, YYYY");

  
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format(
    "h:mm:ss [<small>]A[</small]"
  );
  //Osaka
  let osakaElement = document.querySelector("#osaka");

  let osakaDateElement = osakaElement.querySelector(".date");
  let osakaTime = moment().tz("Asia/Tokyo");
  osakaDateElement.innerHTML = osakaTime.format("MMMM D, YYYY");
  
  let osakaTimeElement = osakaElement.querySelector(".time");
  osakaTimeElement.innerHTML = osakaTime.format("h:mm:ss [<small>]A[</small]");
}
updateTime();
setInterval(updateTime, 1000);
