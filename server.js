const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server is running');
io.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets are connected', connections.length);

    setInterval(intervalFunc, 60000);

    //Disconnect 
    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets are connected', connections.length);
    });

    socket.on('NodeJS server port', function(data) {
        console.log(data);
        io.sockets.emit('iOS Client Port', {msg: 'Intel Update', m1:'new Intel'});
    });

    socket.on('intelFeedEmitte', function(data) {
        console.log(data);
        io.sockets.emit('intelFeedListen', {
            "submitter": {
              "email_id": "chawda.hitesh@gmail.com",
              "fb_profile_image": "",
              "google_id": "114157440734412228503",
              "image_removed": 0,
              "device_id": "1F6059D5-94BF-4B76-AE7F-54C9B04CF17E",
              "device_model": "iPhone12,8",
              "google_profile_image": "https://lh3.googleusercontent.com/a-/AOh14GgsAM7Htd9VnfoY59crWFBzSuqcg_f84KcnHWqF1A=s100",
              "last_name": "Chawda",
              "device_type": "iOS",
              "sw_udid": "",
              "ip_address": "106.214.15.167",
              "device_os": "14.6",
              "country_code": "+1",
              "user_id": "90b176b0-c8a1-11e9-8a9e-77a2c8bb0929",
              "fb_id": "",
              "image_key": "-C08FCF68-C364-4BAF-95E5-5E14EA6D2583-DzzYh",
              "country_name": "USA",
              "phone_number": "2563879636",
              "first_name": "Hitesh",
              "carrier_name": "AirTel"
            },
            "incident_datetime": "",
            "do_not_contact": false,
            "claimed": false,
            "incident_geofence": {
              "address": "143K, Sector A, Sector C, Gumasta Nagar, Scheme 71, Indore, Madhya Pradesh 452009, India",
              "latitude": 22.703617877254285,
              "longitude": 75.82924330532938
            },
            "media": [
              {
                "s3key": "58D5CE17-671F-4FAB-B96D-1BC812E6F670-pMnRB.png",
                "width": 600,
                "type": 1,
                "height": 338
              }
            ],
            "organization_logo": "743c76a0-f669-11ea-91c5-99b0bbb12080/0/1619420132002.png",
            "submitter_location": {
              "country": "India",
              "address": "143K, Sector A, Sector C, Gumasta Nagar, Scheme 71, Indore, Madhya Pradesh 452009, India",
              "pin": "452009",
              "city": "Indore",
              "latitude": 22.703617877254285,
              "state": "Madhya Pradesh",
              "longitude": 75.82924330532938
            },
            "location_id": "3cfc4520-82fb-11eb-aae1-93746a4fcd00",
            "incident_id": "c0f31800-2c30-11e9-92e3-9f0063e2e923",
            "location_logo": "",
            "create_datetime": "2021-08-05 08:36:41",
            "alert_type_status": false,
            "location_city": "Hitesh Home Public O",
            "intel_id": "41d84950-f5c8-11eb-82e1-05bdc113f553",
            "is_active": 1,
            "alert_description": "Socket Intel",
            "incident_datetime_type": "1",
            "organization_name": "IOS Org",
            "created_by": "chawda.hitesh@gmail.com",
            "individuals_info": [],
            "additional_information": {},
            "location_name": "Hitesh Home Public O",
            "report_id": 46796290,
            "organization_id": "743c76a0-f669-11ea-91c5-99b0bbb12080",
            "anonymous": false,
            "category": 1,
            "incident": {
              "incident_map_icon": "0/0/1549692389234.png",
              "app_small_icon": "0/0/1549692389234.png",
              "image": "0/0/1549692389234.png",
              "description": "",
              "id": "c0f31800-2c30-11e9-92e3-9f0063e2e923",
              "title": "Working Hit and Run"
            },
            "status": 0,
            "timeline_description": "",
            "more_details_count": 0
          });
    });
});

function intervalFunc() {
    io.sockets.emit('iOS Client Port', {msg: 'Hi Calling from Loop!'});
}