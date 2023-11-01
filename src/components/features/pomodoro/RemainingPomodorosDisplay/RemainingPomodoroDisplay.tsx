import React from 'react';
import { StyleSheet, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { colorCode } from '../../../../utils/colors.util';

type Props = {
  timerPercentage: number;
  remainingPomodoros: number;
};

export const RemainingPomodoroDisplay: React.FC<Props> = ({
  timerPercentage,
  remainingPomodoros,
}) => {
  const remainingPomodorosArray = new Array(remainingPomodoros - 1).fill(null);
  const series = [100 - timerPercentage, timerPercentage];
  const baseSeries = [0, 100];
  const sliceColor = [colorCode.white, colorCode.green];

  return (
    <View style={styles.container}>
      {remainingPomodorosArray.map(() => {
        return (
          <PieChart
            widthAndHeight={25}
            series={baseSeries}
            sliceColor={sliceColor}
          />
        );
      })}
      <PieChart widthAndHeight={25} series={series} sliceColor={sliceColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
