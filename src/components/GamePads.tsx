import React, { FC } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { mColors } from '../utils';
import { translations } from '../translations';


const styles = StyleSheet.create({
    shapeContainer: {
        width: 140,
        height: 140,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 1
    },
    rowStyle: {
        flexDirection: 'row'
    },
    centerRoundContainer: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 55,
        zIndex: 1
    },
    centerElement: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    greenButton: {
        backgroundColor: mColors.green
    },
    redButton: {
        backgroundColor: mColors.red,
        transform: [{ rotate: '90deg' }]
    },
    yellowButton: {
        backgroundColor: mColors.yellow,
        transform: [{ rotate: '-90deg' }]
    },
    blueButton: {
        backgroundColor: mColors.blue,
        transform: [{ rotate: '180deg' }]
    }
});

const { start } = translations.game.content

interface GamePadsProps {
    buttonsAnimatedRef: Animated.Value[];
    isDisable: boolean;
    isStarted: boolean;
    score: number;
    handlePress: (btnIndex: number) => void;
    newGame: () => void;
}

const GamePads: FC<GamePadsProps> = ({ buttonsAnimatedRef, isDisable, handlePress, isStarted, score, newGame }) => {

    return (<>
        <View style={styles.rowStyle}>
            <Animated.View style={{ opacity: buttonsAnimatedRef[0] }}>
                <TouchableOpacity style={StyleSheet.flatten([styles.shapeContainer, styles.greenButton])} disabled={isDisable} onPress={() => handlePress(0)} />
            </Animated.View>
            <Animated.View style={{ opacity: buttonsAnimatedRef[1] }}>
                <TouchableOpacity style={StyleSheet.flatten([styles.shapeContainer, styles.redButton])} disabled={isDisable} onPress={() => handlePress(1)} />
            </Animated.View>
        </View>
        <View style={styles.centerRoundContainer}>
            {isStarted ?
                <Text style={styles.centerElement}>{score}</Text>
                :
                <TouchableOpacity style={styles.centerRoundContainer} onPress={newGame} >
                    <Text style={styles.centerElement}>{start}</Text>
                </TouchableOpacity>}
        </View>
        <View style={styles.rowStyle}>
            <Animated.View style={{ opacity: buttonsAnimatedRef[2] }}>
                <TouchableOpacity style={StyleSheet.flatten([styles.shapeContainer, styles.yellowButton])} disabled={isDisable} onPress={() => handlePress(2)} />
            </Animated.View>
            <Animated.View style={{ opacity: buttonsAnimatedRef[3] }}>
                <TouchableOpacity style={StyleSheet.flatten([styles.shapeContainer, styles.blueButton])} disabled={isDisable} onPress={() => handlePress(3)} />
            </Animated.View>
        </View>
    </>
    )
}

export default GamePads;