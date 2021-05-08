import { Button } from 'antd';
import { useEffect } from 'react';
// import './App.css';
import './profileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  useEffect(() => {
    const clc = document.querySelector(".cancel");
    const arr = document.querySelector(".arr_container");
    const left_container = document.querySelector(".left_container");

    arr.addEventListener("click", ()=>{
      arr.classList.add("active_arr");
      if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
      }
    });
    clc.addEventListener("click", ()=>{
      arr.classList.remove("active_arr");
      if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
      }
    })
  }, []);

  return (
    <div className="App">
      <div className = "main center">
        <div className = "box center ">
        {/* <div className = "collapsed_box"> */}
          <img src = "https://drive.google.com/uc?export=view&id=1E3zvxW9CmA3Y5HEeOcUHBl35-jC7VsBJ" alt=""/>
          <div>
            <p className = "user_name">Nitin Maan </p>
            <p className = "skill">Fullstack Developer</p>
          </div>
          <div className = "arr_container center">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className = "left_container off">
            <p>Skills</p>
            <div className = "skills">
              <div>React</div>
              <div>Docker</div>
              <div>Git</div>
              <div>NodeJs</div>
              <div>Kubernetes</div>
              <div>MongoDB</div>
              <div>React-Native</div>
              <div>Javascript ( ES6 )</div>
            </div>
            <div className = "icons">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className = "cancel center">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
