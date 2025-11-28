import { View, Text, TouchableOpacity } from "react-native";
import COLORS from "../../constants/Color";

export default function Upcoming({ Children }) {
  return (
    <View
      className="rounded-[20px] p-[23px]"
      style={{ backgroundColor: COLORS.primary.white }}
    >
      {/* Section Header */}
      <View
        className="flex-row justify-between items-center pb-3"
        style={{ borderBottomWidth: 2, borderColor: COLORS.shark[100] }}
      >
        <Text
          className="text-[18px] font-bold"
          style={{ color: COLORS.shark[950] }}
        >
          Upcoming tasks
        </Text>
        <TouchableOpacity>
          <Text
            className="text-[14px]"
            style={{ color: COLORS.shark[950] }}
          >
            see all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Children content (task cards etc.) */}
      {Children}
    </View>
  );
}
