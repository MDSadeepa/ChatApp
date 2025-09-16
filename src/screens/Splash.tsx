import {StatusBar, Image, StyleSheet, View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"
import CircleShape from "../components/CircleShape";
import {useEffect} from "react";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

export default function Splash() {
   const opacity = useSharedValue(0);

   useEffect(() => {
       opacity.value = withTiming(1, {duration: 3000});
   },[])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    })

    return(
        <SafeAreaView className="flex-1 justify-center items-center">
            <StatusBar hidden={true} />
            <CircleShape
                width={250}
                height={250}
                fillColor="#09090b"
                borderRadius={999}
                topValue={-100}
                leftValue={-100}
            />
            <CircleShape
                width={250}
                height={250}
                fillColor="#09090b"
                borderRadius={999}
                topValue={-20}
                leftValue={90}
            />

            <Animated.View style={[animatedStyle]}>
                <Image source={require("../../assets/logo.jpeg")} style={{ height: 180, width: 220 }} />
            </Animated.View>

            <Animated.View className="absolute bottom-0 mb-10 flex flex-col justify-center items-center" style={animatedStyle}>
                <Text className="text-xs fornt-bold text-slate-600">
                    POWERED BY: {process.env.EXPO_PUBLIC_APP_OWNER}
                </Text>
                <Text className="text-xs fornt-bold text-slate-600">
                    VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}
                </Text>
            </Animated.View>
        </SafeAreaView>
    )
}
// const styles = StyleSheet.create({
//     companyName:{
//         color:"#475569",
//         fontWeight:"bold",
//         fontSize:12
//     },
//     appVersion:{
//         color:"#475569",
//         fontWeight:"bold",
//         fontSize:10
//     },
//     bottomContainer: {
//         position: "absolute",
//         bottom: 70,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     container:{
//         backgroundColor:"#F9FAFB",
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center"
//     }
// });