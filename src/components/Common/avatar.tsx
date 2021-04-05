import React from 'react';
import styled from 'styled-components';
/*
  Componentes styles
*/
interface Props {
  size: number;
}
const AvatarSize = styled.button<Props>`
  height: 48px;
  display: flex;
  position: relative;
  display: flex;
  outline: none;
  cursor: pointer;
  width: fit-content;
  border-radius: 32px;
  align-items: center;
  text-decoration: none;
  font-weight: normal;
  white-space: normal;
  padding: 12px 24px;
  border: 1px solid ${(p) => p.theme.colors.black};
  background-color: ${(p) => p.theme.colors.primary.main};
  color: ${(p) => p.theme.colors.black};
  font-weight: bold;
  :hover {
    border: 1px solid ${(p) => p.theme.colors.primary.main};
    background-color: ${(p) => p.theme.colors.black};
    color: ${(p) => p.theme.colors.primary.main};
    -webkit-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
    -moz-box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
    box-shadow: 0px 0px 18px -7px rgba(105, 222, 163, 1);
  }
`;

/*
  Componentes props
*/
/*
  MAIN
  @TEX
*/
const Avatar: React.FC<Props> = ({ size }: Props) => (
  <AvatarSize size={size}>Seu perfil</AvatarSize>
);

export default Avatar;
