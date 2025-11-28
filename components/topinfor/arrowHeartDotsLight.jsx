import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Ellipsis from "../../assets/images/state=heroicons-mini, colour=ellipsis-vertical.svg";
import COLORS from "../../constants/Color";

export default function ArrowHeartDotsLight({
  EllipsisFunction,
  arrowFunction,
  showHeart = true,
  showEllipsis = true,
  showALL = true,
}) {
  const [Heart, setHeart] = useState(false);

  return (
    <View className="py-[7px] flex-row justify-between items-start">
      {/* ← Back Arrow */}
      <TouchableOpacity onPress={arrowFunction}>
        <Feather name="arrow-left" size={24} color={COLORS.primary.white} />
      </TouchableOpacity>

      {/* Right-side Icons */}
      {showALL && (
        <View className="flex-row" style={{ gap: 28.95 }}>
          {/* ❤️ Heart */}
          {showHeart && (
            <>
              {Heart ? (
                <TouchableOpacity onPress={() => setHeart(false)}>
                  <Feather name="heart" size={24} color={COLORS.primary.white} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setHeart(true)}>
                  <FontAwesome
                    name="heart"
                    size={24}
                    color={COLORS.primary.Heart}
                  />
                </TouchableOpacity>
              )}
            </>
          )}

          {/* ⋮ Ellipsis */}
          {showEllipsis && (
            <TouchableOpacity onPress={EllipsisFunction}>
              <Ellipsis />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
