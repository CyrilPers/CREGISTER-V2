import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Profil from './Profile';
import ToggleButton from '../reusable-ui/ToggleButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserSecret} from 'react-icons/fa'
import Toast from '../reusable-ui/Toast';
import AdminContext from '../../context/AdminContext';



export default function NavbarUser() {

  const {isModeAdmin, setIsModeAdmin} = useContext(AdminContext)

  const notifyAdminMode = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }

  
  return (
    <NavbarUserStyled> 
        <ToggleButton
          isChecked={isModeAdmin}
          labelIfChecked='DÉSACTIVER LE MODE ADMIN' 
          labelIfUnchecked='ACTIVER LE MODE ADMIN'
          onToggle={notifyAdminMode}
        />
        <Profil />
        <Toast />
    </NavbarUserStyled>
  )
}

const NavbarUserStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
`;