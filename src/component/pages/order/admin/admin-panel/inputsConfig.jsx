import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro, MdTitle } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import { GoMegaphone } from 'react-icons/go';
import { isAvailableOptions, isPublicisedOptions } from '../../../../../enum/productSelect';

export const getInputTextsConfig = (product) => [
    {
        id: "0",
        name: "title",
        value: product.title,
        placeholder: 'Nom du produit',
        Icon: <MdTitle />,
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
    }]


export const getInputSelectConfig = (product) => [
    {
        id: "3",
        name: "isAvailable",
        value: product.isAvailable,
        options: isAvailableOptions,
        Icon: <FiPackage />,
        className: "is-available",
    },
    {
        id: "4",
        name: "isPublicised",
        value: product.isPublicised,
        options: isPublicisedOptions,
        Icon: <GoMegaphone />,
        className: "is-publicised",
    },
]

