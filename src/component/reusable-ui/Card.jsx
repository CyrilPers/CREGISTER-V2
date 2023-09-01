import styled, { css } from "styled-components"
import { theme } from "../../theme"
import { TiDelete } from "react-icons/ti"
import { fadeInFromRight, fadeInFromTop } from "../../theme/animations"

export default function Card({
  title,
  imageSource,
  leftDescription,
  showDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  overlapImageSource,
  isOverlapImageVisible,
}) {

  return (
    <CardStyled
      className="produit"
      onClick={onClick}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
    >
      <div className="card">
        {showDeleteButton && <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
          <TiDelete className="delete-icon" />
        </button>}

        <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img src={overlapImageSource} className="overlap-image" alt="overlap" />
            </div>
          )}
          <img src={imageSource} alt={title} />
        </div>

        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
          </div>
        </div>
      </div>
    </CardStyled >
  )
}

const CardStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}

  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;
  
  .card {
  background: ${theme.colors.white};
  box-sizing: border-box;
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;
    &:hover {
      cursor: pointer;
      box-shadow: ${theme.shadows.orangeHighlight};
    }
    &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    }

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      color: ${theme.colors.primary};
      padding: 0;
      border: none;
      background: none;
      animation : ${fadeInFromRight} ${theme.animation.speed.slow};
      z-index: 2;

      .delete-icon{
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      :hover {
        color: ${theme.colors.red}
      }
      :active{
        color: ${theme.colors.primary}
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .overlap {
        .overlap-image {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fadeInFromTop} ${theme.animation.speed.slow};
          border-radius: ${theme.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }    
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: ${theme.fonts.family.stylish};
      }

      .description {
        display: flex;

        .left-description {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }
      }
    }
    ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}  
  }

  @media(max-width: 767px) {
    .card {
    width: 110px;
    height: 150px;
    padding: 5px;
    padding-bottom: 5px;
    }
    }

`
const hoverableStyle = css`
  &:hover {
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`

const selectedStyle = css`
background: ${theme.colors.primary};
  .primary-button {
  color: ${theme.colors.primary};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  transition: all 200ms ease - out;
    :hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease - out;
  }
    :active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

    &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

    &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
      :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
      :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
}

  .delete-button {
  color: ${theme.colors.white};

    :active {
    color: ${theme.colors.white};
  }
}

  .text-info {
    .description {
      .left-description {
      color: ${theme.colors.white};
    }
  }
}
`