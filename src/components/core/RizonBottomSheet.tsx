import React, { ReactNode } from 'react';
import { BottomSheet } from '@rneui/themed';
import {
  View,
  useWindowDimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  ViewStyle,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { colors } from '../../resources/colors';

interface BottomSheetProps {
  showModal: boolean;
  closeModal?: () => void;
  children: ReactNode;
  maxHeight?: number;
  styleContentWrapper?: ViewStyle;
  styleBottomSheetWrap?: ViewStyle;
  loading?: boolean;
}

const RizonBottomSheet: React.FC<BottomSheetProps> = ({
  showModal,
  closeModal,
  children,
  maxHeight,
  styleContentWrapper,
  styleBottomSheetWrap,
  loading = false,
}) => {
  const { height } = useWindowDimensions();

  const handleClose = () => {
    if (loading) {
      return;
    }
    closeModal?.();
  };

  return (
    <View>
      <BottomSheet isVisible={showModal} containerStyle={styles.container}>
        <TouchableOpacity
          activeOpacity={closeModal ? 0.5 : 1}
          onPress={handleClose}
          style={[styles.backdropWrapper, styleBottomSheetWrap || { height }]}
        >
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            >
              <View style={[styles.sheetContainer, styleContentWrapper]}>
                <View style={styles.handleWrapper} onTouchStart={handleClose}>
                  <View style={styles.handle} />
                </View>

                <View style={[styles.contentWrapper, maxHeight ? { maxHeight } : null]}>
                  <ScrollView keyboardShouldPersistTaps="handled" nestedScrollEnabled={true}>
                    {children}
                  </ScrollView>
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

export default RizonBottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${colors.FONT_COLOR}b3`,
    marginBottom: -35,
  },

  backdropWrapper: {
    justifyContent: 'flex-end',
  },

  sheetContainer: {
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.BOTTOM_SHEET_BACKGROUND,
    position: 'relative',
  },

  handleWrapper: {
    alignItems: 'center',
  },

  handle: {
    width: 56,
    height: 5,
    marginVertical: 8,
    backgroundColor: colors.PLACEHOLDER_COLOR,
    borderRadius: 3,
  },

  contentWrapper: {
    marginTop: 24,
    marginBottom: Platform.OS === 'ios' ? 100 : 70,
  },
});
