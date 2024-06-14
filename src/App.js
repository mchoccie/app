import './App.css';
import Navbar from './navbar'
import Experience from './experience'
import Typewriter from 'typewriter-effect'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div id="root">
    <div className="container">
      <Navbar></Navbar>
      
      <div id='intro' className='intro'>
        <h1 className="Name">
        {'> hi,'}&nbsp;
        <span style={{ color: '#6FFFE9' }}>manan</span>
        &nbsp;{'here'}
      
        </h1>
      </div>
      <div id='descrip' className='descrip'>
        <h3 className="shortDescrip"><Typewriter className='shortDescrip'
          options={{strings: ['i like to make things.', 'aspiring machine learning engineer', 'aspiring software engineer'], autoStart: true, loop: true}}
        /></h3>
        
        
      </div>

      <div id='littleaboutme' className='littleaboutme'>
      <h4 className="littleaboutmedescr">I'm an aspiring software engineer from San Jose. I'm fascinated by all things AI with a strong interest in NLP and reinforcement learning. I'm interested in exploring the intersection of developing software applications embedded with AI capabilities.</h4>
      </div>

      <div id='aboutme' className="aboutme">
        <h1 className="aboutme-title">{'> About Me'}</h1>
      </div>
      <div id='experience' className="experience">
        <h1 className="experience-title">{'> Experience'}</h1>
        <Experience></Experience>
      </div>
      <div id='projects' className="projects">
        <h1 className="projects-title">{'> Projects'}</h1>
        
      </div>
      
    </div>
    </div>
  );
}

export default App;
