/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Text, StyleSheet, View, Platform, Image } from 'react-native';
import { colors } from '../resources/colors';
import RizonButtonSecondary from '../components/RizonButtonSecondary';
import RizonButtonPrimary from '../components/RizonButtonPrimary';

interface AskFeedbackProps {
  onClose: () => void;
  onContinue: () => void;
}

const AskFeedback: React.FC<AskFeedbackProps> = ({ onClose, onContinue }) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../resources/images/logo.png')} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Enjoying Rizon so far?</Text>
        <Text style={styles.body}>Your feedback helps us build a better money experience.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <RizonButtonSecondary
          style={{ paddingRight: 4, width: '50%' }}
          text="Not yet"
          onPress={onClose}
        />
        <RizonButtonPrimary
          style={{ paddingLeft: 4, width: '50%' }}
          text="Yes, loving it"
          onPress={onContinue}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 8,
    backgroundColor: colors.LOGO_BACKGROUND,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.PRIMARY_FONT_COLOR,
  },
  body: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.SECONDARY_FONT_COLOR,
    paddingTop: 8,
  },
  buttonContainer: {
    marginTop: 24,
    width: '100%',
    flexDirection: 'row',
  },
});

export default AskFeedback;
