import React, { FC, useState } from 'react';
import { Alert, Button, Modal, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { mColors } from '../utils';
import { translations } from '../translations';


const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        backgroundColor: mColors.skyWhite,
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        alignSelf: 'center',
    },
    textInput: {
        paddingHorizontal: 8,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: mColors.white,
        width: 200,
        paddingVertical: 12
    },
    text: {
        color: mColors.white,
        fontSize: 22,
        marginVertical: 12
    }
});

interface GameOverModalProps {
    isVisible: boolean;
    currentScore: number;
    onCloseModal: (playerName: string) => void;
}

const {
    your_name_here,
    your_score_is,
    please_enter_your_name,
    save,
    player_name_cannot_be_empty
} = translations.game_over.game_over_modal.content

const GameOverModal: FC<GameOverModalProps> = ({ currentScore, isVisible, onCloseModal }) => {
    const [playerName, setPlayerName] = useState('');
    const handleOnSave = () => {
        if (!playerName) {
            return Alert.alert(player_name_cannot_be_empty);
        }
        onCloseModal(playerName);
    }
    return (
        <Modal transparent animationType='slide' visible={isVisible}>
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.container}>
                    <Text>{your_score_is} {currentScore}</Text>
                    <Text>{please_enter_your_name}</Text>
                    <TextInput
                        placeholder={your_name_here}
                        value={playerName}
                        onChangeText={setPlayerName}
                        style={styles.textInput}
                        autoFocus
                    />
                    <Button
                        onPress={handleOnSave}
                        title={save}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default GameOverModal;