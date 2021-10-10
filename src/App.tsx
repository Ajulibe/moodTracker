import "./App.scss";
import { useState } from "react";
import Layout from "layout/index";
import MoodBox from "components/moodbox";
import MoodHistory from "components/moodhistory";

function App() {
  const [history, setHistory] = useState<any>([]);
  const [moodTracker, setMoodtracker] = useState<any>([]);

  const trackMood = (moodName: string) => {
    setMoodtracker((moodTracker: any) => [...moodTracker, moodName]);
  };

  console.log(moodTracker, "moodTracker");

  const AddMoodToHistory = () => {
    let reversedMoods: string[];
    //make the latest moods appear first
    reversedMoods = [...moodTracker].reverse();
    //create a history of moods selected
    setHistory((history: any) => [...reversedMoods, ...history]);
    //reset the tracked moods
    setMoodtracker([]);
  };

  console.log(history);
  return (
    <Layout>
      <MoodBox
        addMood={trackMood}
        save={AddMoodToHistory}
        selectedMood={moodTracker}
      />
      <MoodHistory moodHistory={history} />
    </Layout>
  );
}

export default App;
