
import React from 'react';
import { NativeModules } from 'react-native';
const { RNTcdChat } = NativeModules;

export default {
    ping:function(){
        console.log("Hi Hello", RNTcdChat.pingMe());
    }

}




