import React, { FC } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { mColors } from '../utils';
import { Player } from '../screens/GameOver';
import useSortedList from '../hooks/useSortedList';

const styles = StyleSheet.create({
    scrollContainer: {
        width: 250,
        height: 100,
        padding: 5
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'Cochin',
        fontSize: 20
    }
});

export interface ScoreListProps {
    scoreList: Player[];
}

const HighscoresBoard: FC<ScoreListProps> = ({ scoreList }) => {

    const { sortedScoreList } = useSortedList(scoreList);

    return (
        <ScrollView style={styles.scrollContainer}>
            {!!sortedScoreList && sortedScoreList.map((playerElement, index) => {
                return (
                    <View key={playerElement.id} style={{ padding: 2, flex: 1, backgroundColor: index % 2 === 0 ? mColors.skyWhite : mColors.white, borderRadius: 5 }}>
                        <View style={styles.field}>
                            <Text style={styles.text}>{playerElement.name}</Text>
                            <Text style={styles.text}>{playerElement.score}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default HighscoresBoard;