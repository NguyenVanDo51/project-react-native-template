/* eslint-disable no-plusplus */
import { StyleSheet } from 'react-native';

const margin_arrs = [];
for (let index = 1; index < 100; index++) {
    margin_arrs[`marginTop_${index}`] = { marginTop: index };
    margin_arrs[`marginRight_${index}`] = { marginRight: index };
    margin_arrs[`marginBottom_${index}`] = { marginBottom: index };
    margin_arrs[`marginLeft_${index}`] = { marginLeft: index };

    margin_arrs[`paddingTop_${index}`] = { paddingTop: index };
    margin_arrs[`paddingRight_${index}`] = { paddingRight: index };
    margin_arrs[`paddingBottom_${index}`] = { paddingBottom: index };
    margin_arrs[`paddingLeft_${index}`] = { paddingLeft: index };
}
const styles = StyleSheet.create({
    ...margin_arrs,
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    colorWhite: {
        color: 'white',
    },
    backgroundColorWhite: {
        backgroundColor: 'white',
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingHorizontal: 0,
        paddingVertical: 15,
        marginTop: 0,
        paddingTop: 0,
    },
    checkboxTxt: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '400',
    },
    fontSizeDefault: {
        fontSize: 14,
    },
    colorLogo: {
        color: '#1B99A3',
    },
    bgColorLogo: {
        backgroundColor: '#1B99A3',
    },
    font300Italic: {
        fontFamily: 'Roboto_300Light_Italic',
    },
    dfFontFamily: {
        fontFamily: 'Roboto_400Regular',
        // fontFamily: 'helveticaneue',
    },
    dfFontFamilyItalic: {
        fontFamily: 'Roboto_400Regular_Italic',
        // fontFamily: 'helveticaneue',
    },
    fontBold: {
        fontFamily: 'Roboto_700Bold',
        // fontFamily: 'helveticaneuebold',
    },
    fontMedium: {
        // fontFamily: 'helveticaneuemedium',
        fontFamily: 'Roboto_500Medium',
    },
    fontMediumItalic: {
        // fontFamily: 'helveticaneuemedium',
        fontFamily: 'Roboto_500Medium_Italic',
    },
    paddingLoadPlaceholder: { paddingVertical: 15, paddingHorizontal: 15 },

});
export default styles;
