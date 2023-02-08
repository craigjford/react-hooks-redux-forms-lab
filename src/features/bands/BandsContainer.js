import React from "react";
import BandInput from './BandInput';
import { useDispatch, useSelector } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  
  const bands = useSelector(state => state.bands.entities)
  const dispatch = useDispatch();

  const onbandSubmit = (name) => {
    dispatch(bandAdded(name));
  }

  const bandsList = bands.map((band, idx) => {
     return <li key={idx}>{band}</li>;
  });

  return (
      <div>
        <BandInput onBandSubmit={onbandSubmit}/>
        <ul>
          {bandsList}
        </ul>
      </div> 
  );
}

export default BandsContainer;
