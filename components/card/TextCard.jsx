import { Image, Text, View } from "react-native";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

const TaskCard = ({ title, price, date, activestate = true, image }) =>
  activestate ? (
    <View
      className="flex-row rounded-xl mb-2.5 px-2 py-3"
      style={{
        gap: 16,
        backgroundColor: COLORS.primary.white,
        borderBottomWidth: 2,
        borderColor: COLORS.shark[100],
      }}
    >
      <Image
        source={image}
        className="rounded-xl"
        style={{ width: 123, height: 97 }}
      />
      <View style={{ paddingVertical: 11.5 }}>
        <Text style={{ color: COLORS.shark[950], ...FONTS.Regular.Body[3] }}>
          {title}
        </Text>
        <Text
          style={{
            color: COLORS.shark[950],
            paddingVertical: 15,
            ...FONTS.SemiBold.Body[2],
          }}
        >
          {price}
        </Text>
        <Text style={{ color: COLORS.shark[950], ...FONTS.Regular.Body[3] }}>
          {date}
        </Text>
      </View>
    </View>
  ) : (
    <View className="flex-row rounded-xl mb-2.5 px-2 py-3" style={{ gap: 16, backgroundColor: COLORS.primary.white }}>
      <Image
        source={image}
        className="rounded-xl"
        style={{ width: 123, height: 97 }}
      />
      <View style={{ paddingVertical: 11.5 }}>
        <Text
          style={{
            textDecorationLine: "line-through",
            color: COLORS.shark[400],
            ...FONTS.Regular.Body[3],
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: COLORS.shark[400],
            paddingVertical: 15,
            ...FONTS.Regular.Body[3],
          }}
        >
          {price}
        </Text>
        <Text style={{ color: COLORS.shark[400], ...FONTS.Regular.Body[3] }}>
          {date}
        </Text>
      </View>
    </View>
  );

export default TaskCard;
