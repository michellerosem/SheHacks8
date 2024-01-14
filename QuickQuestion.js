import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const QuickQuestion = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }
    
    try {
      // Ensure your OpenAI API key is secure and not exposed in your client code
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({ prompt: question, max_tokens: 50 })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data.choices[0].text);
    } catch (error) {
      alert('Error asking question: ' + error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask a question"
        value={question}
        onChangeText={setQuestion}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Ask OpenAI"
          onPress={handleAskQuestion}
          color="#fff" // Set a color for the button text
        />
      </View>
      <Text style={styles.answer}>{answer}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: 'white', // Adjust the input background color if needed
    color: '#5a37b9', // Set a color for the input text
    borderRadius: 8, // Add border radius for a rounded appearance
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#5a37b9', // Set a color for the button background
    borderRadius: 8, // Add border radius for a rounded appearance
    overflow: 'hidden',
  },
  answer: {
    marginTop: 20,
    padding: 10,
  }
});

export default QuickQuestion;

