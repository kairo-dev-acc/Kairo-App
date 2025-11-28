import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Inputicon({
  value: propValue = "",
  onChange,
  placeholder,
  error,
  width = 346,
  keyboardType,
  multiline = false,
}) {
  const [text, setText] = useState(propValue);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setText(propValue);
  }, [propValue]);

  const handleChange = (newText) => {
    setText(newText);
    onChange?.(newText);
  };

  const borderColor = error
    ? COLORS.primary.Error
    : isFocused || text
    ? COLORS.shark[950]
    : COLORS.shark[200];

  const backgroundColor = error
    ? COLORS.primary.Errorbackground
    : COLORS.shark[50];

  return (
    <View className={error ? "mb-3" : "mb-0"}>
      <TextInput
        className={`
          min-h-12
          rounded-xl
          px-3
          py-[10px]
          text-black
        `}
        style={{
          width,
          backgroundColor,
          borderWidth: isFocused || error ? 1.5 : 1,
          borderColor,
          color: COLORS.shark[950],
          ...FONTS.Regular.Body[1],
          lineHeight: 22,
          transition: "all 0.15s",
          textAlignVertical: multiline ? "top" : "center",
          paddingVertical: multiline ? 12 : 10,
        }}
        placeholder={placeholder}
        placeholderTextColor={
          error ? COLORS.primary.Error : COLORS.shark[300]
        }
        value={text}
        onChangeText={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={keyboardType}
        autoCapitalize="none"
        multiline={multiline}
      />

      {error && (
        <View className="flex-row items-center gap-1.5 mt-2">
          <MaterialIcons name="error" size={20} color={COLORS.primary.Error} />
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
