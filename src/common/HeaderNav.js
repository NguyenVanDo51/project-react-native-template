/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    View, StyleSheet, Text
} from 'react-native';
import {
    Input
} from 'react-native-elements';
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import stylesDefault from '../screens/styles';

class HeaderNav extends React.Component {
    render() {
        // const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text> Header Nav </Text>
            </View>
        );
    }
}
const mapStateToProps = ({ persist }) => ({
    user_info: persist.user_info,
});
export default connect(mapStateToProps)(HeaderNav);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        ...stylesDefault.bgColorLogo,
        paddingTop: 40,
        paddingBottom: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
