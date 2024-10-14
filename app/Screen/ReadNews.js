import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "./Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import * as WebBrowser from "expo-web-browser";

const ReadNews = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  const sharing = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description,
    });
  };

  useEffect(() => {
    console.warn("--", news);
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          marginBottom: 10,
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sharing()}>
          <FontAwesome6 name="share" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 15 }}
      />
      <Text style={{ marginTop: 10, color: Colors.primary, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
        {news.title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: Colors.gray,
          lineHeight: 30,
        }}
      >
        {news.description}
      </Text>
      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
        <Text
          style={{
            marginTop: 10,
            color: Colors.primary,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Read More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReadNews;
