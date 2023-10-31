import React, { FC, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colorCode } from '../../utils/colors.util';
import { StyleSheet } from 'react-native';

type LinearGradientWrapperProps = {
  children: ReactNode;
};

export const LinearGradientWrapper: FC<LinearGradientWrapperProps> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={[colorCode.secondaryBlack, colorCode.primaryBlack]}
      style={styles.style}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  style: { flex: 1 },
});
