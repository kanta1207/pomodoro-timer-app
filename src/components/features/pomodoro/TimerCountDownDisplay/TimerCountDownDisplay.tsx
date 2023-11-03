import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type TimerCountDownDisplayProps = {
  timerCountToDisplay: string;
  timerPercentage: number;
};

export const TimerCountDownDisplay: FC<TimerCountDownDisplayProps> = ({
  timerCountToDisplay,
  timerPercentage,
}) => {
  return (
    <AnimatedCircularProgress
      size={250}
      width={8}
      fill={timerPercentage}
      rotation={360}
      tintColor="#fff"
      style={{ transform: [{ scaleX: -1 }] }}
    >
      {() => {
        return (
          <Text style={styles.timerCounterText}>{timerCountToDisplay}</Text>
        );
      }}
    </AnimatedCircularProgress>
  );
};

const styles = StyleSheet.create({
  timerCounterText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    transform: [{ scaleX: -1 }],
  },
});
