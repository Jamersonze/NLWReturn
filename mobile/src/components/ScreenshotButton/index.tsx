import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
    screenShot: string | null
    onTakeShot: () => void
    onRemoveShot: () => void
}

export function ScreenshotButton({ screenShot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={!screenShot ? onTakeShot : onRemoveShot}
    >
        {
            !screenShot
            ?
            <Camera 
                size={24}
                color={theme.colors.text_secondary}
                weight={'bold'}
            />
            :
            <View >
                <Image
                    style={styles.image}
                    source={{uri: screenShot}}
                />
                <Trash
                    size={22}
                    color={theme.colors.text_secondary}
                    weight={'fill'}
                    style={styles.removeIcon}
                />
            </View>
        }

    </TouchableOpacity>
  );
}