import {DdLogs, DdSdkReactNative, DdSdkReactNativeConfiguration} from "dd-sdk-reactnative";


export function ddInit(TrackingConsent) {
    const config = new DdSdkReactNativeConfiguration(
        "pubbf6eeef5e626af9fe633a39e004de889",
        "tkpp-dev",
        "6fbad9e9-b244-4b15-abdf-ca4fc6c57fc5",
        true, // track User interactions (e.g.: Tap on buttons)
        true, // track XHR Resources
        true, // track Errors
        TrackingConsent
    )

    config.nativeCrashReportEnabled = true
    config.sampleRate = 100

    console.log('Call DdSdkReactNative.initialize');

    DdSdkReactNative.initialize(config).then(() => {
        DdLogs.info('The RN Sdk was properly initialized', {})
        DdSdkReactNative.setUser({id: "1337", name: "Lucas Aguiar", email: "lucas.abreu@redeceler.com", type: "dev"})
        DdSdkReactNative.setAttributes({campaign: "ad-network"})
    });
}

