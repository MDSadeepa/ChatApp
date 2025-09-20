import {StatusBar, Image, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import "../../global.css"
import CircleShape from "../components/CircleShape";
import {useEffect} from "react";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import {useTheme} from "../theme/ThemeProvider";

type Props = NativeStackNavigationProp<RootStackParamList, "Splash">;

export default function Splash() {
    const navigation = useNavigation<Props>();
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, {duration: 3000});
        const timeout = setTimeout(() => {
            navigation.navigate("SignUp");
            clearTimeout(timeout);
        }, 3000)

        return () => {
            clearTimeout(timeout);
        }
    }, [navigation, opacity]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        };
    })

    const applied = useTheme();
    const logo = applied.applied === "dark" ? require("../../assets/logo-dark.png") : require("../../assets/logo.jpeg");

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-slate-50 dark:bg-slate-900">
            <StatusBar hidden={true}/>
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
                <Image source={logo} style={{height: 180, width: 220}}/>
            </Animated.View>

            <Animated.View className="absolute bottom-0 mb-10 flex flex-col justify-center items-center"
                           style={animatedStyle}>
                <Text className="text-xs fornt-bold text-slate-600">
                    POWERED BY: {process.env.EXPO_PUBLIC_APP_OWNER}
                </Text>
                <Text className="text-xs fornt-bold text-slate-600">
                    VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}
                </Text>
            </Animated.View>
        </SafeAreaView>
    );
}
