import '../CSS/Home.css';
// import SubLoginButton from '../components/subComponents/SubLoginButton';
import HomeSubCompo1 from './subComponents/HomeSubCompo1';
import HomeSubCompo2 from './subComponents/HomeSubCompo2';
import HomeSubCompo3 from './subComponents/HomeSubCompo3';

function Home() {
  return (
    <div className="home-main-container">
      <div className="main-container">
        <HomeSubCompo1></HomeSubCompo1>
      </div>
      <HomeSubCompo2></HomeSubCompo2>
      <HomeSubCompo3></HomeSubCompo3>
    </div>
  );
}

export default Home;
