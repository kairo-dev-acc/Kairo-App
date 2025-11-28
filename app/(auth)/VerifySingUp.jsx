import { Link, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, StatusBar, Text, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FaceId from "../../assets/images/ios-Face-ID.svg";
import Button from "../../components/button/Primary/buttonDark.jsx";
import SmallButton from "../../components/button/Secondery/smallLightButton.jsx";
import ButtonLigth from "../../components/button/Secondery/buttonLigth.jsx";
import ArrowHeartDotsDark from "../../components/topinfor/arrowHeartDotsDark.jsx";
import Input from "../../components/userInput/InPut.jsx";
import Labelinput from "../../components/userInput/Labelinput.jsx";
import COLORS from "../../constants/Color.js";

const RegistrationFlow = () => {
  const [step, setStep] = useState(0);
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [FirstNameError, setFirstNameError] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const progress = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const screens = [
    "Verify your Email",
    "What's your phone number?",
    "Verify your phone number",
    "What's your Name?",
    "What's your Location?",
    "Secure your details",
    "You're all set 🎉",
  ];

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

  const handleContinue = () => {
    if (step < screens.length - 1) setStep(step + 1);
  };
  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const NamehandleChange = () => {
    if (!FirstName) return setFirstNameError("Please enter your First Name");
    if (!LastName) return setLastNameError("Please enter your Last Name");
    handleContinue();
  };
  const phonehandleChange = () => {
    if (!phone) return setphoneError("Please enter a phone number");
    handleContinue();
  };

  const handleChangePhone = (text) => setPhone(text) || setphoneError("");
  const handleChangeFirstName = (text) => setFirstName(text) || setFirstNameError("");
  const handleChangeMiddleName = (text) => setMiddleName(text);
  const handleChangeLastName = (text) => setLastName(text) || setLastNameError("");

  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <>
            <View className="mt-7 mb-24">
              <ArrowHeartDotsDark arrowFunction={() => router.back("/(auth)/signup")} />
            </View>

            <View className="flex-4 px-3">
              <Text className="text-left text-gray-900 font-semibold text-2xl pb-5">
                Verify your Email
              </Text>
              <Text className="text-gray-600 pr-7 text-base">
                A code was sent to your email. Please enter the code {"\n"}below to continue
              </Text>

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

              <Text className="text-gray-600 pr-5 mt-3 text-base">Didn’t receive the code?</Text>
              <Text className="text-gray-600 pr-5 mt-3 text-base">
                go back, check your email and try again
              </Text>
            </View>

            <View className="flex-0.4 items-center">
              <Button textName="Continue" onPressfunction={handleContinue} />
            </View>
          </>
        );

      case 1:
        return (
          <>
            <View className={`px-3 mt-40 flex-4`}>
              <Text className="text-left text-gray-900 font-semibold text-2xl pb-5">
                What's your phone number?
              </Text>
              <Text className="text-gray-600 mb-5 text-base">
                We use your mobile number to identify your account.{"\n"}
                We’ll send a verification code to your number.
              </Text>
              <Input
                value={phone}
                onChange={handleChangePhone}
                placeholder="+234 123 456 7890"
                error={phoneError}
                width={Platform.OS === "ios" ? 346 : 320}
              />
            </View>

            <View className="flex-0.5 items-center">
              <Button textName="Continue" onPressfunction={phonehandleChange} />
            </View>
          </>
        );

      case 2:
        return (
          <>
            <View className="mt-7 mb-24">
              <ArrowHeartDotsDark arrowFunction={goBack} />
            </View>

            <View className="flex-4 px-3">
              <Text className="text-left text-gray-900 font-semibold text-2xl pb-5">
                Verify your phone number
              </Text>
              <Text className="text-gray-600 pr-7 text-base">
                We need to make sure you’re you. A code was sent to your phone number.
                Please enter the code below
              </Text>

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

              <View className="my-3">
                <SmallButton textName="Resend SMS" onPressfunction={handleContinue} />
              </View>
              <Text className="text-gray-600 pr-5 mt-2 text-base">Try again in 0:24 seconds.</Text>
            </View>

            <View className="flex-0.5 items-center">
              <Button textName="Continue" onPressfunction={handleContinue} />
            </View>
          </>
        );

      case 3:
        return (
          <>
            <View className={`px-3 mt-40 flex-4`}>
              <Text className="text-left text-gray-900 font-semibold text-2xl pb-5">What’s your Name?</Text>
              <Text className="text-gray-600 text-base pb-5">You’re almost done</Text>
              <View className="my-5">
                <Labelinput value={FirstName} onChange={handleChangeFirstName} placeholder="First name" error={FirstNameError} LabelName="First name" width={Platform.OS === "ios" ? 346 : 320} />
                <Labelinput value={MiddleName} onChange={handleChangeMiddleName} placeholder="optional" LabelName="Middle name" width={Platform.OS === "ios" ? 346 : 320} />
                <Labelinput value={LastName} onChange={handleChangeLastName} placeholder="Last name" error={LastNameError} LabelName="Last name" width={Platform.OS === "ios" ? 346 : 320} />
              </View>
            </View>
            <View className="flex-0.5 items-center">
              <Button textName="Continue" onPressfunction={NamehandleChange} />
            </View>
          </>
        );

      case 4:
        return (
          <>
            <View className="mt-7 mb-24">
              <ArrowHeartDotsDark arrowFunction={goBack} />
            </View>

            <View className="flex-4 px-3">
              <Text className="text-left text-gray-900 font-semibold text-2xl pb-5">What's your Location?</Text>
              <Text className="text-gray-600 text-base">
                Enable location to access services, sellers and businesses in your area
              </Text>
            </View>

            <View className="flex-0.5 items-center">
              <Button textName="Continue" onPressfunction={handleContinue} />
            </View>
          </>
        );

      case 5:
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
                <Button textName="Enable Face ID" onPressfunction={handleContinue} />
                <ButtonLigth textName="Skip, I’ll do that later" onPressfunction={handleContinue} />
              </View>
            </View>
          </>
        );

      case 6:
        return (
          <>
            <View className="flex-4 px-3 mt-40">
              <Link asChild href="/(tabs)">
                <Text className="text-left text-gray-900 font-semibold text-2xl pb-5">You’re all set</Text>
              </Link>
              <Text className="text-gray-600 text-base">Welcome aboard!</Text>
            </View>
            <View className="flex-0.5 items-center">
              <Button textName="Continue" onPressfunction={() => router.push("/(tabs)")} />
            </View>
          </>
        );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-between">
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" animated />

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

      <View className="flex-1 justify-center mx-4">{renderScreen()}</View>
    </SafeAreaView>
  );
};

export default RegistrationFlow;
