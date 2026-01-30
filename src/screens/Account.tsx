import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../resources/colors';
import { NavigationProp } from '../navigation/RootNavigation';

const Account = () => {
  const navigation = useNavigation<NavigationProp>();
  const { username } = navigation.getState().routes[navigation.getState().index].params as {
    username: string;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Text style={styles.subtitle}>Username: {username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.SCREEN_BACKGROUND,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default Account;
