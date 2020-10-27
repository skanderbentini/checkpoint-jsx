import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import imageInSrc from './imageInSrc.jpg'
function App() {
  return (
    <div class="first">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">Skander</h1>
          <br/>
          <img src={imageInSrc} alt ='imageInSrc' />
          <br/>
          <img src="/imageInPublic.jpg" alt ='imageInPublic' />
        </div>
        <video controls width={673.5} height={449.7}>
          <source src="/astro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
export default App;
