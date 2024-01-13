import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const handleAskQuestion = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/gpt-4.0-turbo/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-...3zYW'
        },
        body: JSON.stringify({ prompt: question, max_tokens: 50 })
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.choices && data.choices.length > 0 && data.choices[0].text) {
        setAnswer(data.choices[0].text);
      } else {
        setAnswer('No response from GPT-4.');
      }
    } catch (error) {
      console.error('There was an error asking the question:', error);
      setAnswer('Failed to get an answer. Please try again.');
    }
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
