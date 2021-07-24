import WebNavBar from './components/WebNavBar.js'
import PageHeader from './components/PageHeader.js'
import Less from './components/Less.js'
import Innovate from './components/Innovate.js'
import Demo from './components/Demo.js'
import forum from "./images/forum.png"
import example from "./images/example.gif"
import clothes from "./images/clothes.gif"
import about from "./images/about.jpg"
import './App.css'
function App() {
  return (
    <div>
      <WebNavBar></WebNavBar>
      <PageHeader/>
      <Less/>
      <Innovate image={forum} id="innovate" name="Innovate" color="#6CACE4" caption="Walmart Rooms Forum"/>
      <Innovate image={example} id="explore" name="Explore" color="#66a3dc" caption="Walmart Rooms Scanning"/>
      
      <Innovate image={clothes} id="future" name="Future" color="white" caption="Walmart's Zeekit Acquisition"/>
      <Innovate image={about} id="about" name="About" color="#66a3dc" caption="Marian Abuhazi: Creator"/>
      <Demo/>
    </div>
  );
}

export default App;
