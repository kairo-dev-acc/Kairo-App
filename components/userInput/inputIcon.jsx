import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


export default function InputIcon({
  value: propValue = "",
  onChange,
  placeholder,
  error,
  width = 346,
  keyboardType,
  IconImage,
  IconFunction,
  ShowIconFunction,
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

  const iconColor = error
    ? COLORS.primary.Error
    : text
    ? COLORS.shark[950]
    : COLORS.shark[300];

  return (
    <View className={error ? "mb-3" : "mb-0"}>
      <View
        className="
          min-h-12
          rounded-xl
          flex-row
          items-center
          px-3
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
          transition: "all 0.15s",
        }}
      >
        <TextInput
          className="flex-1 py-[10px] text-black"
          placeholder={placeholder}
          placeholderTextColor={
            error ? COLORS.primary.Error : COLORS.shark[300]
          }
          value={text}
          onChangeText={handleChange}
          keyboardType={keyboardType}
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            color: COLORS.shark[950],
            ...FONTS.Regular.Body[1],
            lineHeight: 22,
          }}
        />

        {ShowIconFunction ? (
          <TouchableOpacity onPress={IconFunction}>
            <MaterialIcons
              name={IconImage}
              size={20}
              color={iconColor}
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        ) : (
          <MaterialIcons
            name="email"
            size={20}
            color={iconColor}
            style={{ marginLeft: 8 }}
          />
        )}
      </View>

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
