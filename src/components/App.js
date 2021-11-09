import React from 'react';
import FilaFocos from './FilaFocos';
import FocoMercurial from './FocoMercurial';

function App() {
   return (
      <div id="techo">
         <FocoMercurial color="green" />
         <FilaFocos />
         <FocoMercurial color="blue" />
         <FocoMercurial />
      </div>
   );
}

export default App;
