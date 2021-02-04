const MyTheme = {
    Button: {

        raised: true,
        buttonStyle: {
            borderRadius: 24,
        },
        titleStyle: {
            fontSize: 14,
            fontFamily: 'Roboto_500Medium',
            // fontFamily: 'helveticaneuemedium',
        },
        titleProps: {
            allowFontScaling: false,
        }
    },
    Input: {
        allowFontScaling: false,
        inputStyle: {
            fontSize: 14,
            paddingHorizontal: 15,
            fontFamily: 'Roboto_400Regular',
            // fontFamily: 'helveticaneue',
        },
        inputContainerStyle: {
            backgroundColor: 'white',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#e2e2e2',
        },
        labelStyle: {
            fontSize: 14,
            fontFamily: 'Roboto_500Medium',
            // fontFamily: 'helveticaneuemedium',
            marginBottom: 5,
        },
        errorStyle: {
            color: '#DE315E',
        },
        errorProps: {
            allowFontScaling: false,
        }
    },
    Checkbox: {
        allowFontScaling: false,
        containerStyle: {
            backgroundColor: 'transparent',
            borderWidth: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
        },
        textStyle: {
            color: 'white',
            fontFamily: 'Roboto_400Regular',
            // fontFamily: 'helveticaneue',
        },
    },
    Text: {
        allowFontScaling: false,
        style: {
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            // fontFamily: 'helveticaneue',
            color: '#3F3F3F',
        },
    },
    ListItemTitle: {
        allowFontScaling: false,
        style: {
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            // fontFamily: 'helveticaneue',
            color: '#3A3A3A',
        },
    },
    colors: {
        primary: '#1B99A3',
    },
};

export default MyTheme;
