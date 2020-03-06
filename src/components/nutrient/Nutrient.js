import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProgressBar from 'src/components/progressBar/ProgressBar';


const Nutrient = ({ label, value, color }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    const newValue = value < 100 ? value : 100;
    setPercentage(newValue);
  }, [value]);

  return (
    <View style={styles.container}>
      <View style={styles.labelAndValueContainer}>
        <View style={styles.labelContainer}>
          <Text>{label}</Text>
        </View>
        <View>
          <Text style={styles.mute}>{value}{'g'}</Text>
        </View>
      </View>
      <View style={styles.barBackground}>
        <View style={styles.barBackgroundPause} />
        <ProgressBar progress={percentage} color={color} />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$bgColor',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  labelAndValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelContainer: {
    paddingRight: 30,
  },
  barBackground: {
    marginTop: 5,
    height: 5,
    width: '100%',
    backgroundColor: '$progressBarDefault',
    borderRadius: 10,
  },
  barBackgroundPause: {
    backgroundColor: 'white',
    height: 5,
    width: 5,
    position: 'absolute',
    right: 10,

  },
  mute: {
    color: 'grey',
  },
});

export default Nutrient;