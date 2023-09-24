import { MdModeEditOutline } from 'react-icons/md'
import { AiOutlinePlus } from "react-icons/ai"
import EditForm from './admin-panel/EditForm'
import AddForm from './admin-panel/AddForm'
import HintMessage from './admin-panel/HintMessage.jsx'
import CategoryAddForm from './admin-panel/category/CategoryAddForm'
import CustomerAddForm from './admin-panel/customer/CustomerAddForm.jsx'
import CustomerEditForm from './admin-panel/customer/CustomerEditForm'

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
    content: <CustomerAddForm />
  },
  {
    index: "edit",
    label: "Modifier un client",
    Icon: <MdModeEditOutline />,
    content: hasAlreadyBeenClicked ? <CustomerEditForm /> : <HintMessage element="produit" />,
  },
]


export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}