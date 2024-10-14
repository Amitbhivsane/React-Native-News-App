import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Screen/Shared/Colors";
import { useNavigation } from "expo-router";

const HeadLineList = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("read-news", { news: item })}
              style={{ marginTop: 20, display: "flex", flexDirection: "row" }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 130, height: 120, borderRadius: 10 }}
              />
              <View style={{ marginRight: 135, marginLeft: 10 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: Colors.primary }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: Colors.lightGray,
                marginTop: 10,
              }}
            ></View>
          </View>
        )}
      />
    </View>
  );
};

export default HeadLineList;
