import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ userNumber, roundNumber, onStartNewGame }) {
    return(<>
        <View style={styles.rootContainer}>
            <Title>Game Over!!!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    </>);
}
export default GameOverScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:"center",
        alignItems:"center"
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        margin:40,
        overflow:"hidden"
    },
    image:{
        width:'100%',
        height:'100%',   
    },
    summaryText:{
        fontFamily:'monospace', 
        fontWeight:"bold",
        fontSize:24,
        textAlign:"center",
        marginBottom:24
    },
    highlight:{
        color:Colors.primary500,
        fontFamily:'sans-serif-condensed',
        fontWeight:"bold"
    }
});