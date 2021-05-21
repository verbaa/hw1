import './App.css';

import {directoriesData} from "./directories";
import {Direct} from "./Direct";
import {News} from "./News";

function App() {
    return (
        <div className="App">
            <Direct items={directoriesData}></Direct>
            <News/>
        </div>
    );
}

export default App;
