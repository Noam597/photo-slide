import { Login } from "./components/loginpage/Login";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import styles from "./App.module.css"
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { LandingPage } from "./components/landingPage/LandingPage";
import { ErrorPage } from "./components/error/ErrorPage";

function App() {
  return (
    <div className={styles.app}>
       <Router>
      
      <Navbar/>
      <Routes>
      <Route  path="/" element={<LandingPage/>}/>
      <Route  path="/brochures" element={<Login/>}/>
      <Route  path="*"  element={<ErrorPage/>}/>
      {/* <LandingPage/> */}
      {/* <Login/> */}
       </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
