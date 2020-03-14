import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import ProgressBar from 'components/progressBar/ProgressBar'
// @ts-ignore
import {styles} from 'src/components/nutrient/styles';

interface NutrientProps {
    label: string,
    value: number,
    color: string,
}

const Nutrient: React.FC<NutrientProps> = ({label, value, color}) => {
    const [percentage, setPercentage] = useState<number>(value);

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
                <View style={styles.barBackgroundPause}/>
                <ProgressBar progress={percentage} color={color}/>
            </View>
        </View>
    );
};


export default Nutrient;
