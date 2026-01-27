import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';
import { colors } from '../resources/colors';

interface CustomInputProps extends Omit<TextInputProps, 'style'> {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  disabled = false,
  maxLength,
  multiline = false,
  numberOfLines = 1,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          disabled && styles.inputContainerDisabled,
        ]}
      >
        <TextInput
          style={[styles.input, inputStyle, multiline ? styles.multilineInput : undefined]}
          placeholder={placeholder}
          placeholderTextColor={colors.PLACEHOLDER_COLOR}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          {...restProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.BOTTOM_SHEET_BACKGROUND,
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 16,
    // paddingHorizontal: 16,
    // paddingVertical: 20,
    minHeight: 48,
  },
  inputContainerFocused: {
    borderColor: colors.INPUT_TEXT_COLOR,
    borderWidth: 2,
  },
  inputContainerDisabled: {
    backgroundColor: '#F3F4F6',
    borderColor: '#D1D5DB',
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 16,
    paddingVertical: 26,
    // paddingVertical: 6,
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    color: colors.INPUT_TEXT_COLOR,
    borderColor: 'transparent',
    width: '100%',
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
});

export default CustomInput;
