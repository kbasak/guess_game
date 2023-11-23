import { Dimensions, useWindowDimensions } from "react-native/types";

export const Note = () => {
    return (
        <View>

        </View>
    )
}

//To get a device width use Dimention API
const deviceWidth = Dimensions.get('window').width;
//KeyBoardAvoidingView to avoid key board

//to get height and width dynamically
const [height, width] = useWindowDimensions();

//Platform Api to style platform specific IOS/Android