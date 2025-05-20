import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackgroundGradient = styled.div`
  background-image: linear-gradient(0deg, var(--color-background), transparent);
  width: 100%;
  bottom: 0;
  left: 0;
  height: 128px;
  position: fixed;
  z-index: 100;
`;

export const NavBar = styled.nav`
  position: fixed;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 400px;
  background: var(--color-secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-radius: 50px;
  box-shadow: 0 4px 12px var(--color-shadow);
`;

export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-primary);
  text-decoration: none;
  font-size: 12px;
  width: max-content;

  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;

    svg {
      font-size: 20px;
      color: #fff;
    }
  }
  &.plus {
    div {
      width: 45px;
      aspect-ratio: 1;
      transform: scale(1.5);
      height: auto;
      margin-bottom: 0;
      position: relative;
      bottom: 22px;
      background: var(--color-primary);
      z-index: 101;
      border-radius: 50%;

      svg {
        font-size: 25px;
        color: var(--color-secondary);
      }
    }
  }

  &.active:not(.plus) {
    background-color: var(--color-white);
    border-radius: 50%;
    height: 50px;

    svg {
      color: var(--color-primary);
    }
  }
`;
