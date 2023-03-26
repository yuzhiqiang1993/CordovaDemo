package com.yzq.cordovademo.plugin;

import android.widget.Toast;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


/**
 * @author yuzhiqiang (zhiqiang.yu.xeon@gmail.com)
 * @description 自定义的cordova插件
 * @date 2023/3/26
 * @time 15:09
 */

public class CustomerPlugin extends CordovaPlugin {

    /**
     * js 最终会调用到execute方法
     *
     * @param action          The action to execute.
     * @param args            The exec() arguments.
     * @param callbackContext The callback context used when calling back into JavaScript.
     * @return
     * @throws JSONException
     */
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        /*一般根绝传过来的action匹配，做不同的逻辑*/
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        Toast.makeText(cordova.getActivity(), "插件方法被调用了", Toast.LENGTH_SHORT).show();
        if (message != null && message.length() > 0) {
            /*成功回调给js*/
            callbackContext.success("nativa调用完成");
        } else {
            /*错误回调给js*/
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
