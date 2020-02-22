import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'src/components/Text/Text'
const SummaryScreen = () => {
  return (
    <View>
      <Text weight={"bold"} size={'h1'}>Summary screen</Text>
      <Text align={"center"} textType={"italic"} >Summary screen</Text>
      <Icon name="dots-vertical" size={30} color="red" />
    </View>
  );
};

export default SummaryScreen;
