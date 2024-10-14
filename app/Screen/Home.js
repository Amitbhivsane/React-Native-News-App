import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CatagoryTextSlider from "../Component/CatagoryTextSlider";
import Colors from "./Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import TopHeadLine from "../Component/TopHeadLine";
import HeadLineList from "../Component/HeadLineList";
import GlobalApi from "../Services/GlobalApi";
const Home = () => {
  const [newsList, setNewList] = useState();

  useEffect(() => {
    // gettopHeadline();
    getNewsByCategory("Latest");
  }, []);

  const getNewsByCategory = async (category) => {
    const result = (await GlobalApi.getByCategory(category)).data;
    setNewList(result.articles);
  };

  const gettopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadLinde).data;

    setNewList(result.articles);
  };
  return (
    <View>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>Amazing News </Text>
          <Ionicons name="notifications-outline" size={25} color="black" />
        </View>
        <CatagoryTextSlider
          selectCategory={(category) => getNewsByCategory(category)}
        />
        {/* <TopHeadLine/> */}
        <TopHeadLine newsList={newsList} />
        <HeadLineList newsList={newsList} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary,
  },
});

export default Home;
