import React, { useState } from 'react'
import { styled } from 'styled-components';
import Profil from './Profile';
import ToggleButton from '../reusable-ui/ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from '../../theme';



export default function NavbarUser({username}) {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  
  const notifyAdminMode = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
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
          labelIfChecked='DÉSACTIVER LE MODE ADMIN' 
          labelIfUnchecked='ACTIVER LE MODE ADMIN'
          onToggle={notifyAdminMode}
        />
        <Profil username={username} />
        <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarUserStyled>
  )
}

const NavbarUserStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
  
`;