/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, LogBox } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './store';

// Screen

// Tabs
import MainTabs from './tabs/MainTabs';
// Head
import HeaderNav from './common/HeaderNav';
import MyTheme from './MyTheme';

LogBox.ignoreAllLogs();

enableScreens();

const Stack = createStackNavigator();

export default class AppRoot extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <PersistGate
                        loading={<ActivityIndicator color="red" size="small" />}
                        persistor={persistor}
                    >
                        <ThemeProvider theme={MyTheme}>
                            <StatusBar
                                translucent
                                backgroundColor="#1B99A3"
                                barStyle="light-content"
                            />
                            <Stack.Navigator initialRouteName="Home" headerMode="screen">
                                <Stack.Screen
                                    name="Home"
                                    component={MainTabs}
                                    options={{ header: (props) => <HeaderNav {...props} /> }}
                                />
                                {/* <Stack.Screen
                                    name="CategoriesChild"
                                    component={CategoriesChild}
                                    options={{
                                        header: (props) => <HeaderNavOnlyText {...props} />,
                                        ...TransitionPresets.SlideFromRightIOS,
                                    }}
                                /> */}
                            </Stack.Navigator>
                        </ThemeProvider>
                    </PersistGate>
                </NavigationContainer>
            </Provider>
        );
    }
}
