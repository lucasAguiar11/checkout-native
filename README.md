"# checkout-native" 

https://reactnative.dev/docs/signed-apk-android

keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

npx react-native run-android --variant=release
