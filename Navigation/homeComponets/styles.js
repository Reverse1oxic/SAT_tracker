import { StyleSheet } from 'react-native';

const border = StyleSheet.create({
  header_border: {
    flex: 0.1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    height: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  Leaderboard_border: {
    flex: 0.2,
    marginBottom: -500,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    height: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default border;