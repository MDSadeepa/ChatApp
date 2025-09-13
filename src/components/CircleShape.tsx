import {View} from "react-native";

interface Circle {
    width: number;
    height: number;
    fillColor: string;
    borderRadius: number;
    topValue?: number;
    leftValue?: number;
    rightValue?: number;
    bottomValue?: number;
}

export default function CircleShape({
                                        width,
                                        height,
                                        fillColor,
                                        borderRadius,
                                        topValue,
                                        leftValue,
                                        rightValue,
                                        bottomValue
                                    }: Circle) {
    return (
        <View style={{
            width: width,
            height: height,
            backgroundColor: fillColor,
            borderRadius: borderRadius,
            position: "absolute",
            ...(topValue !== undefined && {top: topValue}),
            ...(leftValue !== undefined && {left: leftValue}),
            ...(rightValue !== undefined && {right: rightValue}),
            ...(bottomValue !== undefined && {bottom: bottomValue})
        }}></View>
    );
}