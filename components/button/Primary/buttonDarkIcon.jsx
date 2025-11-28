import { Pressable, Text, View } from "react-native";
import COLORS from "../../../constants/Color";
import FONTS from "../../../constants/fonts";
import { LoaderBars } from "../../LoaderBars";

export default function ButtonDarkIcon({
  textName,
  onPressfunction,
  icon,
  disabled = false,
  loading = false,
}) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPressfunction}
      disabled={isDisabled}
      className="rounded-full flex-row items-center justify-center"
      style={({ pressed }) => [
        {
          width: 346,
          height: 52,
          paddingVertical: 16,
          paddingHorizontal: 24,
          gap: 8,
          backgroundColor: COLORS.Tiber[700],
        },
        pressed && !isDisabled && {
          opacity: 0.7,
          backgroundColor: COLORS.Tiber[500],
        },
        isDisabled && { backgroundColor: COLORS.Tiber[100], opacity: 0.5 },
      ]}
    >
      {loading ? (
        <LoaderBars />
      ) : (
        <View className="flex-row items-center gap-2">
          {icon && <View className="w-6 h-6 items-center justify-center">{icon}</View>}
          <Text
            style={[
              {
                ...FONTS.Medium.Body[1],
                lineHeight: 24,
                color: COLORS.primary.white,
                includeFontPadding: false,
                textAlignVertical: "center",
              },
              isDisabled && { color: COLORS.primary.white + "80" },
            ]}
          >
            {textName}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
