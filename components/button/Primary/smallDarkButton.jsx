import { Pressable, Text } from "react-native";
import COLORS from "../../../constants/Color";
import FONTS from "../../../constants/fonts";
import { LoaderBars } from "../../LoaderBars";

export default function SmallDarkButton({
  textName,
  onPressfunction,
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
          width: 176,
          height: 42,
          paddingVertical: 10,
          paddingHorizontal: 20,
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
        <Text
          style={[
            {
              ...FONTS.Medium.Body[2],
              lineHeight: 20,
              color: COLORS.primary.white,
              includeFontPadding: false,
              textAlignVertical: "center",
            },
            isDisabled && { color: COLORS.primary.white + "80" },
          ]}
        >
          {textName}
        </Text>
      )}
    </Pressable>
  );
}
