import React from "react";
import styled from 'styled-components';
import FormCheckbox from './FormCheckbox';
import { useSelector, useDispatch } from 'react-redux';

const DivTransition = styled.div`
    box-shadow: 3px 3px 10px 10px rgba(0, 0, 0, 0.2);
    transform: ${({opened})=> opened ? 'translateY(0%)': 'translateY(120%)'} ;
    transition: ${({opened})=> opened ? 'transform 250ms ease-in-out':'transform 250ms ease-in-out'};
`;
function AddNewTodo() {

  const { isOpened } = useSelector(state=>state.rootReducer);
  const dispatch = useDispatch();

  const CloseNewTodoHandler = ()=>{
    dispatch({
      type: 'CANCEL_NEW_TODO',
      payload: {
      }
  })
  }
  return (
    
    <DivTransition className="addNew position-fixed p-4" opened={isOpened}>
      <h4 className="pt-4">Add new Todo</h4>
      <div className="form-buttons">
        <button id="saveButton" className="rounded-circle btn btn-primary btn-lg bg-success text-white mr-2">
          +
        </button>
        <button id="cancelButton" onClick={CloseNewTodoHandler} className="rounded-circle btn btn-primary btn-lg bg-danger text-white">
            -
        </button>
      </div>

       <form action="">
        <div className="form-group">
            <label htmlFor="title">Título</label>
            <input type="text" className="form-control"/>
            <small id="" className="form-text text-muted text-right w-100">0 / 250 caracteres</small>
        </div>

        <div className="form-group">
            <label htmlFor="title">Fecha y hora</label>
            <input type="text" className="form-control" placeholder="DD/MM/YY - hh:mm"/>
        </div>

        <label htmlFor="title w-100">Categorías</label>
       
        <div className="form-group pl-1">
            <FormCheckbox color="#219653" value="option1"/>
            <FormCheckbox color="#6FCF97" value="option2"/>
            <FormCheckbox color="#ffc107" value="option3"/>
            <FormCheckbox color="#F2994A" value="option4"/>
            <FormCheckbox color="#EB5757" value="option5"/>
            <FormCheckbox color="#E54B95" value="option6"/>
            <FormCheckbox color="#BB6BD9" value="option7"/>
            <FormCheckbox color="#57B0E2" value="option8"/>
            
        </div>
      </form>
    </DivTransition>
    
  );
}

export default AddNewTodo;
