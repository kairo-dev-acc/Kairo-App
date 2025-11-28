import { Image, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../constants/Color";
import FONTS from "../../constants/fonts";

import { HeartIcon as HeartOutline } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolid, StarIcon } from "react-native-heroicons/solid";

const ProductCard = ({
  image,
  profilepic,
  title,
  rating,
  reviews,
  price,
  sellerName,
  location,
  eliteSeller = false,
  isFavorite = false,
  onPressFavorite,
  HeartSeller = true,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="rounded-[16px] mr-4"
      style={{ width: 266, backgroundColor: COLORS.primary.white, ...FONTS.box_shadow }}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* Product Image */}
      <View
        className="overflow-hidden rounded-t-[16px]"
        style={{ width: "100%", height: 164 }}
      >
        <Image source={image} className="w-full h-full" />
      </View>

      {/* Elite Seller Badge */}
      {eliteSeller && (
        <View
          className="absolute top-2.5 left-2.5 rounded-[6px] px-1.5 py-0.5"
          style={{ backgroundColor: COLORS.Tiber[100] }}
        >
          <Text style={{ color: COLORS.Tiber[700], ...FONTS.Regular.Body[3] }}>
            △ Elite Seller
          </Text>
        </View>
      )}

      {/* Favorite Button */}
      <TouchableOpacity
        className="absolute top-2.5 right-2.5 p-1.5"
        onPress={onPressFavorite}
      >
        {HeartSeller ? (
          <HeartOutline size={22} color={COLORS.primary.white} />
        ) : (
          <HeartSolid size={22} color={COLORS.primary.Heart} />
        )}
      </TouchableOpacity>

      {/* Body */}
      <View className="px-3 py-3.5">
        <Text
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            color: COLORS.shark[950],
            ...FONTS.Medium.Body[3],
          }}
        >
          {title}
        </Text>

        {/* Rating & Price */}
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <StarIcon size={16} color={COLORS.emerald[600]} />
            <Text
              style={{ marginLeft: 4, color: COLORS.shark[700], ...FONTS.Regular.Body[2] }}
            >
              {rating} {reviews}
            </Text>
          </View>

          <View
            className="flex-row rounded-[4px] px-2 py-1"
            style={{ backgroundColor: COLORS.Tiber[200] }}
          >
            <Text style={{ color: COLORS.emerald[900], ...FONTS.Regular.Body[2] }}>from</Text>
            <Text style={{ color: COLORS.emerald[900], ...FONTS.SemiBold[3] }}>{price}</Text>
          </View>
        </View>

        {/* Seller Info */}
        <View className="flex-row items-center mt-2.5">
          <Image
            source={profilepic}
            className="rounded-full mr-1.5"
            style={{ width: 29, height: 29 }}
          />
          <View>
            <Text style={{ color: COLORS.shark[700], ...FONTS.Regular.Body[4] }}>
              {sellerName}
            </Text>
            <Text style={{ color: COLORS.shark[700], ...FONTS.Regular.Body[4] }}>
              {location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
