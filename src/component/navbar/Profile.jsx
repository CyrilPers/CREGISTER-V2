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
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding-right: 50px;
  padding-left: 50px;

  .info {
    text-align: right;
    margin-right: 10px;

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
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }

  @media (max-width: 767px) {
    padding: 0;
    
    .info {
    text-align: left;
    margin-right: 5px;
    margin-left: 20px;

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

