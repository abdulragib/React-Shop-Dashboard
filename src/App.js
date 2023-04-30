import './App.css'
import Maindash from './components/MainDash/Maindash';
import Sidebar from './components/SideBar/Sidebar'

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
           <Sidebar/>
           <Maindash/>
        </div>
    </div>
  );
}

export default App;
