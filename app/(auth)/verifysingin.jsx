import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FaceId from "../../assets/images/ios-Face-ID.svg";
import Button from "../../components/button/Primary/buttonDark.jsx";
import ButtonLigth from "../../components/button/Secondery/buttonLigth.jsx";
import ArrowHeartDotsDark from "../../components/topinfor/arrowHeartDotsDark.jsx";
import COLORS from "../../constants/Color.js";

const RegistrationFlow = () => {
  const [step, setStep] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const screens = ["Verify your Email", "Secure your details"];

  useEffect(() => {
    Animated.timing(progress, {
      toValue: (step + 1) / screens.length,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [step]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <>
            {/* Back button */}
            <View className="mt-7 mb-24">
              <ArrowHeartDotsDark
                arrowFunction={() => {
                  router.back("/(auth)/signup");
                }}
              />
            </View>

            {/* Email verification content */}
            <View className="flex-4 px-3">
              <Text className="text-left text-gray-900 font-semibold text-2xl pb-5">
                Verify your Email
              </Text>
              <Text className="text-gray-600 pr-7 text-base">
                A code was sent to your email. Please enter the code {"\n"}below
                to continue
              </Text>

              {/* Code boxes */}
              <View className="flex-row justify-center mt-5 mb-8">
                {["-", "-", "-", "-", "-", "-"].map((num, i) => (
                  <View
                    key={i}
                    className="w-12 h-12 bg-gray-100 rounded-lg mx-1 justify-center items-center"
                  >
                    <Text>{num}</Text>
                  </View>
                ))}
              </View>

              <Text className="text-gray-600 pr-5 mt-3 text-base">
                Didn’t receive the code?
              </Text>
              <Text className="text-gray-600 pr-5 mt-3 text-base">
                Go back, check your email and try again
              </Text>
            </View>

            {/* Continue button */}
            <View className="flex-0.4 items-center">
              <Button
                textName="Continue"
                onPressfunction={() => {
                  if (step < screens.length - 1) {
                    setStep(step + 1);
                  }
                }}
              />
            </View>
          </>
        );

      case 1:
        return (
          <>
            <View className="flex-4 px-3">
              <View className="flex-1.5 mt-36 mb-14 justify-center items-center">
                <FaceId />
              </View>

              <Text className="text-center text-gray-900 font-semibold text-2xl pb-4">
                Secure your details
              </Text>
              <Text className="text-center text-gray-600 text-base mb-4">
                Turn on Face ID to secure your Kairo app
              </Text>

              <View className="flex-0.3 space-y-3 items-center">
                <Button
                  textName="Enable Face ID"
                  onPressfunction={() => {
                    router.push("/(tabs)");
                  }}
                />
                <ButtonLigth
                  textName="Skip, I’ll do that later"
                  onPressfunction={() => {
                    router.replace("/(tabs)");
                  }}
                />
              </View>
            </View>
          </>
        );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-between">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
        animated
      />

      {/* Progress bar */}
      <View className="h-1 w-full bg-gray-300 overflow-hidden mt-2">
        <Animated.View
          style={{
            width: progressWidth,
            height: "100%",
            backgroundColor: COLORS.emerald[700],
            borderRadius: 1,
          }}
        />
      </View>

      {/* Content */}
      <View className="flex-1 justify-center mx-4">{renderScreen()}</View>
    </SafeAreaView>
  );
};

export default RegistrationFlow;
