import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { colors } from '../../resources/colors';

interface RizonButtonSecondaryProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const RizonButtonSecondary: React.FC<RizonButtonSecondaryProps> = ({
  text,
  onPress,
  disabled = false,
  loading = false,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.disabledButton]}
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color={colors.FONT_COLOR} />
        ) : (
          <Text style={styles.buttonText}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
  },
  button: {
    width: '100%',
    height: 48,
    opacity: 1,
    gap: 8,
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    borderRadius: 100,
    backgroundColor: colors.BUTTON_SECONDARY_BACKGROUND,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.BORDER_COLOR,
  },
  disabledButton: {
    backgroundColor: '#D1D5DB',
    opacity: 0.6,
  },
  buttonText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.PRIMARY_FONT_COLOR,
  },
});

export default RizonButtonSecondary;
