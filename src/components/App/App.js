import './App.scss';
import Header from "../baseComponents/gui/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter as Router} from "react-router-dom";
import {content} from "../../constants/copyright";
import Page from "../Page/Page";

function App() {
    const {sidebar} = content;


    return (
        <Router>
            <div className="app">
                <Header/>
                <div className={'page'}>
                    <Page/>
                </div>
                <Sidebar {...sidebar}/>
            </div>
        </Router>
    );
}

export default App;
