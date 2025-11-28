import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function LabelinputIcon({
  value: propValue = "",
  onChange,
  error,
  keyboardType,
  LabelName,
  iconName = "email",
  onIconPress,
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

  const iconColor = error
    ? COLORS.primary.Error
    : text
    ? COLORS.shark[950]
    : COLORS.shark[300];

  const labelStyle = {
    position: "absolute",
    left: 16,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [22, 6],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: iconColor,
    ...FONTS.Regular.Body[3],
  };

  return (
    <View className={`mb-${error ? "7" : "5"}`}>
      <View
        className="
          min-h-[56px]
          rounded-xl
          border
          px-4
          justify-center
          w-[346px]
        "
        style={{
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
        <Animated.Text style={labelStyle}>
          {LabelName}
        </Animated.Text>

        <View className="flex-row items-center pt-[18px]">
          <TextInput
            className="flex-1 pb-1 text-black"
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

          <TouchableOpacity onPress={onIconPress}>
            <MaterialIcons
              name={iconName}
              size={22}
              color={iconColor}
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {error && (
        <View className="flex-row items-center mt-2 gap-1.5">
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
