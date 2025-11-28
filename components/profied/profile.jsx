import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BellIcon as BellIconOutline } from "react-native-heroicons/outline";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

export default function profile({ profileFunction, profileImage, Name, notificationFunction }) {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 13.5}}>
      <View style={styles.backIcon}>
        
        <TouchableOpacity onPress={profileFunction} >
        <Image
          source={profileImage}
          style={styles.avatar}
          />
          </TouchableOpacity>
        <View>
          <Text style={styles.sellerName}>Hi {Name}</Text>
        </View>
      </View>

        <TouchableOpacity onPress={notificationFunction} >
      <View style={styles.notification}>
        <BellIconOutline size={24} color={COLORS.primary.white} />
      </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap:14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 40,
    marginRight: 6,
  },
  sellerName: {
    ...FONTS.Medium.Body[2],
    color: COLORS.primary.white
  },
  notification:{
    padding: 12,
    borderRadius: 8,
    backgroundColor: COLORS.Tiber[800],
  },
});
