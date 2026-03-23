'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: radial-gradient(302% 60% at 0 100% ,#999999, #6C5CE7, #000000  90%);
  color: white;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  padding: 0 2em;
  overflow: hidden;
  height: 20em;

  .preloader-icon {
    font-size: 25em;
    // width: 25em;
   // height: 25em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;

    div {
      font-weight: 600;
      font-size: 200px;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    height: 8rem;
    
    .preloader-icon {
      font-size: 7rem;
      width: 100px;
      height: 100px;
    }

    div {
      div {
        font-size: 40px;
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: #5444d1d7;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
