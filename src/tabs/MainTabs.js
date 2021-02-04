/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import MyTabBar from './MyTabBar';
import Home from '../screens/home/home';
// import Qaa from '../screens/qaa/qaa';

const Tab = createBottomTabNavigator();
class MainTabs extends React.Component {
    render() {
        // const { user_info } = this.props;
        return (
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen
                    key="home"
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Trang chủ',
                        icon: 'home',
                        iconFocus: 'home-outline',
                    }}
                />
                {/* <Tab.Screen
                    key="categories"
                    name="Categories"
                    component={Categories}
                    options={{ title: 'Danh mục', icon: 'apps-box', iconFocus: 'apps' }}
                /> */}
            </Tab.Navigator>
        );
    }
}
const mapStateToProps = () => ({});
export default connect(mapStateToProps, null)(MainTabs);
