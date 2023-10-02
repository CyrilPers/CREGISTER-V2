import React from "react"
import { MdDeleteForever } from "react-icons/md"
import { formatPrice } from "../../../../../utils/maths"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import CasinoEffect from "../../../../reusable-ui/CasinoEffect"



export default function BasketCard({
  productName,
  productPrice,
  quantity,
  imageSource,
  className,
  onDelete,
}) {
  return (
    <BasketCardStyled className={className}>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={productName} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{productName}</span>
          </div>
          <span className="price">{formatPrice(productPrice)}</span>
        </div>
        <div className="quantity">
          <span>x</span> <CasinoEffect count={quantity} />
        </div>
      </div>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`


  box-sizing: border-box;
  height: 86px;
  padding: 5px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  margin: 10px 15px;
  height: 85px;
  box-sizing: border-box;
  

  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;

    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 70% 40%;
      margin-left: 10px;

      .title {
        display: flex;
        align-items: center;
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        min-width: 0;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.medium};
        font-family: ${theme.fonts.family.openSans};
      }
    }

    .quantity {
      box-sizing: border-box;
      font-weight: ${theme.fonts.weights.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${theme.fonts.size.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
        &:active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
  @media(max-width: 767px) {
    padding: 5px 10px;
    margin: 5px 10px;  
    height: 56px;

  .delete-button {
      z-index: 1;
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;
      &:active {
        .icon {
          color: ${theme.colors.white};
        }
      }
    }

    .image {
    box-sizing: border-box;
    height: 50px;

      img {
        padding: 5px;
      }
    }
    .text-info {
    .left-info {
      .title {
        span {
        }
      }
      .price {
        margin-top: -5px;
      }
    }
    .quantity {
      margin-right: 60px;
    }
  }
}
`