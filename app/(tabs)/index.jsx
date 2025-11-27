import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import KairoAuthScreen from "../../assets/images/KairoAuthScreen.jpg";
import ExploreCard from "../../components/card/exploreCard";
import LearnCard from "../../components/card/learnCard";
import PopularCard from "../../components/card/popularCard";
import TextCard from "../../components/card/TextCard";
import Upcoming from "../../components/card/Upcoming";
import WhatNewCard from "../../components/card/whatNewCard";
import SearchBar from "../../components/SearchBar"
import Profile from "../../components/profied/profile";
import COLORS from "../../constants/Color";

export default function ServiceMarketplaceScreen() {
  // const [liked, setLiked] = useState({});

  // const toggleLike = (id) => {
  //   setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  // };

  const popularServices = [
    { id: 1, name: "Cleaning", icon: KairoAuthScreen },
    { id: 2, name: "Massage", icon: KairoAuthScreen },
    { id: 3, name: "Make-up", icon: KairoAuthScreen },
    { id: 4, name: "Hair", icon: KairoAuthScreen },
    { id: 5, name: "Massage", icon: KairoAuthScreen },
    { id: 6, name: "Make-up", icon: KairoAuthScreen },
    { id: 7, name: "Hair", icon: KairoAuthScreen },
  ];

  const upcomingTrips = [
    {
      id: 1,
      image: KairoAuthScreen,
      title: "Come and relax with Istegraten",
      price: "64,000",
      date: "Nov 12, 12:30 PM",
    },
    {
      id: 2,
      image: KairoAuthScreen,
      title: "Refreshing facial clean",
      price: null,
      date: "Nov 12, 12:30 PM",
    },
  ];

  const featuredSellers = [
    {
      id: 1,
      profilepic: KairoAuthScreen,
      image: KairoAuthScreen,
      title: "Lovely Fresh Fried Rice with Chicken & Vegetables",
      price: "62,000",
      rating: 4.8,
      reviews: 233,
      seller: "Samson buka",
      location: "Lekki phase 1",
      badge: "TOP RATED",
    },
    {
      id: 2,
      profilepic: KairoAuthScreen,
      image: KairoAuthScreen,
      title: "Freshly prepared meal",
      price: "45,000",
      rating: 4.5,
      reviews: 156,
      seller: "Chef Maria",
      location: "Victoria Island",
      badge: "FEATURED",
    },
  ];

  const kairoNews = [
    {
      id: 1,
      image: KairoAuthScreen,
      title: "Build beautiful furniture now on Kairo",
    },
    {
      id: 2,
      image: KairoAuthScreen,
      title: "New interior design services",
    },
  ];

  const learnMore = [
    { id: 1, title: "It helps to find artisan", image: KairoAuthScreen },
    { id: 2, title: "Hire best workers here", image: KairoAuthScreen },
    {
      id: 3,
      title: "Helps while looking for the best",
      image: KairoAuthScreen,
    },
    {
      id: 4,
      title: "Helps while looking for the best",
      image: KairoAuthScreen,
    },
    {
      id: 5,
      title: "Helps while looking for the best",
      image: KairoAuthScreen,
    },
    {
      id: 6,
      title: "Helps while looking for the best",
      image: KairoAuthScreen,
    },
  ];

  return (
    <>
      {/* Header */}
        <View style={styles.header}>
          {/* Profile 📈 */}
          <Profile Name="Nosa" profileImage={KairoAuthScreen} />

          {/* Search Bar */}
          <SearchBar/>
        </View>

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
    
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        
        

        {/* Popular Services 📈 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular services</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.servicesScroll}
          >
            {popularServices.map((service) => (
              <PopularCard icon={service.icon} title={service.name} />
            ))}
          </ScrollView>
        </View>

        {/* Upcoming Trips 📈*/}
        <View style={styles.section}>
          <Upcoming
            Children={upcomingTrips.map((item, key) => {
              <TextCard
                id={key.id}
                icon={item.image}
                title={item.title}
                price={item.price}
                date={item.date}
              />;
            })}
          />
        </View>

        {/* Featured Sellers 📈*/}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured sellers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>see all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredSellers.map((item) => (
              <ExploreCard
                id={item.id}
                image={item.image}
                profilepic={item.profilepic}
                title={item.title}
                rating={item.rating}
                reviews={item.reviews}
                price={item.price}
                sellerName={item.seller}
                isFavorite={true}
                location={item.location}
                profileImage={item.image}
                eliteSeller={true}
                HeartSeller={true}
              />
            ))}
          </ScrollView>
        </View>

        {/* What's New on Kairo 📈*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What's new on Kairo</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {kairoNews.map((news) => (
              <WhatNewCard image={news.image} title={news.title} />
            ))}
          </ScrollView>
        </View>

        {/* Recently Viewed 📈*/}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recently Viewed</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>see all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredSellers.map((item) => (
              <ExploreCard
                id={item.id}
                image={item.image}
                profilepic={item.profilepic}
                title={item.title}
                rating={item.rating}
                reviews={item.reviews}
                price={item.price}
                sellerName={item.seller}
                isFavorite={true}
                location={item.location}
                profileImage={item.image}
                eliteSeller={false}
                HeartSeller={true}
              />
            ))}
          </ScrollView>
        </View>

        {/* Learn More About Us  📈*/}
        <View style={[styles.section, { marginBottom: 80 }]}>
          <Text style={styles.sectionTitle}>Learn more about us</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {learnMore.map((item) => (
              <LearnCard title={item.title} image={item.image} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
    </SafeAreaView>
        </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary.white,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    backgroundColor: COLORS.emerald[950],
    paddingHorizontal: 5,
    gap: 23,
    paddingVertical: 12,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "#3B82F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarIcon: {
    fontSize: 20,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: "#14B8A6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  bellIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
  locationIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
  section: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  seeAll: {
    fontSize: 12,
    color: "#6B7280",
  },
  servicesScroll: {
    marginTop: 12,
  },
  serviceItem: {
    alignItems: "center",
    marginRight: 12,
    width: 70,
  },
  serviceIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceEmoji: {
    fontSize: 28,
  },
  serviceName: {
    fontSize: 12,
    color: "#6B7280",
  },
  tripItem: {
    flexDirection: "row",
    marginBottom: 12,
  },
  tripImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  tripInfo: {
    flex: 1,
    justifyContent: "center",
  },
  tripTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },
  tripPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#14B8A6",
    marginBottom: 4,
  },
  tripDate: {
    fontSize: 12,
    color: "#6B7280",
  },
  productCard: {
    width: 180,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  productImageContainer: {
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 128,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#14B8A6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
  },
  likeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  likeIcon: {
    fontSize: 16,
  },
  productInfo: {
    padding: 12,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 8,
    height: 40,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#14B8A6",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  star: {
    fontSize: 14,
    marginRight: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: "500",
    color: "#111827",
    marginRight: 4,
  },
  reviews: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  sellerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  sellerAvatar: {
    width: 24,
    height: 24,
    backgroundColor: "#D1D5DB",
    borderRadius: 12,
    marginRight: 8,
  },
  sellerName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#111827",
  },
  sellerLocation: {
    fontSize: 11,
    color: "#6B7280",
  },
  newsCard: {
    width: 200,
    height: 128,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 12,
  },
  newsImage: {
    width: "100%",
    height: "100%",
  },
  newsOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  newsTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  learnCard: {
    width: 140,
    height: 128,
    borderRadius: 12,
    padding: 16,
    justifyContent: "flex-end",
    marginRight: 12,
  },
  learnTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingVertical: 8,
    paddingBottom: 20,
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 4,
  },
  navIconActive: {
    fontSize: 24,
    marginBottom: 4,
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  navLabelActive: {
    fontSize: 11,
    color: "#111827",
    fontWeight: "500",
  },
  navLabel: {
    fontSize: 11,
    color: "#9CA3AF",
  },
});
