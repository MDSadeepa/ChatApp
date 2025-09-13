import {StatusBar, Image, StyleSheet, View, Text, Animated} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"
import CircleShape from "../components/CircleShape";
import {useEffect, useRef} from "react";

export default function Splash() {
   let fadeIn = useRef(new Animated.Value(0)).current;

   useEffect(() => {
       Animated.timing(fadeIn, {
           toValue: 1,
           duration: 3000,
           useNativeDriver: false
       }).start();
   }, [fadeIn])
    return(
        <SafeAreaView style={styles.container} className="flex-1 justify-center items-center">
            <StatusBar hidden={true} />
            <CircleShape
                width={250}
                height={250}
                fillColor="#09090b"
                borderRadius={999}
                topValue={-100}
                leftValue={-100}
            />
            <Animated.View style={{opacity:fadeIn}}>
                <Image source={require("../../assets/logo.jpeg")} style={{ height: 180, width: 220 }} />
            </Animated.View>

            <View style={styles.bottomContainer} className="absolute bottom-0 mb-10 flex flex-col justify-center items-center">
                <Text style={styles.companyName}>
                    POWERED BY: {process.env.EXPO_PUBLIC_APP_OWNER}
                </Text>
                <Text style={styles.appVersion}>
                    VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    companyName:{
        color:"#475569",
        fontWeight:"bold",
        fontSize:12
    },
    appVersion:{
        color:"#475569",
        fontWeight:"bold",
        fontSize:10
    },
    bottomContainer: {
        position: "absolute",
        bottom: 70,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        backgroundColor:"#F9FAFB",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});