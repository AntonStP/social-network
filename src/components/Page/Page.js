import {Routes, Route} from "react-router-dom";
import PageProfile from "../PageProfile/PageProfile";
import PageDialogs from "../PageDialogs/PageDialogs";
import PageNews from "../PageNews/PageNews";
import PageMusic from "../PageMusic/PageMusic";
import PageSettings from "../PageSettings/PageSettings";

function Page({state}) {

    return (
        <div className={'page'}>
            <Routes>
                <Route path={'/'} element={<PageProfile posts={state.posts}/>}/>
                <Route path={'/dialogs/*'} element={<PageDialogs dialogs={state.dialogs}/>}/>
                <Route path={'/news'} element={<PageNews/>}/>
                <Route path={'/music'} element={<PageMusic/>}/>
                <Route path={'/settings'} element={<PageSettings/>}/>
            </Routes>
        </div>
    );
}

export default Page;
