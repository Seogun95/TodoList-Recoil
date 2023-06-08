import { useCallback } from 'react';
import styled from 'styled-components';
import { TbMoonFilled } from 'react-icons/tb';
import { RiSunFill } from 'react-icons/ri';

import { useRecoilState } from 'recoil';
import { isDarkAtom } from 'atom';

export function DarkModeBtn() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const toggleDarkMode = useCallback(() => {
    setIsDark(prev => {
      localStorage.setItem('darkMode', `${!prev}`);
      return !prev;
    });
  }, [setIsDark]);

  return (
    <>
      <Toggle onClick={toggleDarkMode}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </Toggle>
    </>
  );
}

const Toggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  padding: 0;
  font-size: 1.6rem;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.bgColorDeep};
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.2rem 0.75rem rgba(10, 10, 10, 0.3);
  }
  &:active {
    background-color: ${props => props.theme.bgColor};
    box-shadow: 0 0.1rem 0.5rem rgba(10, 10, 10, 0.2);
  }
`;

const SunIcon = styled(RiSunFill)`
  color: #e6ba0a;
`;

const MoonIcon = styled(TbMoonFilled)`
  color: #e6ba0a;
`;
