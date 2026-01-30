import React, { useState } from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';
import { colors } from '../resources/colors';
import CustomInput from './core/RizonInput';
import RizonButtonPrimary from './core/RizonButtonPrimary';

interface SendFeedbackProps {
  onSend: (feedback: string) => Promise<void>;
  isSending: boolean;
}

const SendFeedbackModal: React.FC<SendFeedbackProps> = ({ onSend, isSending }) => {
  const [feedback, setFeedback] = useState<string>('');

  const handleSendFeedback = async () => {
    try {
      await onSend(feedback);
      setFeedback('');
    } catch (err) {
      console.error('Error in SendFeedback component:', err);
    }
  };

  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Help us improve Rizon</Text>
        <Text style={styles.body}>Tell us what didn't feel right, we read every message.</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          placeholder="Type your feedback here…"
          value={feedback}
          onChangeText={setFeedback}
          disabled={isSending}
          maxLength={200}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RizonButtonPrimary
          text={isSending ? 'Sending...' : 'Send feedback'}
          onPress={handleSendFeedback}
          disabled={isSending}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
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
    width: '100%',
    marginTop: 24,
  },
  inputContainer: {
    width: '100%',
    paddingTop: 16,
  },
});

export default SendFeedbackModal;
