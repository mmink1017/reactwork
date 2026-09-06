import React from "react";
import A_DynamicImport from "./A_DynamicImport";
import B_ReactLazyText from "./B_ReactLazyText";

export default function CodeSplitContainer() {
  return (
    <div>
      <A_DynamicImport />
      <B_ReactLazyText/>
    </div>
  );
}
