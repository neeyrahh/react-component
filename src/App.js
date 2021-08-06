
import './App.css';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';


function App() {
  return (
    <div className="MyApp">
      <div className= "row">
        <Address/>
        <FullName/>
        <ProfilePhoto/>

      </div>


    
    </div>
  );
}

export default App;
