const express=require('express');
const route=express.Router();
const http = require('http');

route.get("/",(request,response)=>{
response.send("App runing successfully");
});

route.get('/checkLocation', async (req, res) => {
  
    try {
      const ipAddress = await getPublicIPAddress();
      const geoLocationResult = await getGeoLocation(ipAddress);
      const gender =await identifyGenderFromLocation(geoLocationResult);
      console.log("Gender : "+gender);
  
      res.json({
        publicIPAddress: ipAddress,
        geolocation: geoLocationResult,
        estimatedGender: gender,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  async function getPublicIPAddress() {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'httpbin.org',
        port: 80,
        path: '/ip',
        method: 'GET',
      };
  
      const req = http.request(options, (res) => {
        let data = '';
  
        res.on('data', (chunk) => {
          data += chunk;
        });
  
        res.on('end', () => {
          const result = JSON.parse(data);
          console.log('Public IP Address:', result.origin);
      console.log('Full Response:', result);
          resolve(result.origin);
       
        });
      });
  
      req.on('error', (e) => {
        reject(new Error(`Error getting public IP: ${e.message}`));
      });
  
      req.end();
    });
  }
  
  async function getGeoLocation(ipAddress) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'ipinfo.io',
        port: 80,
        path: `/${ipAddress}/json`,
        method: 'GET',
      };
  
      const req = http.request(options, (res) => {
        let data = '';
  
        res.on('data', (chunk) => {
          data += chunk;
        });
  
        res.on('end', () => {
          const result = JSON.parse(data);
          console.log('Geolocation Information:', result);
          resolve(result);
        });
      });
  
      req.on('error', (e) => {
        reject(new Error(`Geolocation API Error: ${e.message}`));
      });
  
      req.end();
    });
  }
  
  // Rest of the code for gender identification remains the same
  async function identifyGenderFromLocation(geoLocationResult) {
      const country = geoLocationResult.country;
    
      // Mapping of countries to likely gender proportions (purely fictional and for illustration)
      const genderProportions = {
        'US': { male: 0.49, female: 0.51 },
        'IN': { male: 0.51, female: 0.49 },
        // Add more country mappings as needed
      };
    
      if (genderProportions[country]) {
        const { male, female } = genderProportions[country];
    
        // Assuming a simple threshold for classification
        if (male > female) {
          return 'male';
        } else if (female > male) {
          return 'female';
        } else {
          return 'unknown';
        }
      } else {
        return 'unknown';
      }
    }
  


module.exports=route;