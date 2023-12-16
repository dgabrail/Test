import React, { useEffect, useState } from 'react';
import './App.css';
import FrameOne from './components/FrameOne/FrameOne';
import { DayType } from './types';

const URL = 'https://dpg.gg/test/calendar.json'

function App() {

  const [Days, setDays] = useState<DayType[]>([]);

  const run = async () => {
    const ResponseDays: DayType[] = []
    const daysObject = await fetch(URL);
    const response = await daysObject.json();

    for (let key in response) {
      const day: DayType = {
        date: key,
        contribution: response[key],
        style: 'Vector',
      }
      ResponseDays.push(day)
    }

    setDays(ResponseDays)

  }

  useEffect(() => {
    run()
  }, []);



  return (
    <div className="App">
      <FrameOne days={Days} />
    </div>
  );
}

export default App;
