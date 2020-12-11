import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import ListItem from "./ListItem";

const ListItemStyled = styled.span`
    width: 10px;
    height: 10px;
    background-color: #333;
`;

function TodoList() {

    const { data } = useSelector(state => state.dataReducer);
    
    const sortData=()=>{
        data.sort((a, b) => (a.title > b.title) ? 1 : -1)
   
        data.forEach((data , i)=>{
           data.id= i;
            //console.log(data);
        })  
      }
      sortData();

      
  return (
    <div className="List mt-4 pt-4">

        {
           
            data.map((getData,i)=>(
               
                <ListItem  getData={getData} key={i} ix={i}/>
                
            ))
        }

    </div>
     
  );
}

export default TodoList;
