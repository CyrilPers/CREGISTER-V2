import React from 'react'
import TextInput from '../../../../../reusable-ui/TextInput';
import styled from 'styled-components';
import { getCategoryInputTextsConfig } from '../inputsConfig';

const CategoryFormInputs = React.forwardRef(({ onBlur, category, onChange }, ref) => {
    const categoryInputTexts = getCategoryInputTextsConfig(category)


    return (
        <CategoryFormInputsStyled className='input-fields'>
            {categoryInputTexts.map((input) => (
                <TextInput
                    {...input}
                    key={input.id}
                    onChange={onChange}
                    version="minimalist"
                    ref={ref && input.name === "title" ? ref : null}
                    onBlur={onBlur}
                />
            ))}
        </CategoryFormInputsStyled>
    )
})

export default CategoryFormInputs


const CategoryFormInputsStyled = styled.div`
grid-area: 1 / 2 / 4 / 5;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;
    column-gap: 8px;

    .title {
        grid-area: 1 / 1 / 2 / 4;
    }
    .imageSource{
        grid-area: 2 / 1 / 3 / 4;
    }

    @media(max-width: 767px) {
    }

`;