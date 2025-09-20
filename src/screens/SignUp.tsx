import {Image, KeyboardAvoidingView, Platform, Pressable, StatusBar, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AlertNotificationRoot} from "react-native-alert-notification";
import {useTheme} from "../theme/ThemeProvider";
import {FloatingLabelInput} from 'react-native-floating-label-input';

export default function SignUp() {

    const applied = useTheme();
    const logo = applied.applied === "dark" ? require("../../assets/logo-dark.png") : require("../../assets/logo.jpeg");
    return (
        <AlertNotificationRoot>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                  className="flex-1 justify-center items-center dark:bg-slate-900"
                                  keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
                <SafeAreaView className="flex flex-col justify-center items-center" style={{flex: 1}}>
                    <StatusBar hidden={true}/>
                    <Image source={logo} className="h-48 w-32"/>
                    <View className="w-full justify-center items-start">
                        <Text className="font-bold text-slate-600 dark:text-slate-100">
                            Create your account and start the conversation today!
                        </Text>
                    </View>
                    <View className="w-full my-3" style={{width: 300}}>
                        <FloatingLabelInput className="w-full" style={{width: 300}} label="Enter Your First name"/>
                    </View>
                    <View className="w-full my-3" style={{width: 300}}>
                        <FloatingLabelInput className="w-full" style={{width: 300}} label="Enter Your Last name"/>
                    </View>
                </SafeAreaView>
                <View className="absolute bottom-5 w-full p-5">
                    <Pressable className="bg-blue-500 justify-center items-center rounded-full p-5">
                        <Text className="text-white text-sm font-bold">
                            Sign Up
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </AlertNotificationRoot>
    );
}