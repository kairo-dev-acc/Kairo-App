import { ImageBackground, Text, TouchableOpacity } from "react-native";
import FONTS from "../../constants/fonts";
import COLORS from "../../constants/Color";

const LearnCard = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity
      className="overflow-hidden"
      style={{ width: 129, height: 159, borderRadius: 16, paddingRight: 20 }}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <ImageBackground
        source={image}
        className="flex-1 justify-end"
        style={{
          paddingTop: 98,
          paddingBottom: 17,
          paddingLeft: 8,
          paddingRight: 25,
        }}
        imageStyle={{ borderRadius: 8 }}
      >
        <Text
          style={{
            width: 96,
            color: COLORS.primary.white,
            ...FONTS.SemiBold.Body[3],
          }}
        >
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LearnCard;
