import React from "react";
import ListItemLabels from "./ListItemLabels";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';


function ListItem({getData}) {
  //console.log(listData);

  return (
    <div className="ListItem mt-4 text-dark d-flex align-items-center justify-content-between">
    
        <div className="form-check form-check-inline">
            <input className="form-check-input mr-3" type="radio" name="inlineRadioOptions" id={getData.id} value={getData.id}/>
            <label className="form-check-label" htmlFor={getData.id}>{getData.title}</label>
        </div>
        <ListItemLabels getData={getData}></ListItemLabels>
     </div>
     
  );
}

export default ListItem;
