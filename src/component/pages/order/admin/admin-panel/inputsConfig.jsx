import { BsFillCameraFill, BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEuro, MdTitle } from 'react-icons/md';
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi';
import { FaCity } from 'react-icons/fa'
import { isAvailableOptions } from '../../../../../enum/productSelect';

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


export const getCustomerInputTextsConfig = (customer) => [
    {
        id: "0",
        name: "name",
        value: customer.name,
        placeholder: 'Prénom',
        Icon: <MdTitle />,
        version: "minimalist",
        className: "title",
    },
    {
        id: "1",
        name: "surname",
        value: customer.surname,
        placeholder: "Nom",
        Icon: <MdTitle />,
        version: "minimalist",
        className: "surname",
    },
    {
        id: "2",
        name: "phoneNumber",
        value: customer.phoneNumber,
        placeholder: "Téléphone",
        Icon: <BsTelephoneFill />,
        version: "minimalist",
        className: "phoneNumber",
    },
    {
        id: "3",
        name: "streetNumber",
        value: customer.address.streetNumber ? customer.address.streetNumber : "",
        placeholder: "N° de rue",
        Icon: <AiOutlineFieldNumber />,
        version: "minimalist",
        className: "streetNumber",
    },
    {
        id: "4",
        name: "street",
        value: customer.address.street ? customer.address.street : "",
        placeholder: "Rue",
        Icon: "",
        version: "minimalist",
        className: "street",
    },
    {
        id: "5",
        name: "zipCode",
        value: customer.address.zipCode ? customer.address.zipCode : "",
        placeholder: "Code postal",
        Icon: "",
        version: "minimalist",
        className: "zipCode",
    },
    {
        id: "6",
        name: "city",
        value: customer.address.city ? customer.address.city : "",
        placeholder: "Ville",
        Icon: <FaCity />,
        version: "minimalist",
        className: "city",
    },
    {
        id: "7",
        name: "country",
        value: customer.address.country ? customer.address.country : "",
        placeholder: "Pays",
        Icon: "",
        version: "minimalist",
        className: "country",
    },
]


export const getInputSelectConfig = (product) => [
    {
        id: "3",
        name: "isAvailable",
        value: product.isAvailable,
        options: isAvailableOptions,
        Icon: <FiPackage />,
        className: "is-available",
    },
]

export const getCategoryInputTextsConfig = (category) => [
    {
        id: "0",
        name: "title",
        value: category.name,
        placeholder: 'Nom de la catégorie',
        Icon: <MdTitle />,
        version: "minimalist",
        className: "title",
    }]