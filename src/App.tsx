import React, { useEffect, useRef } from "react";
import "./App.css";
import MachineRoom from "./component/MachineRoom";
function App() {
  //机房对象
  let room: MachineRoom;
  const chartRef: any = useRef(null); //创建一个DOM
  chartRef.width = window.innerWidth;
  chartRef.height = window.innerHeight;
  room = new MachineRoom(chartRef.current);

  return (
    <div className="App">
      111
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default App;
