import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TimerCountDownDisplay } from '../../../components/features/pomodoro/TimerCountDownDisplay/TimerCountDownDisplay';
import { TimerControlButton } from '../../../components/features/pomodoro/TimerControlButton/TimerControlButton';
import { RemainingPomodoroDisplay } from '../../../components/features/pomodoro/RemainingPomodorosDisplay/RemainingPomodoroDisplay';
import { useTimerCount } from '../../../hooks/feature/pomodoro/useTimerCount';

const pomodoroCount = 4;

export const PomodoroScreen = () => {
  const {
    timerCountToDisplay,
    timerMode,
    isTimerRunning,
    startTimer,
    stopTimer,
    toggleTimerMode,
    timerPercentage,
    remainingPomodoroSeries,
  } = useTimerCount();

  const containerStyle =
    timerMode === 'Focus' ? styles.containerOnFocus : styles.containerOnBreak;

  useEffect(() => {
    console.log('timerCountToDisplay: ', timerCountToDisplay);
    if (timerCountToDisplay === '00 : 00') toggleTimerMode();
  }, [timerCountToDisplay]);

  return (
    <View style={containerStyle}>
      <StatusBar style="light" />
      <TimerCountDownDisplay
        timerCountToDisplay={timerCountToDisplay}
        timerPercentage={timerPercentage}
      />
      <RemainingPomodoroDisplay
        remainingPomodoroSeries={remainingPomodoroSeries}
        remainingPomodoros={pomodoroCount}
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
