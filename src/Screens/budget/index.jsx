import React from 'react';
import Pdf from 'react-to-pdf';

// components
import TemporaryDrawer from '../../Components/drawer-menu';

const ref = React.createRef();

function Budget() {
  return (
    <div>
      <TemporaryDrawer />
      <div className="App">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button type="button" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
        <div ref={ref}>
          <h1>Orçamento Biochar Brasil Industria de insumos agricolas LTDA</h1>
          <h2>1000kg</h2>
        </div>
      </div>
    </div>
  );
}

export default Budget;
