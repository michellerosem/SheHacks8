import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const QuickHack = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    // Call to ChatGPT API goes here
    // This is a placeholder for the API call
    // Replace it with your actual API call logic
    const response = await fetch('YOUR_CHATGPT_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-...3zYW'
      },
      body: JSON.stringify({ prompt: question, max_tokens: 50 })
    });

    const data = await response.json();
    setAnswer(data.choices[0].text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask a question"
        value={question}
        onChangeText={setQuestion}
      />
      <Button
        title="Ask ChatGPT"
        onPress={handleAskQuestion}
      />
      <Text style={styles.answer}>{answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  answer: {
    marginTop: 20,
    padding: 10,
  }
});

export default QuickHack;
