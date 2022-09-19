import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GameOverModal, HighscoresBoard } from '../components';
import { useDispatch } from 'react-redux';
import { restartSequence } from '../redux/slices/sequenceSlice';
import { Button } from '../atomicComponents';
import { retrieveData, storeData, SCORE_LIST } from '../services/data/local/asyncStorage';
import { translations } from '../translations';
import { mColors } from '../utils';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  topContainer: {
    justifyContent: 'center',
    paddingBottom: 22
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Cochin'
  },
  scoretext: {
    fontSize: 24,
    textAlign: 'center',
    margin: 2,
    color: mColors.black,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    width: 200,
    borderRadius: 10,
    height: 40
  },
});

export interface Player {
  id: number;
  name: string;
  score: string;
}

const {
  highscores_board,
  new_game
} = translations.game_over.content

const GameOver: FC = ({ navigation, route }: any) => {
  const dispatch = useDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(true);
  const { score } = route.params || {};
  const [scoreList, setScoreList] = useState<Player[]>([]);

  const fetchData = async () => {
    const currentHighScoreList = await retrieveData(SCORE_LIST, []);
    setScoreList(currentHighScoreList)
  }

  const onCloseModal = (playerName: string) => {
    const playersData: Player[] = [...scoreList, { id: scoreList.length, name: playerName, score }];
    storeData(SCORE_LIST, playersData);
    setScoreList(playersData);
    setIsVisibleModal(false);
    dispatch(restartSequence());
  };

  const resetGame = () => {
    dispatch(restartSequence());
    navigation.goBack()
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.topContainer}>
          <Text style={styles.header}>{highscores_board}</Text>
        </View>
        {!!score && <GameOverModal
          onCloseModal={onCloseModal}
          isVisible={isVisibleModal}
          currentScore={score}
        />}
        <HighscoresBoard scoreList={scoreList} />
        <View style={styles.bottomContainer}>
          <Button onPress={resetGame} text={new_game} style={styles.button} />
        </View>
      </View>
    </>
  );
};

export default GameOver;
