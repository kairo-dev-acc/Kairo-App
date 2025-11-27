// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FaceId from "../../assets/images/ios-Face-ID.svg";
import Button from "../../components/button/Primary/buttonDark.jsx";
import ButtonLigth from "../../components/button/Secondery/buttonLigth.jsx";
import ArrowHeartDotsDark from "../../components/topinfor/arrowHeartDotsDark.jsx";
import COLORS from "../../constants/Color.js";
import FONTS from "../../constants/fonts.js";
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

  const screens = ["Verify your Email", "Secure your details"];
  // Animate progress bar on step change
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

  // --- Each Step UI ---
  const renderScreen = () => {
    switch (step) {
      case 0:
        return (
          <>
            <View style={styles.backIcon}>
              <ArrowHeartDotsDark
                arrowFunction={() => {
                  router.back("/(auth)/signup");
                }}
              />
            </View>

            <View style={styles.view}>
              <Text style={styles.title}>Verify your Email</Text>
              <Text style={styles.subtitle}>
                A code was sent to your email. Please enter the code {"\n"}below
                to continue
              </Text>
              <View style={styles.codeContainer}>
                {["-", "-", "-", "-", "-", "-"].map((num, i) => (
                  <View key={i} style={styles.codeBox}>
                    <Text>{num}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.subtitle}>Didn’t receive the code?</Text>
              <Text style={styles.subtitletwo}>
                go back, check your email and try agan
              </Text>
            </View>

            <View style={styles.arrowbuttonBox}>
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
            {/* Face ID Icon + Text */}
            <View style={styles.view}>
              <View style={styles.faceIDContainer}>
                <View style={styles.FaceId}>
                  <FaceId />
                </View>
                <View>
                  <Text style={styles.titleFacdId}>Secure your details</Text>
                  <Text style={styles.subtitleFacdId}>
                    Turn on Face ID to secure your Kairo app
                  </Text>
                </View>
              </View>
              <View style={styles.buttonBoxtwo}>
                <Button
                  textName="Enable Face ID"
                  onPressfunction={() =>{
                    router.push("/(tabs)")
                  }}
                />
                <ButtonLigth
                  textName="Skip, I’ll do that later"
                  onPressfunction={() =>{
                     router.replace("/(tabs)")
                  }}
                />
              </View>
            </View>
          </>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
        animated
      />
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
      </View>

      {/* Content */}
      <View style={styles.content}>{renderScreen()}</View>
    </SafeAreaView>
  );
};

// --- STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  progressContainer: {
    height: 4,
    width: "100%",
    backgroundColor: "#c3c2c2ff",
    overflow: "hidden",
    marginTop: 10,
  },
  view: {
    flex: 4,
    paddingHorizontal: 12,
  },
  viewTwo: {
    paddingHorizontal: 12,
    marginTop: 162,
    flex: 4,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#00796b",
    borderRadius: 2,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  backIcon: {
    marginTop: 27,
    marginBottom: 91,
  },
  title: {
    ...FONTS.SemiBold.Headline[4],
    textAlign: "left",
    paddingBottom: 20,
    color: COLORS.shark[950],
  },
  subtitle: {
    ...FONTS.Regular.Body[3],
    paddingRight: 30,
    color: COLORS.shark[600],
  },
  subtitle_two: {
    fontSize: 12,
    fontWeight: "400",
    color: "#555",
    textAlign: "left",
    alignItems: "flex-end",
  },
  phonesub: {
    marginBottom: 20,
  },
  subtitletwo: {
    ...FONTS.Regular.Body[3],
    paddingRight: 20,
    color: COLORS.shark[600],
    marginTop: 12,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  codeBox: {
    borderRadius: 8,
    width: 49,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 32,
    backgroundColor: COLORS.shark[50],
  },
  buttonBox: {
    alignItems: "center",
    flex: 0.5,
  },
  arrowbuttonBox: {
    alignItems: "center",
    flex: 0.4,
  },
  buttonBoxtwo: {
    alignItems: "center",
    gap: 12,
    flex: 0.3,
  },
  SmallButton: {
    marginVertical: 12,
  },
  LabelName: {
    marginVertical: 20,
  },
  faceIDContainer: {
    flex: 1.5,
  },
  FaceId: {
    marginTop: 139,
    marginBottom: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  titleFacdId: {
    ...FONTS.SemiBold.Headline[4],
    textAlign: "center",
    paddingBottom: 16,
    color: COLORS.shark[950],
  },
  subtitleFacdId: {
    textAlign: "center",
    ...FONTS.Regular.Body[3],
    color: COLORS.shark[600],
  },
});

export default RegistrationFlow;
