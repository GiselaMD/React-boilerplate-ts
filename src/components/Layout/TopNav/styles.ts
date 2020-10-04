import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 44px;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  padding-left: 60px;
  padding-right: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const Title = styled.h1`
  margin: 0 auto;
  color: ${props => props.theme.colors.text};
`;
