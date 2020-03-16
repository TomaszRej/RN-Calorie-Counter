import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import {Text} from 'components/text/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
// @ts-ignore
import {styles} from 'src/components/mealsList/mealsListItem/styles';

interface MealsListItemProps {
  children: JSX.Element[] | JSX.Element;
  onShowInnerList: Function;
  item: {id: number};
}

const MealsListItem: React.FC<MealsListItemProps> = ({
  children,
  onShowInnerList,
  item,
}) => {
  return (
    <View style={[styles.shadow, styles.itemContainer]}>
      <View style={styles.flexContainer}>
        <View style={styles.leftContent}>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/images/kanpka1.png')}
            />
          </View>

          <TouchableOpacity onPress={() => onShowInnerList(item)}>
            <Text>'test element listy'{item.id}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.iconBorder}
          onPress={() => alert('alert ikana wcisnieta')}>
          <Icon
            name="chevron-right"
            size={30}
            color={EStyleSheet.value('$primary')}
          />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default MealsListItem;
