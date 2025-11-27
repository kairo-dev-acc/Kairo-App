// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import React from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Kairologo from "../../assets/images/Kairo-Logo.svg";
import styles from "../../assets/style/auth/index";
import ButtonDark from "../../components/button/Primary/buttonDark";
import ButtonLigth from "../../components/button/Secondery/buttonLigth";


const images = [
  require("../../assets//images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
];

export default function WelcomeScreen() {
  const router = useRouter();

  const { height, width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const PHOTO_HEIGHT = height * (height > 700 ? 0.89 : 0.8);
  const CARD_RADIUS = 40;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
        animated
      />

      {/* IMAGE SLIDER */}
      <View style={{ height: PHOTO_HEIGHT }}>
        <SwiperFlatList
          autoplay
          autoplayDelay={4}
          autoplayLoop
          showPagination
          paginationDefaultColor="rgba(255,255,255,0.4)"
          paginationActiveColor={COLORS.emerald[500]}
        >
          {images.map((img, index) => (
            <ImageBackground
              key={index}
              source={img}
              style={styles.imageBackground}
              resizeMode="cover"
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.15)", "rgba(0,0,0,0.55)"]}
                style={styles.gradientOverlay}
              />
            </ImageBackground>
          ))}
        </SwiperFlatList>
      </View>

      {/* HEADLINE OVERLAY */}
      <View style={[styles.headlineWrap, { top: PHOTO_HEIGHT * 0.3 }]}>
        <Kairologo width={47} height={47} />
        <Text style={styles.headlineTop}>Get it</Text>
        <Text style={styles.headlineBottom}>Done!</Text>
      </View>

      {/* WHITE BOTTOM CARD */}
      <View
        style={[
          styles.bottomCard,
          {
            borderTopLeftRadius: CARD_RADIUS,
            borderTopRightRadius: CARD_RADIUS,
            paddingBottom: insets.bottom + (Platform.OS === "ios" ? 22 : 16),
          },
        ]}
      >
        <View style={styles.buttonWrapper}>
          <View>
            <ButtonDark
              textName="sign up"
              onPressfunction={() => {
                router.push("/(auth)/signup");
              }}
            />
          </View>

          <View>
            <ButtonLigth
              textName="sign in"
              onPressfunction={() => {
                router.push("/(auth)/signin");
              }}
            />
          </View>
        </View>

        <View style={styles.bottomPrivecy}>
          <Text style={styles.privacyText}>
            By continuing, you agree to Kairo’s
          </Text>
          <View style={styles.bottomTerms}>
            <View>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </View>
            <Text style={styles.privacyTexttwo}>and</Text>
           <View>
              <Text style={styles.linkText}>Term of Us</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
