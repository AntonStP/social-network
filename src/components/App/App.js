import './App.scss';
import Header from "../baseComponents/gui/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Page from "../Page/Page";

function App() {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
      <Page/>
    </div>
  );
}

export default App;
