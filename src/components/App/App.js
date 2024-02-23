import './App.scss';
import Header from "../baseComponents/gui/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
  );
}

export default App;
