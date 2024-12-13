import { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './component/loginPage/loginPage';
import TopBanner from './component/topbanner/TopBanner';
import Appointment from './component/Appointment/Appointment';

function App() {
  const [loggedinUserInfo, setLoggedinUserInfo] = useState();
  const [isLoggedin, setLoggedin] = useState(false);
  useEffect(() => {
    let result = JSON.parse(localStorage.getItem('userInfo'));
    if (result) {
      setLoggedinUserInfo(result);
      setLoggedin(result.isLoggedIn);
      console.log(isLoggedin);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setLoggedinUserInfo('');
    setLoggedin(false);
  };

  return (
    <>
      <TopBanner
        loggedinUserInfo={loggedinUserInfo}
        handleLogout={handleLogout}
      />
      {isLoggedin ? (
        <>
          <Appointment loggedinUserInfo={loggedinUserInfo} />
        </>
      ) : (
        <>
          <LoginPage
            setLoggedin={setLoggedin}
            setLoggedinUserInfo={setLoggedinUserInfo}
          />
        </>
      )}
    </>
  );
}

export default App;
