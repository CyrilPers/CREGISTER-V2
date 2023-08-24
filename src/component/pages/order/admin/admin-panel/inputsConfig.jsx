import {FaHamburger} from 'react-icons/fa';
import {BsFillCameraFill} from 'react-icons/bs';
import {MdOutlineEuro} from 'react-icons/md';

export const getInputsConfig = (product) =>  [
{
    id : "0",
    name: "title", 
    value: product.title,
    placeholder: 'Nom du produit', 
    Icon: <FaHamburger />, 
},
{
    id : "1",
    name: "imageSource", 
    value: product.imageSource,
    placeholder: "Lien URL d'une image", 
    Icon: <BsFillCameraFill />, 
},
{
    id : "2",
    name: "price", 
    value: product.price ? product.price : "",
    placeholder: "Prix", 
    Icon: <MdOutlineEuro />, 

}]