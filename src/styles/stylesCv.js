
import { Font, StyleSheet } from '@react-pdf/renderer'
import Lato from "/fonts/Lato-Regular.ttf"
Font.register({ family: 'Lato', src: Lato })

const styles = StyleSheet.create({

    page: {
        fontFamily: 'Lato',
        fontSize: 11,
        flexDirection: 'row',
        backgroundColor: '#212529',
    },
    leftColumn: {
        flex: 1,
        justifyContent: 'space-around',
        width: '30%',
        backgroundColor: '#212529',
        paddingHorizontal: 15,
    },
    rightColumn: {
        width: '70%',
        backgroundColor: '#343a40',
        borderRadius: 20,
        borderTop: '1px solid #ADB5BD',
        borderBottom: '2px solid #ADB5BD',
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    header: {
        textAlign: 'center',
        color: '#000000',
    },

    headerRight: {
        fontSize: 18,
        fontFamily: 'Lato',
        backgroundColor: '#212529',
        borderBottom: '1px solid white',
        textAlign: 'center',
        alignSelf: "center",
        color: '#00fa9a',
        borderRadius: 10,
        margin: 10,
        paddingLeft: 6,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 1,
    },
    subheader: {
        fontSize: 18,
        fontFamily: 'Lato',
        alignSelf: "center",
        borderBottom: '2px solid #ADB5BD',

        color: '#00fa9a',
    },
    subheaderRight: {
        fontFamily: 'Lato',
        fontSize: 14,
        borderBottom: '1px solid gold',
        borderRadius: '50%',
        alignSelf: "center",
        color: 'white',
        backgroundColor: '#343a40',
        marginVertical: 7,
        paddingVertical: 3,
        paddingRight: 5,
        paddingLeft: 10,
    },
    text: {
        fontSize: 14,
        color: 'black',
        alignSelf: "center",
        borderRadius: 7,
        backgroundColor: 'white',
        paddingLeft: 5,
        paddingRight: 6,
        paddingVertical: 3,
    },
    textCard: {
        color: '#f8f9fa',
        alignSelf: 'start',
        borderRadius: '50%',
        marginHorizontal: 10,
        marginVertical: 3,
        fontSize: 9.5
    },
    textCardInfo: {
        textDecoration: 'underline',
        color: '#f8f9fa',
        borderRadius: '50%',
        alignSelf: 'center',
        paddingVertical: 3,
    },
    logo: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 3,
    },
    textCompany: {
        alignSelf: "center",
        color: 'white',
        fontFamily: 'Lato',
        marginLeft: 5,
    },
    textDate: {
        color: '#00ccff',
        alignSelf: "center",
        paddingVertical: 3,
    },
    statement: {
        textAlign: "center",
        alignSelf: "center",
        color: 'white',
        borderTop: '2px solid #00ccff',
        borderBottom: '2px solid #00ccff',
        backgroundColor: "#212529",
        borderRadius: '10px',
        padding: 6,
    },
    statementRight: {
        alignSelf: "center",
        color: 'white',
        margin: "0px 5px",
    },
    letsWork: {
        fontFamily: 'Lato',
        alignSelf: 'center',
        fontSize: 16,

    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tech: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 'auto',
        paddingVertical: 3,
    },
    url: {
        fontFamily: 'Lato',
        borderBottom: '1px solid gold',
        backgroundColor: '#343a40',
        color: '#00ccff',
        borderRadius: '50%',
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginVertical: 3,
    },
    cardBox: {
        backgroundColor: "white",
    },
    card: {
        borderTop: '0.5px solid #ADB5BD',
        borderRight: '0.5px solid #ADB5BD',
        borderLeft: '2px solid #ADB5BD',
        borderBottom: '2px solid #ADB5BD',
        borderRadius: "10px",
        backgroundColor: '#212529',
        width: '45%',
        paddingVertical: 10,
        marginVertical: 2
    },
    experience: {
    },
    education: {
    },
    techImage: {
        height: 28,
        width: 28,
        borderRadius: "50%",
        border: '0.4px solid white',
        backgroundColor: 'white',
        margin: 1,
    },
    image: {
        border: '3.5px solid #ADB5BD',
        borderRadius: "50%",
        backgroundColor: '#343a40',
        padding: 1
    },
    progressBar: {
        height: 8,
        backgroundColor: 'white',
        border: '0.5px solid black',
        borderRadius: 10,
        marginVertical: 2
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#00CCFF',
        borderRadius: 4,
        margin: 0.5,
    },
    progressText: {
        fontFamily: 'Lato',
        color: 'white',
        alignSelf: "center",
        borderTop: '2px solid #ADB5BD',
        paddingVertical: 1,
        paddingTop: 5,
        marginBottom: 2,
    },
})

export default styles