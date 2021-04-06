/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${(p) => p.theme.colors.secondary.main}
  height: 220px;
  width: 300px;
  display: flex; 
  flex-direction: row;
`;
const Img = styled.img`
  height: 80px;
`;
/*
  Componentes props
*/
interface Props {
  title: string;
  image: string;
  description: string;
}
/*
  MAIN
  @TEX
*/
const CardComicsChar: React.FC<Props> = ({
  title,
  image,
  description,
}: Props) => (
  <Card>
    <Img src={image} alt="none" />
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </Card>
);
export default CardComicsChar;
