echo -e "\e[33mcleaning up..."
echo -e "\e[0m"
adb kill-server
adb devices
echo -e "\e[33mFound the below configured android emulators."
echo "If below list is empty, please configure it using Android Studio/AVD Manager"
echo -e "\e[0m"
$ANDROID_HOME\\emulator\\emulator -list-avds
echo
echo -e "\e[33mPlease type the emulator name and press enter: " 
echo -e "\e[0m"
read avd
echo
echo -e "\e[33mStarting the emulator.."
echo -e "\e[0m"
$ANDROID_HOME\\emulator\\emulator -avd $avd
