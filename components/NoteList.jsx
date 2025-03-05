import { View, FlatList } from "react-native";
import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, removeNote, updateNote }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            removeNote={removeNote}
            updateNote={updateNote}
          />
        )}
      />
    </View>
  );
};

export default NoteList;
