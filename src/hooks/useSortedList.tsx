import { useEffect, useState } from 'react';
import { Player } from '../screens/GameOver';

export default function useSortedList(scoreList: any) {
  const [sortedScoreList, setSortedScoreList] = useState<Player[]>();

  const sortList = () => {
    const sorted = scoreList.sort(function (a: Player, b: Player) {
      return b.score - a.score
    });
    setSortedScoreList(sorted);
  }

  useEffect(() => {
    sortList();
  }, [scoreList.length]);

  return { sortedScoreList };
};
