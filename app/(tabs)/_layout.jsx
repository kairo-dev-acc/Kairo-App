// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------
import {
  ChatBubbleOvalLeftEllipsisIcon as ChatOutline,
  RectangleStackIcon as StackOutline,
  UserCircleIcon as UserOutline,
  HeartIcon as HeartOutline,
  MagnifyingGlassIcon as SearchOutline,
} from "react-native-heroicons/outline";

import {
  ChatBubbleOvalLeftEllipsisIcon as ChatSolid,
  RectangleStackIcon as StackSolid,
  UserCircleIcon as UserSolid,
  HeartIcon as HeartSolid,
  MagnifyingGlassIcon as SearchSolid,
} from "react-native-heroicons/solid";

import { Tabs } from "expo-router";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.emerald[700],
        tabBarInactiveTintColor: COLORS.shark[500],
        tabBarStyle: {
          height: 70,
          paddingBottom: 18,
          paddingTop: 5,
          paddingHorizontal:16,
          backgroundColor: COLORS.primary.white,
          elevation: 8, 
          position: "absolute",
        },
        tabBarLabelStyle: {
          ...FONTS.Regular.Body[4],
          marginBottom: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ size, focused }) => {
            const Icon = focused ? SearchSolid : SearchOutline;
            return (
              <Icon
                size={size}
                color={focused ? COLORS.emerald[700] :  COLORS.shark[500]}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ size, focused }) => {
            const Icon = focused ? HeartSolid : HeartOutline;
            return (
              <Icon
                size={size}
                color={focused ? COLORS.emerald[700] :  COLORS.shark[500]}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ size, focused }) => {
            const Icon = focused ? StackSolid : StackOutline;
            return (
              <Icon
                size={size}
                color={focused ? COLORS.emerald[700] :  COLORS.shark[500]}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ size, focused }) => {
            const Icon = focused ? ChatSolid : ChatOutline;
            return (
              <Icon
                size={size}
                color={focused ? COLORS.emerald[700] :  COLORS.shark[500]}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, focused }) => {
            const Icon = focused ? UserSolid : UserOutline;
            return (
              <Icon
                size={size}
                color={focused ? COLORS.emerald[700] :  COLORS.shark[500]}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}