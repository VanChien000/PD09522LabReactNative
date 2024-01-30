import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    details: {
        marginLeft: '50'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        // textAlign: 'center',
        marginTop: 290,
        paddingBottom: 20,
    },
    firstLine: {
        color: 'white',
        fontSize: 50,
    },
    secondLine: {
        color: 'white',
        fontSize: 50,

    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,

    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        paddingBottom: 50,
        marginLeft: 20,
    }
});