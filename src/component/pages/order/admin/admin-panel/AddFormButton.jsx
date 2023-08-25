import React, { Fragment } from 'react'
import Button from '../../../../reusable-ui/Button'
import SubmitMessage from './SubmitMessage'
import { styled } from 'styled-components';

export default function AddFormButton({ isSubmitted }) {
    return (
        <>
            <Button
                className='submit-button'
                label="Ajouter le produit"
                version="success"
            />
            {isSubmitted && <SubmitMessage />}
        </>

    )
};