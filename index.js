
import React from 'react';
import { NativeModules } from 'react-native';
const { RNTcdChat } = NativeModules;

class TcdChat extends Component {
    // ping:function(){
        
    //     RNTcdChat.pingMe(str => {
    //         console.log('***********', str);

    //         });
    //     console.log("Hi Hello");
    // }

    ping(){
        // console.log("inside ping");
        // RNTcdChat.pingMe(str => {
        //     console.log("^^^^^^^^^^^^^",str)
        // })
        return 'inside ping'
    }

    render() {
        RNTcdChat.pingMe(str => {
            console.log("^^^^^^^^^^^^^",str)
        })
        return (
         <React.Fragment />
        );
      }

}




