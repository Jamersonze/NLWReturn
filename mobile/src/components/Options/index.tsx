import React from 'react';
import { View, Text } from 'react-native';

import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { feedbackTypes } from '../../utils/feedbackTypes'
import { styles } from './styles';
import { FeedbackType } from '../Widget'

interface Props {
    onFeedbackChange: (feedback: FeedbackType) => void
}

export function Options({ onFeedbackChange } : Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Deixe seu feedback
        </Text>
        <View style={styles.options}>
            {
                Object
                .entries(feedbackTypes)
                .map(([key, value]) => (
                    <Option 
                        key={key}
                        title={value.title}
                        image={value.image}
                        onPress={() => onFeedbackChange(key as FeedbackType)}
                    />
                ))
            }
        </View>
        <Copyright />
    </View>
  );
}