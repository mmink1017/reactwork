// import "@/App.css";
import React from "react";
import A_EventContainer from "./E_event/A_EventContainer";
import C_FunctionEvent from "./E_event/C_FunctionEvent";
import PropsContainer from "./F_datamanage/PropsContainer";
import CommonContainer from "./F_datamanage/props/sample/CommonContainer";
import StateContainer from "./F_datamanage/StateContainer";
import ProductContainer from "./F_UseState/ProductContainer";

function App() {
  // return React.createElement("div", null, [
  //   A_ClassComponent.render(),
  //   B_FunctionalComponent(),
  // ]);
  return (
    <div>
      <ProductContainer />
    </div>
  );
}

export default App;
