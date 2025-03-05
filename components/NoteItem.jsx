import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const NoteItem = ({ note, removeNote, updateNote }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={() => removeNote(note.id)}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateNote(note.id)}>
          <FontAwesome name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});
