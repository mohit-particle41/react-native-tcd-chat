
# react-native-tcd-chat- demo

## Getting started

`$ npm install react-native-tcd-chat --save`

### Mostly automatic installation

`$ react-native link react-native-tcd-chat`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-tcd-chat` and add `RNTcdChat.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNTcdChat.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTcdChatPackage;` to the imports at the top of the file
  - Add `new RNTcdChatPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-tcd-chat'
  	project(':react-native-tcd-chat').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-tcd-chat/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-tcd-chat')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNTcdChat.sln` in `node_modules/react-native-tcd-chat/windows/RNTcdChat.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Tcd.Chat.RNTcdChat;` to the usings at the top of the file
  - Add `new RNTcdChatPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNTcdChat from 'react-native-tcd-chat';

// TODO: What to do with the module?
RNTcdChat;
```
  
