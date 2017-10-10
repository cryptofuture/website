import styled from 'styled-components';
import { Button, PrimaryButton } from '../components/buttons';

/**
 * 1. Create new stacking context: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
 */

export const Title = styled.h2`
  font-size: 72px;
  font-weight: 900;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  padding: 0 80px;
  overflow: hidden;
  transform: translate3d(0, 0, 0); /* 1 */

  ${Title} {
    margin: 0;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    margin: 0.5em 0;
  }

  &::before {
    content: '';
    position: absolute;
    right: 46%;
    top: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(20deg, #ff9000, 50%, #ff9000, 80%, #fece00);
    transform: rotate(10deg);
    transform-origin: right top;
    z-index: -1;
  }
`;

export const Left = styled.div`
  font-size: 36px;
  width: 27%;
`;

export const Right = styled(Left)`
  color: #fbbf02;
  text-align: right;
`;

export const LeftButton = styled(Button)`
  font-size: 12px;
`;

export const RightButton = styled(PrimaryButton)`
  font-size: 12px;
`;

export const Footer = styled.p`
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);

  a {
    text-decoration: none;
  }
`;
