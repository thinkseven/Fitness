# Fitness

## Make sure you have installed below global packages

- create-react-native-app
- react-native-cli
- react-devtools (optional for react-native app inspection)

## Configure below as well in Windows and MacOS

- Android Studio/SDK
- Watchman
- XCode

## Simulator Commands (MacOS)

- Android (⌘M)
- iOS (⌘D)

## Simulator Commands (Windows/Linux)

- Android (Ctrl+M)
- adb shell input keyevent 82

## Troubleshooting and Fix commands

- run react-devtools
- watchman watch-del-all
- npm start -- --start-cache
- npm run android -- --start-cache
- adb kill-server
- adb devices

## Permission to executor shell script in Mac/Linux

- chmod u+x ./shell/emulator.sh
- chmod u+x ./shell/start.sh

## Environment Variatables for Android

- ~/.bash_profile or ~/.zshrc update
  - export ANDROID_HOME=$HOME/Library/Android/sdk
  - export PATH=$PATH:$ANDROID_HOME/tools
  - export PATH=$PATH:$ANDROID_HOME/tools/bin
  - export PATH=$PATH:$ANDROID_HOME/platform-tools
