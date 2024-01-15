import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios'; // Import axios if not already installed

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/Users/danielo/Documents/programming_projects/Apps/SAT_tracker/Data/Leaderboard_data.json');
        setLeaderboardData(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.leaderboardContainer}>
      <Text style={styles.leaderboardTitle}>Leaderboard</Text>
      {leaderboardData.map((entry, index) => (
        <View key={index} style={styles.leaderboardEntry}>
          <Text style={styles.leaderboardName}>{entry.name}</Text>
          <Text style={styles.leaderboardHours}>{`${entry.hoursStudied} H`}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  leaderboardContainer: {
    marginTop: 5,
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  leaderboardEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  leaderboardName: {
    fontSize: 16,
    color: 'black',
  },
  leaderboardHours: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Leaderboard;