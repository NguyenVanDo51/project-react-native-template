/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class MyTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> aaaaaaaaaaaaa</Text>
            </View>
        );
    }
}
const mapStateToProps = () => ({});
export default connect(mapStateToProps)(MyTabBar);
