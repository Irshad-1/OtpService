import "./App.css";
import React from "react";
import { OtpValidate } from "./Components/OtpValidate";
import { OtpGenerate } from "./Components/OtpGenerate";

function App() {
  const [state, setState] = React.useState("true");
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg")`,
      }}
    >
      {state ? <OtpGenerate setState={setState} /> : <OtpValidate />}
    </div>
  );
}

export default App;
