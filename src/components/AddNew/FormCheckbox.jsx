import React from "react";
import styled from 'styled-components';

const CheckboxStyled=styled.input`
    background-color: ${(props)=> `${props.color}`};
`;
function FormCheckbox(props) {


  return (
     <div className="form-check form-check-inline">
        <CheckboxStyled color={props.color} type="checkbox" className="form-check-input " value={props.value}/>
    </div>
           
     
  );
}

export default FormCheckbox;
