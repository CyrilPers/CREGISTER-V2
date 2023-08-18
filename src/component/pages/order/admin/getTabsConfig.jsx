import {MdModeEditOutline} from 'react-icons/md'
import { AiOutlinePlus } from "react-icons/ai"


export const getTabsConfig = () => [

    {
      index: "add",
      label:"Ajouter un produit",
      Icon:<AiOutlinePlus />,
    },
    {
      index: "edit",
      label:"Modifier un produit",
      Icon:<MdModeEditOutline /> ,
    },
]
