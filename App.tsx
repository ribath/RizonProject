import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';
import Navigation from './src/navigation';
import { store } from './src/redux/store';
import LeaveReviewModal from './src/screens/LeaveReviewModal';

function App() {
  const [showLeaveReview, setShowLeaveReview] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS === 'android') {
      const requestPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          const token = await messaging().getToken();
          console.log('FCM Device Token:', token);
        }
      };

      const unsubscribe = messaging().onMessage(async () => {
        setShowLeaveReview(true);
      });

      requestPermission();
      return unsubscribe;
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Provider store={store}>
        <SafeAreaView style={styles.background}>
          <Navigation />
          <LeaveReviewModal visible={showLeaveReview} onClose={() => setShowLeaveReview(false)} />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginBottom: -35,
  },
});

export default App;
