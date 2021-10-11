import React, { Suspense, useState } from "react";
import "./App.scss";
import Layout from "layout/index";
import { Spinner } from "components/spinner";

//code-splitting
const MoodBox = React.lazy(() => import("pages/moodbox"));
const MoodHistory = React.lazy(() => import("pages/moodhistory"));

export interface IData {
  moodName: string;
  moodBgColor: string;
  moodBorderColor: string;
  message: string;
  emoji: string;
  date?: string;
  time?: string;
}

const centerLoadingIcon = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  const [history, setHistory] = useState<any>([]);
  const [moodTracker, setMoodtracker] = useState<any>([]);

  const trackMood = (moodData: IData) => {
    //remove previous moods from array
    setMoodtracker([]); // uncomment to add multiple moods
    setMoodtracker((moodTracker: any) => [...moodTracker, moodData]);
  };

  const AddMoodToHistory = () => {
    let reversedMoods: IData[];
    //make the latest moods appear first
    reversedMoods = [...moodTracker].reverse();
    //create a history of moods selected
    setHistory((history: any) => [...reversedMoods, ...history]);
    //reset the tracked moods
    setMoodtracker([]);
  };

  return (
    <Layout>
      <Suspense
        fallback={
          <div style={centerLoadingIcon}>
            <Spinner />
          </div>
        }
      >
        <MoodBox
          addMood={trackMood}
          save={AddMoodToHistory}
          selectedMood={moodTracker}
        />
        <MoodHistory moodHistory={history} />
      </Suspense>
    </Layout>
  );
}

export default App;
