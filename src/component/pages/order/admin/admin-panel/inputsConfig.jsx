import {FaHamburger} from 'react-icons/fa';
import {BsFillCameraFill} from 'react-icons/bs';
import {MdOutlineEuro} from 'react-icons/md';

export const getInputsConfig = (newProduct) =>  [
{
    id : "0",
    name: "title", 
    value: newProduct.title,
    placeholder: 'Nom du produit', 
    Icon: <FaHamburger />, 
},
{
    id : "1",
    name: "imageSource", 
    value: newProduct.imageSource,
    placeholder: "Lien URL d'une image", 
    Icon: <BsFillCameraFill />, 
},
{
    id : "2",
    name: "price", 
    value: newProduct.price ? newProduct.price : "",
    placeholder: "Prix", 
    Icon: <MdOutlineEuro />, 

}]