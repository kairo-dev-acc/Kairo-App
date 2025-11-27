// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link ,useRouter } from "expo-router";
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
import styles from "../../assets/style/auth/singIn.js";
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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
          animated
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inner}>
            {/* Back button */}
            <View style={styles.backIcon}>
            <ArrowHeartDotsDark
              arrowFunction={() => {
                router.back("/(auth)");
              }}
            />
            </View>

            {/* Logo */}
            <View style={styles.logoContainer}>
              <Kairologo width={99} height={138} />
            </View>

            <View style={styles.buttonComponent}>


            {/* Email section */}
            <View style={styles.emailSection}>
              <Text style={styles.title}>Sign in with your Email</Text>

              <View style={styles.emailInput}>
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
              <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
              </View>
            </View>

            {/* Social buttons */}
            <View style={styles.socialContainer}>
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
                icon={
                  <FontAwesome5 name="facebook" size={15} color="#1877F2" />
                }
                />
                </View>
                <Link href="/(tabs)" asChild ><Text style={styles.help}>Need help?</Text></Link>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
