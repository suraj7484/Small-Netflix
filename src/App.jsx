import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const ncard = val => {
  return(
    <Card 
      key = {val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};

const App = () =>(
  <>
    <div className = "heading">
      <h5>Top Five Movies Of All Time</h5>
    </div>
    
    {Sdata.map(ncard)}
  </>
);


export default App;
