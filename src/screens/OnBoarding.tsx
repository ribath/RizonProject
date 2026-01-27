import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { colors } from '../resources/colors';
import RizonBottomSheet from '../components/RizonBottomSheet';
import { useLazyGetOnboardingQuery, useSendFeedbackMutation } from '../redux/services/api';
import AskFeedback from './AskFeedback';
import SendFeedback from './SendFeedback';

const OnBoarding = () => {
  type SheetType = 'NONE' | 'ONBOARDING_DONE' | 'FEEDBACK';
  const [activeSheet, setActiveSheet] = useState<SheetType>('NONE');
  const [showModal, setShowModal] = useState<boolean>(false);

  const [triggerGetOnboarding, { data, isSuccess: isOnboardingSuccess }] =
    useLazyGetOnboardingQuery();
  const [sendFeedback, { isLoading: isSending }] = useSendFeedbackMutation();

  useEffect(() => {
    triggerGetOnboarding();
  }, []);

  useEffect(() => {
    if (isOnboardingSuccess && data?.data) {
      handleOpenOnBoardingDone();
    }
  }, [isOnboardingSuccess, data]);

  const handleOpenOnBoardingDone = () => {
    setShowModal(true);
    setActiveSheet('ONBOARDING_DONE');
  };

  const handleOpenFeedback = () => {
    setActiveSheet('FEEDBACK');
  };

  const handleCloseSheet = () => {
    setActiveSheet('NONE');
    setShowModal(false);
  };

  const handleSendFeedback = async (feedback: string) => {
    try {
      await sendFeedback({ feedback }).unwrap();
      setShowModal(false);
    } catch (err) {
      console.error('Feedback failed', err);
      throw err;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>On Boarding</Text>
      <RizonBottomSheet showModal={showModal} closeModal={handleCloseSheet} loading={isSending}>
        {activeSheet === 'ONBOARDING_DONE' && (
          <AskFeedback onClose={handleCloseSheet} onContinue={handleOpenFeedback} />
        )}
        {activeSheet === 'FEEDBACK' && (
          <SendFeedback onSend={handleSendFeedback} isSending={isSending} />
        )}
      </RizonBottomSheet>
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

export default OnBoarding;
