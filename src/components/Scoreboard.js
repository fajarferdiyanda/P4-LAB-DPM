// src/components/Scoreboard.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';

const Scoreboard = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleIncreaseScore = (team) => {
    if (team === 'A') {
      setTeamAScore(teamAScore + 1);
    } else if (team === 'B') {
      setTeamBScore(teamBScore + 1);
    }
    checkWinner();
  };

  const handleDecreaseScore = (team) => {
    if (team === 'A' && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === 'B' && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  const checkWinner = () => {
    if (teamAScore >= 10) {
      Alert.alert('Team A Wins!', 'Congratulations Team A!');
      resetGame();
    } else if (teamBScore >= 10) {
      Alert.alert('Team B Wins!', 'Congratulations Team B!');
      resetGame();
    }
  };

  const resetGame = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Scoreboard</Text>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A</Text>
        <Text style={styles.score}>{teamAScore}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => handleIncreaseScore('A')} color="#4CAF50" />
          <Button title="-" onPress={() => handleDecreaseScore('A')} color="#F44336" />
        </View>
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B</Text>
        <Text style={styles.score}>{teamBScore}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => handleIncreaseScore('B')} color="#4CAF50" />
          <Button title="-" onPress={() => handleDecreaseScore('B')} color="#F44336" />
        </View>
      </View>
      <Button title="Reset Game" onPress={resetGame} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa', // Warna latar belakang yang lebih cerah
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b', // Warna hijau tua
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff', // Warna latar belakang tim
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Tambahkan efek bayangan
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b', // Warna hijau tua
  },
  score: {
    fontSize: 60,
    marginVertical: 10,
    color: '#d32f2f', // Warna merah untuk skor
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});

export default Scoreboard;