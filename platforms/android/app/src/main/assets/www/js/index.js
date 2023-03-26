/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    /*添加电量状态的监听*/
    window.addEventListener("batterystatus", onBatteryStatus, false);
    /*点按钮拍照*/
    document.getElementById("btnTakePhoto")
        .addEventListener('click', function () {
            navigator.camera.getPicture(cameraSuccess, cameraError, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
        })

    /*调自定义插件*/
    document.getElementById('btnCutomerPlugin')
        .addEventListener('click', function () {
            console.log('customer_plugin.coolMethod')
            customer_plugin.coolMethod(
                "H5传递的参数",
                function () {
                    console.log("成功的回调")
                },
                function () {
                    console.log("失败的回调")
                }
            )
        })

}

function cameraSuccess(imageData) {
    var image = document.getElementById('imgPhoto');
    image.src = "data:image/jpeg;base64," + imageData;
}

function cameraError(msg) {
    console.log(msg)
}

/**
 * 显示电量
 * @param status
 */
function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    document.getElementById('batterystatus').innerText = "当前电量：" + status.level + "%"
}
