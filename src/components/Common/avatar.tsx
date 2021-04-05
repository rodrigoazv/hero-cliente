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
  border: 1px solid rgb(188, 200, 214);
  background-color: rgb(255, 255, 255);
  color: rgb(32, 37, 42);
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
