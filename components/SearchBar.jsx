// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { MagnifyingGlassIcon as SearchOutline } from "react-native-heroicons/outline";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <View className="flex-row px-8 justify-between items-center">
      
      {/* Location Tag */}
      <View className="bg-teal-950 justify-center items-center rounded-xl h-12 w-24">
        <Text className="text-white font-medium text-lg">Lekki</Text>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-emerald-900/10 rounded-full h-12 w-52 px-3">
        <TextInput
          className="flex-1 text-black"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />

        <TouchableOpacity className="p-2" onPress={handleSearch}>
          <SearchOutline size={23} color="#047857" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default SearchBar;
