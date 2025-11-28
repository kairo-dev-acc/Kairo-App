import { Pressable, Text } from "react-native";
import COLORS from "../../../constants/Color";
import FONTS from "../../../constants/fonts";
import { LoaderBars } from "../../LoaderBars";

export default function SmallLigthButton({
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
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: COLORS.emerald[100],
        },
        pressed && !isDisabled && {
          opacity: 0.7,
          backgroundColor: COLORS.Tiber[200],
        },
        isDisabled && { backgroundColor: COLORS.shark[200], opacity: 0.5 },
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
