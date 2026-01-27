import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ROUTES } from '../utils/routes';
import { colors } from '../resources/colors';
import { NavigationProp } from '../navigation/RootNavigation';

const Home = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(ROUTES.ONBOARDING)}
      >
        <Text style={styles.title}>Go to On Boarding</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(ROUTES.ACCOUNT, { username: 'ribath' })}
      >
        <Text style={styles.title}>View Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(ROUTES.CART)}>
        <Text style={styles.title}>View Cart</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: colors.BUTTON_PRIMARY_BACKGROUND,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 12,
    shadowColor: colors.SHADOW_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '50%',
    marginBottom: 20,
  },
});

export default Home;
