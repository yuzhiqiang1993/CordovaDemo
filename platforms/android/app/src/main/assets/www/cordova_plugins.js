cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-battery-status.battery",
      "file": "plugins/cordova-plugin-battery-status/www/battery.js",
      "pluginId": "cordova-plugin-battery-status",
      "clobbers": [
        "navigator.battery"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "com-yzq-customer-plugin.CustomerPlugin",
      "file": "plugins/com-yzq-customer-plugin/www/CustomerPlugin.js",
      "pluginId": "com-yzq-customer-plugin",
      "clobbers": [
        "customer_plugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-battery-status": "2.0.3",
    "cordova-plugin-camera": "6.0.0",
    "com-yzq-customer-plugin": "1.0.0"
  };
});