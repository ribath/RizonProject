/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Image, Linking, Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RizonBottomSheet from './core/RizonBottomSheet';
import RizonButtonPrimary from './core/RizonButtonPrimary';
import { colors } from '../resources/colors';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const LeaveReviewModal: React.FC<Props> = ({ visible, onClose }) => {
  const openStoreForReview = async () => {
    const appId = '1533855222';
    const packageName = 'com.king.candycrushsaga';

    const storeUrl =
      Platform.OS === 'ios'
        ? `itms-apps://apps.apple.com/app/id${appId}`
        : `market://details?id=${packageName}`;

    const webUrl =
      Platform.OS === 'ios'
        ? `https://apps.apple.com/app/id${appId}`
        : `https://play.google.com/store/apps/details?id=${packageName}`;

    try {
      await Linking.openURL(storeUrl);
    } catch {
      await Linking.openURL(webUrl);
    }
  };

  return (
    <RizonBottomSheet showModal={visible} closeModal={onClose}>
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['#000000', '#2A75CF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientContainer}
        >
          <Image source={require('../resources/images/3d-check-box-icon-3d-check-list.png')} />
        </LinearGradient>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.header}>Got a minute to help us grow?</Text>
        <Text style={styles.body}>It takes less than a minute and helps us a lot.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <RizonButtonPrimary text="Leave a review" onPress={openStoreForReview} />
      </View>
    </RizonBottomSheet>
  );
};

export default LeaveReviewModal;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  gradientContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 8,
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
    textAlign: 'center',
    color: colors.PRIMARY_FONT_COLOR,
  },
  body: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.SECONDARY_FONT_COLOR,
    paddingTop: 8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 24,
  },
});
