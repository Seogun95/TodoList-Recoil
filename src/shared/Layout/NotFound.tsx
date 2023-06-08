import React, { useEffect } from 'react';
import styled from 'styled-components';
import error from 'assets/svg/error.svg';
import { Link } from 'react-router-dom';

export function NotFound() {
  useEffect(() => {
    const originalStyle = {
      overflow: document.documentElement.style.overflow,
      background: document.body.style.background,
    };

    document.documentElement.style.overflow = 'hidden';
    document.body.style.background = '#191919';

    return () => {
      document.documentElement.style.overflow = originalStyle.overflow;
      document.body.style.background = originalStyle.background;
    };
  }, []);

  return (
    <Container>
      <Image src={error} alt="Awesome Image" />
      <Heading>페이지를 찾을 수 없습니다.</Heading>
      <Message>URL을 다시 확인해주세요.</Message>
      <Button to="/">
        <HomeLink>홈으로 이동</HomeLink>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  color: #e6e6e6;
`;

const Heading = styled.h2`
  margin: 0 0 0.625rem;
  padding-bottom: 0.625rem;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
`;

const Message = styled.p`
  margin: 0;
`;

const Button = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1.875rem;
  color: white;
  font-weight: 700;
  overflow: hidden;
  background: none;
  margin-top: 1rem;
  border-radius: 3.125rem;
  padding: 0.3125rem 1.125rem;
  text-transform: uppercase;
  background-color: #ff725d;
  transition: all 0.4s;
  text-decoration: none;
  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.4s;
    transform: scale(0.2, 1);
    background-color: #fe553c;
  }

  &:hover:before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &:hover {
    color: white;
  }
`;

const HomeLink = styled.span`
  position: relative;
  z-index: 1;
`;
