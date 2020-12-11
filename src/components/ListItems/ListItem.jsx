import React from "react";
import ListItemLabels from "./ListItemLabels";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';


const CrossedOutStyled = styled.div`
  text-decoration: ${({crossedout})=> crossedout ? 'line-through' : 'none'};
  color: ${({crossedout})=> crossedout ? '#a5a5a5' : ''};
`;

function ListItem({getData}) {

  //const { data } = useSelector(state=>state.dataReducer);
  //const { isCrossedOut } = useSelector(state=>state.dataReducer);
  const dispatch = useDispatch();

  const overlineTodo= (e)=>{
    let p = e.target;
   let ind= p.id
    console.log(ind);
    dispatch({
      type: 'CHECK_TODO',
      payload:{
        id: ind
      }
    })
  }

  
  //console.log(listData);

  return (
    <CrossedOutStyled onClick={overlineTodo} crossedout={getData.isDone} className="ListItem mt-4 text-dark d-flex align-items-center justify-content-between">
    
        <div  className="form-check form-check-inline">
            <input 
            className="form-check mr-3 todoCheck" 
            type="checkbox" name="inlineRadioOptions" 
            id={getData.id} value={getData.id}/>
            <label  className="form-check-label" htmlFor={getData.id}>{getData.title}</label>
        </div>
        <ListItemLabels getData={getData}></ListItemLabels>
     </CrossedOutStyled>
     
  );
}

export default ListItem;
