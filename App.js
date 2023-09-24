import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const initialTextColors = ['red', 'blue', 'green', 'yellow'];

  const [textColors, setTextColors] = useState(initialTextColors);

  const toggleTextColor = (index) => {
    const currentColor = textColors[index];
    const newColors = [...textColors];
    
    
    newColors[index] = currentColor === 'black' ? initialTextColors[index] : 'black';
    setTextColors(newColors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'white' }]} 
            onPress={() => toggleTextColor(0)}
          >
            <Text style={[styles.buttonText, { color: 'red' }]}>Button 1</Text> 
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'white' }]} 
            onPress={() => toggleTextColor(1)}
          >
            <Text style={[styles.buttonText, { color: 'blue' }]}>Button 2</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'white' }]} 
            onPress={() => toggleTextColor(2)}
          >
            <Text style={[styles.buttonText, { color: 'green' }]}>Button 3</Text> 
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'white' }]} 
            onPress={() => toggleTextColor(3)}
          >
            <Text style={[styles.buttonText, { color: 'yellow' }]}>Button 4</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.textContainer}>
        <View style={[styles.textBox, { backgroundColor: 'gray' }]}>
          <Text style={[styles.text, { color: textColors[0] }]}>Car</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: 'gray' }]}>
          <Text style={[styles.text, { color: textColors[1] }]}>Boat</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: 'gray' }]}>
          <Text style={[styles.text, { color: textColors[2] }]}>Truck</Text>
        </View>
        <View style={[styles.textBox, { backgroundColor: 'gray' }]}>
          <Text style={[styles.text, { color: textColors[3] }]}>Ship</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', 
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 110, 
    height: 50, 
    borderRadius: 2, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15, 
    borderWidth: 1, 
    borderColor: 'transparent', 
  },
  buttonText: {
    fontSize: 14, 
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink', 
  },
  textBox: {
    width: 140, 
    height: 40, 
    borderRadius: 5, 
    marginBottom: 10, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20, 
    color: 'black', 
  },
});

export default App;
