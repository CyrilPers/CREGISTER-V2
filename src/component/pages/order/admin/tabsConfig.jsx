import {MdModeEditOutline} from 'react-icons/md'
import { AiOutlinePlus } from "react-icons/ai"
import EditForm from './admin-panel/EditForm'
import AddForm from './admin-panel/AddForm'


export const tabsConfig = [

    {
      index: "add",
      label:"Ajouter un produit",
      Icon:<AiOutlinePlus />,
      content: <AddForm />
    },
    {
      index: "edit",
      label:"Modifier un produit",
      Icon:<MdModeEditOutline /> ,
      content: <EditForm />
    }
]
