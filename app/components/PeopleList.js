import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import PersonItem from "./PersonItem";
import AppText from "./AppText";
import ListSeparator from "./ListSeparator";
import NoResultsList from "./NoResultsList";

function PeopleList({ people, reaction }) {
  const peopleList = () => {
    return people.filter((p) => {
      return p.reaction === reaction;
    });
  };

  return (
    <View style={styles.container}>
      <AppText>Reacted with {reaction} :</AppText>
      <FlatList
        ItemSeparatorComponent={<ListSeparator />}
        ListEmptyComponent={<NoResultsList />}
        style={styles.list}
        data={peopleList()}
        keyExtractor={(p) => p.image}
        renderItem={({ item }) => (
          <PersonItem
            image={item.image}
            name={item.firstName + " " + item.lastName}
            bio={item.bio}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
  },
  list: {
    marginTop: 10,
    width: "100%",
  },
});

export default PeopleList;
