import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: "1", text: "Note One" },
    { id: "2", text: "Note Two" },
    { id: "3", text: "Note Three" },
    { id: "4", text: "Note Four" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  const router = useRouter();

  const addNote = () => {
    newNote.trim() !== ""
      ? setNotes((prev) => [
          ...prev,
          { id: Date.now.toString(), text: newNote },
        ])
      : null;

    setNewNote("");
    setModalVisible(false);
  };

  const updateNote = (id) => {
    router.push(`edit/${id}`);
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === id ? [...note, { text: newNote }] : note
    //   )
    // );
  };

  const removeNote = (index) => {
    setNotes((p) => p.filter((p) => p.id !== index));
  };

  return (
    <View style={styles.container}>
      {/* Note List */}
      <NoteList notes={notes} removeNote={removeNote} updateNote={updateNote} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible((m) => !m)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>
      {/* Modal  */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
