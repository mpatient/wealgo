import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Appbar, Card } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyBNHhASEQfT5zcDx7qyCJ0OOgApH3QGR7k";
  const MODEL_NAME = "gemini-pro";

  useEffect(() => {
    const startChat = async () => {
      try {
        setLoading(true);
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const prompt = "Hey there!";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        setMessages([{ text, user: false }]);
      } catch (error) {
        setError("Error starting chat: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    startChat();
  }, []);

  const handleSend = async () => {
    setLoading(true);
    setError(null);
    const userMessage = { text: userInput, user: true };
    setMessages([...messages, userMessage]);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const prompt = userMessage.text;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      setMessages([...messages, { text, user: false }]);
      setUserInput("");
    } catch (error) {
      setError("Error sending message: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = ({ item }) => (
    <View>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Text style={styles.appbarTitle}>Chatbot</Text>
      </Appbar.Header>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index.toString()}
          inverted
        />
      </View>

      <View style={styles.chatbar}>
        <Card style={styles.smsBar}>
          <TextInput
            placeholder='Type a message'
            onChangeText={setUserInput}
            value={userInput}
            style={styles.input}
            placeholderTextColor="black"
          />
        </Card>
        <Pressable style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendBtnText}>Send</Text>
          {loading && (
            <ActivityIndicator
              size={'small'}
              color='black'
            />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: '#98BF64',
  },
  appbarTitle: {
    fontFamily: 'Aleo-Regular',
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#98BF64',
  },
  smsBar: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  sendBtn: {
    backgroundColor: '#F6E7A8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginLeft: 10,
  },
  sendBtnText: {
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Chatbot;
