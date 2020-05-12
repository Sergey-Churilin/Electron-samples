console.log('script!');

var HID = require('node-hid');

var hidDevices = HID.devices() || [];
console.log(hidDevices)