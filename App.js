/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
// import * as Sentry from 'sentry-expo';

/** ------------font-----------------*/
import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';

import AppRoot from './src/AppRoot';
// eslint-disable-next-line no-undef
if (__DEV__) {
    // eslint-disable-next-line no-console
    import('./ReactotronConfig').then(() => console.log('---Reactotron Configured---'));
}

export default () => {
    const [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return <AppRoot />;
};
