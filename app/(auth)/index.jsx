// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
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
import ButtonDark from "../../components/button/Primary/buttonDark";
import ButtonLigth from "../../components/button/Secondery/buttonLigth";
import COLORS from "../../constants/Color.js";

const images = [
  require("../../assets//images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
  require("../../assets/images/KairoAuthScreen.jpg"),
];

export default function WelcomeScreen() {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const PHOTO_HEIGHT = height * (height > 700 ? 0.89 : 0.8);
  const CARD_RADIUS = 40;

  return (
    <View className="flex-1 bg-black">
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
              className="flex-1 justify-center items-center w-full"
              resizeMode="cover"
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.15)", "rgba(0,0,0,0.55)"]}
                className="absolute inset-0"
              />
            </ImageBackground>
          ))}
        </SwiperFlatList>
      </View>

      {/* HEADLINE OVERLAY */}
      <View
        className="absolute self-center items-center"
        style={{ top: PHOTO_HEIGHT * 0.3 }}
      >
        <Kairologo width={47} height={47} />
        <Text className="text-white text-[64px] font-extrabold mt-3">
          Get it
        </Text>
        <Text className="text-emerald-600 text-[64px] font-extrabold mb-6">
          Done!
        </Text>
      </View>

      {/* WHITE BOTTOM CARD */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-white pt-7 px-6 shadow-lg"
        style={{
          borderTopLeftRadius: CARD_RADIUS,
          borderTopRightRadius: CARD_RADIUS,
          paddingBottom: insets.bottom + (Platform.OS === "ios" ? 22 : 16),
        }}
      >
        <View className="items-center space-y-3 mb-8">
          <ButtonDark
            textName="sign up"
            onPressfunction={() => {
              router.push("/(auth)/signup");
            }}
          />
          <ButtonLigth
            textName="sign in"
            onPressfunction={() => {
              router.push("/(auth)/signin");
            }}
          />
        </View>

        <View className="flex-col items-center">
          <Text className="text-center text-gray-400 mb-3">
            By continuing, you agree to Kairo’s
          </Text>
          <View className="flex-row items-center justify-center">
            <Text className="text-emerald-800 border-b-2 border-emerald-800 pb-1 mx-1">
              Privacy Policy
            </Text>
            <Text className="text-gray-400 px-1 pb-1">and</Text>
            <Text className="text-emerald-800 border-b-2 border-emerald-800 pb-1 mx-1">
              Term of Us
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
