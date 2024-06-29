import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, FlatList } from 'react-native';

const Detail = ({ route, navigation }) => {
  const { contact } = route.params;
  const [message, setMessage] = useState(''); // State for chat message
  const [messages, setMessages] = useState([]); // State for chat history

  const sendMessage = () => {
    if (!message) return; // Prevent sending empty messages

    const newMessage = {
      sender: 'me', // Identify yourself as the sender
      text: message,
      // Consider adding timestamp or other message metadata
    };

    setMessages([...messages, newMessage]); // Add new message to history
    setMessage(''); // Clear message input after sending
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <Image source={contact.photo} style={styles.contactPhoto} />
      <Text style={styles.detail}>Name: {contact.name}</Text>
      <Text style={styles.detail}>Phone: {contact.phone}</Text>

      {/* Chat message list */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.text} // Unique key for each message
        renderItem={({ item }) => (
          <View style={item.sender === 'me' ? styles.messageRight : styles.messageLeft}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      {/* Chat input and send button */}
      <View style={styles.chatInput}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={sendMessage} style={styles.sendButton} />
      </View>

      <Button title="Go Back" onPress={() => navigation.goBack()} style={styles.goBackButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Light background for message area
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  contactPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  chatInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  messageInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  messageLeft: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  messageRight: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
  goBackButton: {
    marginTop: 20,
    backgroundColor: '#ccc', // Light gray background for Go Back button
    borderRadius: 5,
    padding: 10, // Increase padding for larger button
  },
  sendButton: {
    backgroundColor: '#007bff', // Blue background for Send button
    color: '#fff',
    borderRadius: 5,
    padding: 10, // Increase padding for larger button
  },
});

export default Detail;
