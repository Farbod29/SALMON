import React, { Component } from "react";
import PdfAnnotator2 from "./component/pdfAnnotator/PdfAnnotator";

class App extends Component<Props, State> {

  render() {
    return (
      <div>
        <PdfAnnotator2 />
      </div>
    );
  }
}

export default App;
