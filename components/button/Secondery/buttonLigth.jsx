import { Pressable, Text } from "react-native";
import COLORS from "../../../constants/Color";
import FONTS from "../../../constants/fonts";
import { LoaderBars } from "../../LoaderBars";

export default function ButtonLigth({
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
          width: 346,
          height: 52,
          paddingVertical: 16,
          paddingHorizontal: 24,
          gap: 10,
          backgroundColor: COLORS.emerald[100],
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
              ...FONTS.Medium.Body[1],
              color: COLORS.Tiber[700],
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
