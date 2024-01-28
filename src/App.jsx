// import React from 'react';
// import Example from './Components/Example/Example';
// import Dashbord from './Components/Dashbord/Dashbord';
import Navbar from './Components/Navbar/Navbar';
import Phonbar from './Components/Phonbar/Phonbar';
import Prices from './Components/Prices/Prices';
import Rechart from './Components/Rechart/Rechart';
const App = () => {

  return (
    <div>
      <Navbar></Navbar>

      <Prices></Prices>
      {/* <Dashbord></Dashbord> */}
      <Rechart></Rechart>
      <Phonbar></Phonbar>
      {/* <Example></Example> */}
    </div>
  );
};

export default App;