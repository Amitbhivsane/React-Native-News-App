import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import GlobalApi from "../Services/GlobalApi";
import Colors from "../Screen/Shared/Colors";
import { useNavigation } from "expo-router";

const TopHeadLine = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("read-news", { news: item })}
            style={{
              width: Dimensions.get("screen").width * 0.88,
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: 350, borderRadius: 10 }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: Colors.primary }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadLine;
