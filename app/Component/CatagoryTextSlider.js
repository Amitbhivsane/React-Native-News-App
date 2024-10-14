import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colors from "../Screen/Shared/Colors";

const CatagoryTextSlider = ({ selectCategory }) => {
  const [active, setActive] = useState(1);

  const onCategoryClick = (id) => {
    setActive(id);
  };
  const categoryList = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Business",
    },
    {
      id: 4,
      name: "Sport",
    },
    {
      id: 5,
      name: "Life",
    },
    {
      id: 6,
      name: "Movie",
    },
  ];
  return (
    <View style={{ marginTop: 10 }}>
      {
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                (() => onCategoryClick(item.id),
                () => {
                  selectCategory(item.name);
                })
              }
            >
              <Text
                style={
                  item.id == active ? styles.selctedText : styles.unselctedText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  );
};
const styles = StyleSheet.create({
  unselctedText: {
    marginRight: 20,
    fontSize: 17,
    fontWeight: "1000",
    color: Colors.gray,
  },
  selctedText: {
    marginRight: 20,
    fontSize: 17,
    fontWeight: "1000",
    color: Colors.primary,
  },
});

export default CatagoryTextSlider;
