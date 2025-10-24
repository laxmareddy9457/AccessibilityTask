import header from './components/header/header';
import sidenav from './components/sidenav/sidenav';
import main from './components/main/main';
import './App.css';


function App() {
  return (
    <div className="m-0 p-0 box-border">
      <div className="flex bg-black h-[100vh]  ">
        {sidenav()}
        <div className="bg-[#f0f0f0] w-full flex flex-col ">
          {header()}

          {main()}
        </div>
      </div>
    </div>
  );
}

export default App;
