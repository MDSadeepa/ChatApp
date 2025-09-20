import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Setting from "./src/screens/Setting";
import {ThemeProvider} from "./src/theme/ThemeProvider";

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
    Profile: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Setting: undefined;
}

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{animation: "slide_from_bottom"}}>
                    <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                    <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                    <Stack.Screen name="Setting" component={Setting}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>

    );
}


