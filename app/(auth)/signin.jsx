import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleIcon from "../../assets/images/google.svg";
import Kairologo from "../../assets/images/Kairo-Logo.svg";
import Button from "../../components/button/Primary/buttonDark.jsx";
import ButtonLigthIcon from "../../components/button/Secondery/buttonLigthIcon.jsx";
import ArrowHeartDotsDark from "../../components/topinfor/arrowHeartDotsDark.jsx";
import Input from "../../components/userInput/InPut.jsx";
import COLORS from "../../constants/Color.js";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (text) => {
    setError("");
    setEmail(text);
  };

  const handleContinue = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    router.push("/(auth)/verifysingin");
    console.log("Continue with email:", email);
  };

  const handleAppleSignup = () => console.log("Continue with Apple");
  const handleGoogleSignup = () => console.log("Continue with Google");
  const handleFacebookSignup = () => console.log("Continue with Facebook");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
          animated
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-1 justify-between px-4">
            {/* Back button */}
            <View className="mt-8">
              <ArrowHeartDotsDark
                arrowFunction={() => {
                  router.back("/(auth)");
                }}
              />
            </View>

            {/* Logo */}
            <View className="items-center">
              <Kairologo width={99} height={138} />
            </View>

            <View className="items-center">
              {/* Email section */}
              <View className="mt-20 w-full">
                <Text className="text-center text-gray-900 font-semibold text-2xl">
                  Sign in with your Email
                </Text>

                <View className="my-6 w-full">
                  <Input
                    LabelName="nosa"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    error={error}
                    keyboardType="email-address"
                  />
                </View>

                <Button
                  textName="Continue"
                  TextColor={COLORS.primary.white}
                  backgroundColor={COLORS.Tiber[700]}
                  onPressfunction={handleContinue}
                />

                {/* Divider */}
                <View className="flex-row items-center my-6 mx-6">
                  <View className="flex-1 h-[2px] bg-gray-200" />
                  <Text className="mx-2 text-gray-400 text-base">or</Text>
                  <View className="flex-1 h-[2px] bg-gray-200" />
                </View>
              </View>

              {/* Social buttons */}
              <View className="space-y-5 w-full">
                <ButtonLigthIcon
                  textName="Continue with Apple"
                  TextColor={COLORS.Tiber[700]}
                  backgroundColor={COLORS.Tiber[100]}
                  onPressfunction={handleAppleSignup}
                  icon={<AntDesign name="apple" size={15} color="black" />}
                />

                <ButtonLigthIcon
                  textName="Continue with Google"
                  TextColor={COLORS.Tiber[700]}
                  backgroundColor={COLORS.Tiber[100]}
                  onPressfunction={handleGoogleSignup}
                  icon={<GoogleIcon width={14} height={15} />}
                />

                <ButtonLigthIcon
                  textName="Continue with Facebook"
                  TextColor={COLORS.Tiber[700]}
                  backgroundColor={COLORS.Tiber[100]}
                  onPressfunction={handleFacebookSignup}
                  icon={<FontAwesome5 name="facebook" size={15} color="#1877F2" />}
                />
              </View>

              <Link href="/(tabs)" asChild>
                <Text className="mt-7 pt-1 text-emerald-900 text-center">
                  Need help?
                </Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
