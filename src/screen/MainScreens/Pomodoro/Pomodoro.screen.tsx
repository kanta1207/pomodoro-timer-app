import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TimerCountDownDisplay } from '../../../components/features/pomodoro/TimerCountDownDisplay/TimerCountDownDisplay';
import { TimerControlButton } from '../../../components/features/pomodoro/TimerControlButton/TimerControlButton';
import { RemainingPomodoroDisplay } from '../../../components/features/pomodoro/RemainingPomodorosDisplay/RemainingPomodoroDisplay';

const focusTimeMin = 1 * 60 * 1000;
const breakTimeMin = 1 * 60 * 1000;

export const PomodoroScreen = () => {
  const [timerCount, setTimerCount] = useState(focusTimeMin);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<'Focus' | 'Break'>('Focus');

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimerCount((prev) => prev - 1000);
    }, 1000);
    setTimerInterval(interval);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    if (!timerInterval) return;
    clearInterval(timerInterval);
    setIsTimerRunning(false);
  };
  const timerPercentageCal = (timerMin: number, timerCount: number) => {
    const percentage = (timerCount / timerMin) * 100;
    return percentage;
  };

  const timerDate = new Date(timerCount);

  const timerPercentage =
    timerMode === 'Focus'
      ? timerPercentageCal(focusTimeMin, timerCount)
      : timerPercentageCal(breakTimeMin, timerCount);

  const containerStyle =
    timerMode === 'Focus' ? styles.containerOnFocus : styles.containerOnBreak;
  return (
    <View style={containerStyle}>
      <StatusBar style="light" />
      <TimerCountDownDisplay
        timerDate={timerDate}
        timerPercentage={timerPercentage}
      />
      <RemainingPomodoroDisplay
        timerPercentage={timerPercentage}
        remainingPomodoros={4}
      />
      <TimerControlButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerOnFocus: {
    flex: 1,
    backgroundColor: '#2A272A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOnBreak: {
    flex: 1,
    backgroundColor: '#0066AF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
