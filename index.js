
import React from 'react';
import { NativeModules } from 'react-native';
const { RNTcdChat } = NativeModules;

export default {
    ping:function(){
        var checkSTR = RNTcdChat.pingMe();
        console.log("Hi Hello", checkSTR);
    }

}




