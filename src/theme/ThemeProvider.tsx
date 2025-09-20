import React, {createContext, useEffect} from "react";
import {useColorScheme} from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ActivityIndicator} from "react-native";

export type ThemeOptions = "light" | "dark" | "system";

const THEME_KEY = "@app_color_scheme";

type ThemeContextType = {
    preference: ThemeOptions;
    applied: "light" | "dark";
    setPreference: (themeOption: ThemeOptions) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: { children: React.ReactNode }) {
    const {colorScheme, setColorScheme} = useColorScheme();
    const [getPreferenceState, setPreferenceState] = React.useState<ThemeOptions>("system");
    const [isReady, setReady] = React.useState(false);

    useEffect(() => {
        (async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEME_KEY);
                if (savedTheme === "dark" || savedTheme === "light") {
                    setPreferenceState(savedTheme as ThemeOptions);
                    setColorScheme(savedTheme as ThemeOptions);
                } else {
                    setPreferenceState("system");
                    setColorScheme("system");
                }
            } catch (error) {
                console.warn("Failed to load theme: " + error);
            } finally {
                setReady(true);
            }
        })();
    }, [setColorScheme]);

    const setPreference = async (themeOption: ThemeOptions) => {
        try {
            if (themeOption === "system") {
                await AsyncStorage.removeItem(THEME_KEY);
                setPreferenceState("system");
                setColorScheme("system");
            } else {
                await AsyncStorage.setItem(THEME_KEY, themeOption);
                setPreferenceState(themeOption);
                setColorScheme(themeOption);
            }
        } catch (error) {
            console.warn("Failed to save theme: " + error);
        }
    };

    if (!isReady) {
        return <ActivityIndicator style={{flex: 1}}/>;
    }

    return (
        <ThemeContext.Provider
            value={{preference: getPreferenceState, applied: colorScheme ?? "light", setPreference}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}