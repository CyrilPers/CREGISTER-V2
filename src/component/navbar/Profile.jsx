import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from '../../theme';
import { BsPersonCircle } from "react-icons/bs"

export default function Profil() {

  const { username } = useParams();

  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link className="link" to="/">
          <div className="description">
            <small>Déconnexion</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled >
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  margin-left: 50px;

  .info {
    margin-right: 10px;
    display: column;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};

      b {
        color: ${theme.colors.primary};
      }
    }

    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }

        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
        }
      }
    }
  }

  .description{
    display: flex;
  }


  .picture {
    height: auto;
    display: flex;
    height: 100%;
    width: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }

  @media (max-width: 767px) {
    padding: 0;
    margin-left: 0;

    
    .info {
    text-align: left;
    margin-right: 5px;
    margin-left: 20px;
    align-items: center;

    a {
      .description {
        small {
          font-size: ${theme.fonts.size.XS};
        }
      }
    }
  }
  }

  @media(min-width: 768px) and (max-width: 1388px) { 
    padding: 0;
    max-width: 100%
    }
`;

