import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { colors } from '../resources/colors';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
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
});

export default Cart;
