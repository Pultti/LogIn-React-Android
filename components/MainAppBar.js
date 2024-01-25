import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

const MainAppBar = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.loginTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
  headerContainer: {
    backgroundColor: '#f2f2f2',
    paddingBottom: 20,
  },
  loginTitle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    paddingTop: 60,
  },
});

export default MainAppBar;