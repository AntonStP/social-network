import {Routes, Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

function Page() {

    return (
        <Routes>
            <Route path={'/'} element={<Profile/>}/>
            <Route path={'/dialogs'} element={<Dialogs/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
        </Routes>
    );
}

export default Page;
