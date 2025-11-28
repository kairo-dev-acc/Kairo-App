import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, TextInput, View } from "react-native";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

export default function Labelinput({
  value: propValue = "",
  onChange,
  error,
  width = 346,
  keyboardType,
  LabelName,
}) {
  const [text, setText] = useState(propValue);
  const [isFocused, setIsFocused] = useState(false);

  const labelPosition = useRef(new Animated.Value(propValue ? 1 : 0)).current;

  useEffect(() => {
    setText(propValue);
    animateLabel(propValue ? 1 : 0);
  }, [propValue]);

  const animateLabel = (toValue) => {
    Animated.timing(labelPosition, {
      toValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = () => {
    setIsFocused(true);
    animateLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) animateLabel(0);
  };

  const handleChange = (newText) => {
    setText(newText);
    onChange?.(newText);
  };

  const labelStyle = {
    position: "absolute",
    left: 16,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [22, 8],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: error
      ? COLORS.primary.Error
      : isFocused
      ? COLORS.shark[950]
      : COLORS.shark[400],
    ...FONTS.Regular.Body[3],
  };

  return (
    <View className={error ? "mb-7" : "mb-5"}>
      <View
        className="
          min-h-[56px]
          rounded-xl
          justify-center
          px-4
        "
        style={{
          width,
          backgroundColor: error
            ? COLORS.primary.Errorbackground
            : COLORS.shark[50],
          borderWidth: 1.5,
          borderColor: error
            ? COLORS.primary.Error
            : isFocused || text
            ? COLORS.shark[950]
            : COLORS.shark[200],
        }}
      >
        {/* Floating Label */}
        <Animated.Text style={labelStyle}>{LabelName}</Animated.Text>

        <TextInput
          className="pt-[18px] pb-1 text-black"
          style={{
            color: COLORS.shark[950],
            ...FONTS.Regular.Body[1],
            lineHeight: 22,
          }}
          value={text}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
      </View>

      {error && (
        <View className="flex-row items-center gap-1.5 mt-2">
          <MaterialIcons
            name="error"
            size={18}
            color={COLORS.primary.Error}
          />
          <Text
            style={{
              color: COLORS.primary.Error,
              ...FONTS.Regular.Body[3],
            }}
          >
            {error}
          </Text>
        </View>
      )}
    </View>
  );
}
