
import React from 'react';
import { NativeModules } from 'react-native';
const { RNTcdChat } = NativeModules;

export default {
    ping:function(){
        
        RNTcdChat.pingMe(str => {
            console.log('***********', str);

            });
        console.log("Hi Hello");
    }

}




