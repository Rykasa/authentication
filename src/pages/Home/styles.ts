import styled from "styled-components";
import { ButtonComponent } from "../../components/Button/styles";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #696D7D;
  padding: 4rem 0;
  position: relative;
`;

export const Main = styled.main``;

export const MainCenter = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: #2C0735;
  text-transform: capitalize;

  span{
    color: #FAA381;
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  color: #fff;
  letter-spacing: .1rem;
  display: block;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const Image = styled.img`
  width: 15rem;
`;

export const Button = styled(ButtonComponent)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

// verde - 9DBF9E
// preto - 2C0735
// cinza - 696D7D
// laranja FAA381
// vermei  96031A