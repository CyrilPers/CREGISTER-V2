import React, { useContext } from 'react'
import { styled } from 'styled-components';
import HintMessage from './HintMessage';
import AdminContext from '../../../../../context/AdminContext';

export default function EditForm() {

  const {selectedProduct} = useContext(AdminContext)
  
  return (
    <EditFormStyled>
      <HintMessage />
      <span>{selectedProduct.title}</span>
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`
  
`;