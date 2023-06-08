import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IHeader {
  isScrolled: boolean;
  isScrollTop: boolean;
}
export default function Header() {
  const [scroll, setScroll] = useState<IHeader>({
    isScrolled: false,
    isScrollTop: true,
  });

  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScroll(prevState => {
        if (scrollTop === 0) {
          return { ...prevState, isScrollTop: true };
        } else if (scrollTop > lastScrollTop && scrollTop > 0) {
          return { ...prevState, isScrolled: true };
        } else {
          return { isScrollTop: false, isScrolled: false };
        }
      });

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const scrollTop = window.pageYOffset;
    if (scrollTop === 0) {
      setScroll({ isScrollTop: true, isScrolled: false });
    }
    setLastScrollTop(scrollTop);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderStyles
      className={scroll.isScrolled ? 'isHidden' : ''}
      scroll={`${scroll.isScrolled}`}
    >
      <HeaderContainer>
        <HeaderLogoContainer>
          {/* <div onClick={scrollToTop}>홈으로</div> */}
          <Link to="/" onClick={scrollToTop}>
            All Coin Chart
          </Link>
        </HeaderLogoContainer>
      </HeaderContainer>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header<{ scroll: string }>`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  z-index: 99999;

  ${({ scroll }) =>
    scroll === 'true'
      ? css`
          background-color: transparent;
        `
      : css`
          ${props => props.theme.DarkBlur}
        `}
  &.isHidden {
    transform: translateY(-100%);
    border: none;
  }
`;
const HeaderContainer = styled.div`
  ${props => props.theme.FlexRow};
  ${props => props.theme.FlexCenter};
  width: 100%;
  padding: 0 1rem;
`;
const HeaderLogoContainer = styled.div`
  flex: 0 0 auto;

  div {
    ${props => props.theme.CursorActive};
  }
  a {
    font-weight: 900;
    font-size: 1.2rem;
    transition: 0.1s ease-in;
    &:hover {
      color: ${props => props.theme.accentColor};
    }
  }
`;
