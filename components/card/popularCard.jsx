import { Image, Text, TouchableOpacity } from "react-native";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

export default function PopularCard({ icon, title }) {
  return (
    <TouchableOpacity
      className="mr-2.5"
      style={{
        maxWidth: 86,
        ...FONTS.box_shadow,
      }}
    >
      <Image
        source={icon}
        className="rounded-xl"
        style={{ width: 86, height: 86 }}
      />
      <Text
        className="pt-2 text-center"
        style={{
          color: COLORS.Tiber[950],
          ...FONTS.Regular.Body[900],
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
