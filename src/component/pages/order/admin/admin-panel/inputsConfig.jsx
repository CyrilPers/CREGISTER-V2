import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export const getInputsConfig = (product) => [
    {
        id: "0",
        name: "title",
        value: product.title,
        placeholder: 'Nom du produit',
        Icon: <FaHamburger />,
        version: "minimalist",
        className: "title",
    },
    {
        id: "1",
        name: "imageSource",
        value: product.imageSource,
        placeholder: "Lien URL d'une image",
        Icon: <BsFillCameraFill />,
        version: "minimalist",
        className: "imageSource",
    },
    {
        id: "2",
        name: "price",
        value: product.price ? product.price : "",
        placeholder: "Prix",
        Icon: <MdOutlineEuro />,
        version: "minimalist",
        className: "price",
        // {
        //     id: "3",
        //     name: "isAvailable",
        //     value: product.price ? product.price : "",
        //     placeholder: "Prix",
        //     Icon: <MdOutlineEuro />,
        //     version: "minimalist",
        //     className: "is-available",
        // },
        // {
        //     id: "2",
        //     name: "price",
        //     value: product.price ? product.price : "",
        //     placeholder: "Prix",
        //     Icon: <MdOutlineEuro />,
        //     version: "minimalist",
        //     className: "price",
    }]