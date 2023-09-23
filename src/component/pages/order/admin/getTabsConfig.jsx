import { MdModeEditOutline } from 'react-icons/md'
import { AiOutlinePlus } from "react-icons/ai"
import EditForm from './admin-panel/EditForm'
import AddForm from './admin-panel/AddForm'
import HintMessage from './admin-panel/HintMessage.jsx'
import CategoryAddForm from './admin-panel/category/CategoryAddForm'

export const getTabsConfigProduct = (hasAlreadyBeenClicked) => [

  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage element="produit" />,
  },
  {
    index: "addCategory",
    label: "Ajouter une catégorie",
    Icon: <AiOutlinePlus />,
    content: <CategoryAddForm />,
  },
]

export const getTabsConfigCustomer = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un client",
    Icon: <AiOutlinePlus />,
    content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un client",
    Icon: <MdModeEditOutline />,
    content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage element="client" />,
  },
]


export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}