import "./Components/NavigationBar";
import NavigationBar from "./Components/NavigationBar";
import Footer from './Components/Footer.jsx';
import {Route} from 'react-router-dom';
import About from './Pages/About.jsx';
import EducationPage from './Pages/EducationPage.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import ContactsPage from './Pages/ContactsPage.jsx';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Route path='/' exact component={About}/>
      <Route path='/education' exact component={EducationPage}/>
      <Route path='/projects' exact component={ProjectsPage}/>
      <Route path='/contacts' exact component={ContactsPage}/>
      <Footer/>
    </div>
  );
}

export default App;
