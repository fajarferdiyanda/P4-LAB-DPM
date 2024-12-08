// App.js

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Scoreboard from './src/components/Scoreboard';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Scoreboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;