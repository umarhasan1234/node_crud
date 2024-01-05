const express=require('express');
const route=express.Router();
const http = require('http');
const fs = require('fs');
//const {route} = require('./main');

route.get('/test', (req, res) => {
  res.send('run successfully......'); // Sending a response using res.send
});

route.get("/userData",(req,res)=>{

    var user = detect.parse(navigator.userAgent);


    console.log("Browser’s name:", user.browser.family);
    console.log("Type of device (e.g., 'Desktop' or 'Mobile'):", user.device.type);
    console.log("Device name:", user.device.family);
    console.log("Browser’s name and version :", user.browser.name);
    console.log("Browser’s  version:", user.browser.version);
    console.log("Operating system name:", user.os.family);
    console.log("Operating system name and full version:", user.os.name);
    
    // console.log("Browser’s major version number:", user.browser.major);
    // console.log("Browser’s minor version number:", user.browser.minor);
    //console.log("Browser’s patch number:", user.browser.patch);
    
    console.log("Device name and version:", user.device.name);
    console.log("Device version:", user.device.version);
    console.log("Device’s major version number:", user.device.major);
    console.log("Device’s minor version number:", user.device.minor);
    console.log("Device’s patch number:", user.device.patch);
    console.log("Manufacturer of the device:", user.device.manufacturer);
    
    
    
    //// Access header information
    // var header = document.querySelector('header');
    // console.log('header:',header);
    // var headerContent = header.innerHTML;
    // console.log('Header Content:', headerContent);
    // document.write("header content",headerContent);
    
    // // Access main content information
    // var main = document.querySelector('main');
    // var mainContent = main.innerHTML;
    // console.log('Main Content:', mainContent);
    // document.write('Main Content:', mainContent);
    
    // // Access footer information
    // var footer = document.querySelector('footer');
    // var footerContent = footer.innerHTML;
    // console.log('Footer Content:', footerContent);
    // document.write('Footer Content:', footerContent);
    
    
    // Get the full URL
              // document.write('Full URL:', fullURL);
              // var fullURL = window.location.href;
              // console.log('Full URL:', fullURL);
    
    
    // Get the protocol (http:, https:, file:, etc.)
            // var protocol = window.location.protocol;
            // console.log('Protocol:', protocol);
            // document.write('Protocol:', protocol);
    
    
    // // Get the host (domain and port)
    // var host = window.location.host;
    // console.log('Host:', host);
    // document.write('Host:', host);
    
    
    // // Get the pathname (part of the URL after the domain)
    // var pathname = window.location.pathname;
    // console.log('Pathname:', pathname);
    // document.write('Pathname:', pathname);
    
    
    // // Get the search parameters
    // var searchParams = window.location.search;
    // console.log('Search Params:', searchParams);
    // document.write('Search Params:', searchParams);
    
    
    // // Get the hash (anchor or fragment identifier)
    // var hash = window.location.hash;
    // console.log('Hash:', hash);
    // document.write('Hash:', hash);
    
    
    // // Get the search parameters
    // var searchParams = new URLSearchParams(window.location.search);
    
    
    
    // // // Retrieve specific parameter values
    // // var param1 = searchParams.get('param1');
    // // var param2 = searchParams.get('param2');
    
    
    
    // // // Log parameter values
    // // console.log('param1:', param1);
    // // console.log('param2:', param2);
    // // document.write('param2:', param2);
    
    let url = window.location.href;
    
    fetch(url)
      .then(response => response.text())
      .then(html => {
        // // Create a temporary DOM element
        // let tempElement = document.createElement('div');
        // tempElement.innerHTML = html;
    
        // Extract information from the head tag
        let headElement = document.querySelector('header');
    console.log('header element:',headElement.innerHTML);
        // Now you can access specific elements within the head tag
        // let titleElement = headElement.querySelector('title');
        // let metaDescriptionElement = headElement.querySelector('meta[name="description"]');
        // let metaKeywordsElement = headElement.querySelector('meta[name="keywords"]');
    
        // // Log the information
        // console.log('Title:', titleElement ? titleElement.innerText : 'N/A');
        // console.log('Description:', metaDescriptionElement ? metaDescriptionElement.getAttribute('content') : 'N/A');
        // console.log('Keywords:', metaKeywordsElement ? metaKeywordsElement.getAttribute('content') : 'N/A');
      })
      .catch(error => console.error('Error fetching the HTML:', error));
    
    
      getUserLocation();
      function getUserLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
      
      function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
     
        alert("Your location is:\nLatitude: " + latitude + "\nLongitude: " + longitude)
        console.log("Your location is:\nLatitude: " + latitude + "\nLongitude: " + longitude);
      }
    
        function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
          
            }
      }
      
    
      console.log("CPU Architecture: " + navigator.hardwareConcurrency);
      console.log("Device Type: " + navigator.deviceType); // Non-standard, may not be supported in all browsers
      console.log("Device Memory: " + navigator.deviceMemory + "GB");
      console.log("Product: " + navigator.product);
      console.log("cookie Enable: " + navigator.cookieEnabled);
      console.log("credentials: " + navigator.credentials);
      console.log("Language: " + navigator.language);
      console.log("Languages: " + navigator.languages);
      console.log("max touch points: " + navigator.maxTouchPoints);
      console.log("media capabilitess: " + navigator.mediaCapabilities);
      console.log("online: " + navigator.onLine);
      console.log("storage: " + navigator.storage);
    
    
      var timezoneOffset = new Date().getTimezoneOffset();
      console.log("Timezone Offset: " + timezoneOffset);
    
      // Create a new Date object
    const currentDate = new Date();
    
    // Get various components of the current date and time
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    // Display the current date and time
    console.log(`Current Date and Time: ${day}-${month}-${year}-- ${hours}:${minutes}:${seconds}`);
    
    
    if (navigator.getBattery) {
      navigator.getBattery().then(function (battery) {
        console.log("Battery Level: " + (battery.level * 100) + "%");
        console.log("Charging: " + (battery.charging ? "Yes" : "No"));
      });
    }
    
    // Get the current date and time
    //const currentDate = new Date();
    
    // Specify the time zone for Saudi Arabia
    const saudiArabiaTimeZone = "Asia/Riyadh";
    
    // Get the current date and time in the specified time zone
    const currentSaudiArabiaDate = new Date().toLocaleTimeString("en-US", { timeZone: saudiArabiaTimeZone });
    
    // Output the current time
    console.log(`Current time in Saudi Arabia: ${currentSaudiArabiaDate}`);
    
    
    
    const newYorkTimeZone = "America/New_York";
    
    // Get the current date and time in the specified time zone
    const currentAmericaDate = new Date().toLocaleTimeString("en-US", { timeZone: newYorkTimeZone });
    
    // Output the current time in New York
    console.log(`Current time in New York: ${currentAmericaDate}`);
    
      
    // Specify the time zone for Pakistan
    const pakistanTimeZone = "Asia/Karachi";
    
    // Get the current date and time in the specified time zone
    const currentpakistanTime = new Date().toLocaleTimeString("en-US", { timeZone: pakistanTimeZone });
    
    // Output the current time in Pakistan
    console.log(`Current time in Pakistan: ${currentpakistanTime}`);
    
    
    // Specify the time zone for Bangladesh
    const bangladeshTimeZone = "Asia/Dhaka";
    
    // Get the current date and time in the specified time zone
    const currentBangladeshtime = new Date().toLocaleTimeString("en-US", { timeZone: bangladeshTimeZone });
    
    // Output the current time in Bangladesh
    console.log(`Current time in Bangladesh: ${currentBangladeshtime}`);
    
    // Specify the time zone for Sri Lanka
    const sriLankaTimeZone = "Asia/Colombo";
    
    // Get the current date and time in the specified time zone
    const currentSrilankaTime = new Date().toLocaleTimeString("en-US", { timeZone: sriLankaTimeZone });
    
    // Output the current time in Sri Lanka
    console.log(`Current time in Sri Lanka: ${currentSrilankaTime}`);
    
    // Specify the time zone for Japan
    const japanTimeZone = "Asia/Tokyo";
    
    // Get the current date and time in the specified time zone
    const currentJapanTime = new Date().toLocaleTimeString("en-US", { timeZone: japanTimeZone });
    
    // Output the current time in Japan
    console.log(`Current time in Japan: ${currentJapanTime}`);
    
    
    // Specify the time zone for India
    const indiaTimeZone = "Asia/Kolkata";
    
    // Get the current date and time in the specified time zone
    const currentIndiaTime = new Date().toLocaleTimeString("en-US", { timeZone: indiaTimeZone });
    
    // Output the current time in India
    console.log(`Current time in India: ${currentIndiaTime}`);
    
    
    // Using Map
    var myMap = new Map();
    
    // Adding key-value pairs
    myMap.set(currentSaudiArabiaDate, "UAE");
    myMap.set(currentJapanTime, "Japan");
    myMap.set(currentAmericaDate, "USA");
    myMap.set(currentIndiaTime, "India");
    
    const userLocale = "en-US";
    const currentUserTime = new Date().toLocaleTimeString(userLocale);
    
    // Accessing values
    console.log("Country :-"+myMap.get(currentUserTime)); 
    
    // Iterating through key-value pairs
    // myMap.forEach(function(value, key) {
    //   console.log(key + ": " + value);
    // });
    
    
    
     // Display the number of pages in history
     document.getElementById('historyLength').innerText = history.length;
    
     // Go back in history
     function goBack() {
         window.history.back();
     }
    
     // Go forward in history
     function goForward() {
         history.forward();
     }
    
     // Go back 3 pages in history
     function goSpecific() {
         window.history.go(-3);
     }
    
    
    
    
    
    
    const path = 'console_log.txt'; // Change the file path as needed
    
    // Save the original console.log method
    const originalConsoleLog = console.log;
    
    // Override console.log
    console.log = function (...args) {
      // Call the original console.log
      originalConsoleLog.apply(console, args);
    
      // Convert the logged data to a string
      const logMessage = args.map(arg => JSON.stringify(arg)).join(' ');
    
      // Append the log message to a text file
      fs.appendFileSync(path, logMessage + '\n');
    };
    
    // Example usage
    console.log('Hello, this will be logged to the console and saved to the file.');
    
    // To stop capturing console.log and restore the original method
    // console.log = originalConsoleLog;
    

});

module.exports=route;