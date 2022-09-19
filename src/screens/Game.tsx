import React, { FC, useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { RootState } from '../redux/store';
import useSounds from '../hooks/useSound';
import { useDispatch, useSelector } from 'react-redux';
import { EPublicScreens } from '../types';
import { addNewElement } from '../redux/slices/sequenceSlice';
import { TextButton } from '../atomicComponents';
import { mColors } from '../utils';
import { translations } from '../translations';
import { restartSequence } from '../redux/slices/sequenceSlice';
import { GamePads } from '../components';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: mColors.white,
    justifyContent: 'center'
  },
  boardContainer: {
    flex: 4,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 10
  }
});

const INITIAL_SCORE = 0;
const { highscores_board } = translations.game.content

const Game: FC = ({ navigation }: any) => {
  const beep = useSounds();
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(INITIAL_SCORE);
  const userIsPlayingSequence: number[] = [];
  const currentSequence = useSelector((state: RootState) => state.userSequence.sequence);
  const buttonsAnimatedRef = [
    (useRef(new Animated.Value(1)).current),
    (useRef(new Animated.Value(1)).current),
    (useRef(new Animated.Value(1)).current),
    (useRef(new Animated.Value(1)).current)
  ];

  const initiallClean = async () => {
    dispatch(restartSequence());
  };

  const newGame = async () => {
    await initiallClean();
    setIsStarted(true);
    newSequence();
  };

  const newSequence = () => {
    const newRandomBtnIndex = Math.floor((Math.random() * 100) % 4);
    dispatch(addNewElement(newRandomBtnIndex));
  }

  const handlePress = async (btnIndex: number) => {
    userIsPlayingSequence.push(btnIndex);
    checkSequence();
    playSound(btnIndex);
  };

  const navigateToHighscore = () => {
    navigation.navigate(EPublicScreens.GAME_OVER)
  };

  const gameOver = async () => {
    setIsDisable(true);
    setIsStarted(false);
    navigation.navigate(EPublicScreens.GAME_OVER, { score })
    setScore(INITIAL_SCORE);
  };

  const checkSequence = () => {
    const playingSequenceLength = userIsPlayingSequence.length;
    if (playingSequenceLength <= currentSequence.length) {
      if (userIsPlayingSequence[playingSequenceLength - 1] !== currentSequence[playingSequenceLength - 1]) {
        gameOver();
      }
      else if (playingSequenceLength === currentSequence.length) {
        setIsDisable(true)
        setScore(prevScore => prevScore + 1);
        setTimeout(() => {
          newSequence();
        }, 700)
      }
    }
  };

  const playSound = (pressedIndex: number) => {
    beep[pressedIndex]?.play();
  };


  const animatedButton = (animated: Animated.Value) => {
    Animated.sequence([
      Animated.timing(
        animated,
        {
          toValue: 0.1,
          duration: 300,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        animated,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }
      )]
    ).start();
  }

  useEffect(() => {
    for (let i = 0; i < currentSequence.length; i++) {
      setTimeout(() => {
        animatedButton(buttonsAnimatedRef[currentSequence[i]]);
        playSound(currentSequence[i]);
        if (i === currentSequence.length - 1) {
          setIsDisable(false)
        }
      }, i * 500)
    }
  }, [currentSequence.length]);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TextButton text={highscores_board} isDisable={isDisable} onPress={navigateToHighscore} textStyle={{ alignSelf: 'center', fontSize: 18, fontFamily: 'Cochin' }} ></TextButton>
        </View>
        <View style={styles.boardContainer}>
          <GamePads buttonsAnimatedRef={buttonsAnimatedRef} isDisable={isDisable} handlePress={handlePress} isStarted={isStarted} score={score} newGame={newGame} />
        </View>
      </View>
    </>
  );
};

export default Game;
