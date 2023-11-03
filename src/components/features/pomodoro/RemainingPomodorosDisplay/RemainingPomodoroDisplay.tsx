import React from 'react';
import { StyleSheet, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { colorCode } from '../../../../utils/colors.util';

type Props = {
  remainingPomodoroSeries: number[];
  remainingPomodoros: number;
};

export const RemainingPomodoroDisplay: React.FC<Props> = ({
  remainingPomodoroSeries,
  remainingPomodoros,
}) => {
  const remainingPomodorosArray = new Array(remainingPomodoros - 1).fill(null);

  const baseSeries = [0, 100];
  const sliceColor = [colorCode.white, colorCode.green];

  return (
    <View style={styles.container}>
      {remainingPomodorosArray.map((_, i) => {
        return (
          <PieChart
            key={i}
            widthAndHeight={25}
            series={baseSeries}
            sliceColor={sliceColor}
          />
        );
      })}
      <PieChart
        widthAndHeight={25}
        series={remainingPomodoroSeries}
        sliceColor={sliceColor}
      />
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
