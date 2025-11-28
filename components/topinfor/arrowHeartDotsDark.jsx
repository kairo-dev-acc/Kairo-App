import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Ellipsis from "../../assets/images/ellipsis-vertical.svg";
import COLORS from "../../constants/Color";

export default function ArrowHeartDotsDark({
  EllipsisFunction,
  arrowFunction,
  showHeart = true,
  showEllipsis = true,
  showALL = false,
}) {
  const [Heart, setHeart] = useState(false);

  return (
    <View className="py-[7px] flex-row justify-between items-start">
      <TouchableOpacity onPress={arrowFunction}>
        <Feather name="arrow-left" size={24} color={COLORS.shark[950]} />
      </TouchableOpacity>

      {showALL && (
        <View className="flex-row items-center" style={{ gap: 28.95 }}>
          
          {/* ❤️ Heart Icon */}
          {showHeart && (
            <>
              {Heart ? (
                <TouchableOpacity onPress={() => setHeart(false)}>
                  <Feather name="heart" size={24} color={COLORS.shark[950]} />
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

          {/* ⋮ Ellipsis Icon */}
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
