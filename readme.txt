----------CHECK UPDATE-------------
yarn npm-check-updates 
-----------------------

---------- UPDATE PHIEN BAN MOI CAC UNG DUNG -------------
yarn upgrade-interactive --latest
expo install @react-native-community/netinfo @react-native-community/picker @react-native-community/viewpager react-native-safe-area-context react-native-webview react-native-screens react-native-gesture-handler 

---------- BUILD -------------
cd 'C:\Program Files\Java\jdk-15.0.1\bin\'
expo credentials:manager
//EXPO HOI KEY TRO THANG BANG WIN

#bản chính thức
expo build:android --release-channel release 
expo build:ios --release-channel release
expo publish:set --release-channel release --publish-id 6fd8ec31-5bec-4908-adfa-b94829d33747
expo publish --release-channel release 

#bản dev
expo build:android --release-channel staging

//PERMISSION IOS
https://www.iosdev.recipes/info-plist/permissions/
//VD CONFIG
https://gist.github.com/warlock/5db76a64d56d4254c280344e40b77337

#CHECK LIST APPSTORE

https://github.com/acomito/expo-to-appstore-checklist

#2FA
https://github.com/expo/expo/issues/160