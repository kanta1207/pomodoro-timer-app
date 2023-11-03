import { useState, useCallback, useMemo } from 'react';

const focusTimeMin = 1 * 5 * 1000;
const breakTimeMin = 1 * 5 * 1000;
const pomodoroCount = 4;
export const useTimerCount = () => {
  const [timerCount, setTimerCount] = useState(focusTimeMin);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<'Focus' | 'Break'>('Focus');

  const timerCountToDisplay = useMemo(() => {
    const timerDate = new Date(timerCount);
    return (
      timerDate.getMinutes().toString().padStart(2, '0') +
      ' : ' +
      timerDate.getSeconds().toString().padStart(2, '0')
    );
  }, [timerCount]);

  const startTimer = useCallback(() => {
    const interval = setInterval(() => {
      setTimerCount((prev) => {
        const newTimerCount = prev - 1000;
        return newTimerCount;
      });
    }, 1000);
    setTimerInterval(interval);
    setIsTimerRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    if (!timerInterval) return;
    clearInterval(timerInterval);
    setIsTimerRunning(false);
  }, [timerInterval]);

  const toggleTimerMode = useCallback(() => {
    if (timerMode === 'Focus') {
      setTimerCount(breakTimeMin);
      setTimerMode('Break');
    } else {
      setTimerCount(focusTimeMin);
      setTimerMode('Focus');
    }
  }, [timerMode, focusTimeMin, breakTimeMin]);

  const timerPercentageCal = (timerMin: number, timerCount: number) => {
    const percentage = (timerCount / timerMin) * 100;
    return percentage;
  };

  const timerPercentage = useMemo(() => {
    return timerMode === 'Focus'
      ? timerPercentageCal(focusTimeMin, timerCount)
      : timerPercentageCal(breakTimeMin, timerCount);
  }, [timerMode, timerCount]);

  const remainingPomodoroSeries = useMemo(() => {
    return timerPercentage < 0 || timerPercentage >= 100
      ? [0, 100]
      : [100 - timerPercentage, timerPercentage];
  }, [timerPercentage]);

  return {
    timerCount,
    timerCountToDisplay,
    isTimerRunning,
    timerMode,
    startTimer,
    stopTimer,
    toggleTimerMode,
    timerPercentage,
    remainingPomodoroSeries,
  };
};
