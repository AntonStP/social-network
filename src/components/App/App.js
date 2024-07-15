import './App.scss';
import Header from "../baseComponents/gui/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import {BrowserRouter as Router} from "react-router-dom";
import Page from "../Page/Page";
import {content} from "../../constants/copyright";
import store from "../../redux/state";

function App() {
    const {header, sidebar} = content;


    return (
        <Router>
            <div className="app">
                <Header {...header}/>
                <div className={'page'}>
                    <Page {...content} state={store.getState()}/>
                </div>
                <Sidebar {...sidebar}/>
            </div>
        </Router>
    );
}

export default App;
