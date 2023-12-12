import { Welcome } from './screen/Welcome';
import { Randomization } from './screen/Randomization';
import { Overlay } from './screen/Overlay';
import { Randomized } from './component/Randomized';
function App() {
  return (
    <main className="App">
        <Overlay/>
        <Welcome/>
        <Randomized/>
        {/* <Randomization/> */}
    </main>
  );
}

export default App;
