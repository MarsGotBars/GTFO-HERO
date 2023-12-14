import { useEffect, useState } from 'react';
import { Welcome } from './screen/Welcome';
import { Randomization } from './screen/Randomization';
import { Overlay } from './screen/Overlay';
import { Randomized } from './component/Randomized';


function App() {
  // first bool is for development only
  const [welcome, setWelcome] = useState(true)
  const [stopWelcome, setStopWelcome] = useState(false)
  useEffect(()=>{
    // get localstorage key and set to setWelcome
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      
    }, 5000);
    setStopWelcome(false)
  }, [])
  return (
    <main className="App">
        <Overlay/>
        {welcome === true && stopWelcome === false && <Welcome/>}
        <Randomized/>
        {/* <Randomization/> */}
    </main>
  );
}

export default App;
