import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  background-color: #9DBF9E;
  position: relative;
`;

export const Background = styled(motion.div)`
  /* clip-path: circle(76.7% at  74% 33%); */
  clip-path: circle(90% at 99% );
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
`;

export const MainCenter = styled.div`
  width: 75vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrap = styled.div``;

export const Heading = styled.span`
  text-align: center;
  color: #2C0735;
  margin-bottom: 2rem;
  letter-spacing: .1rem;
  text-transform: uppercase;
  display: block;
  font-size: 1.25rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #696D7D;
  border-radius: .25rem;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: .1rem;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  height: 2rem;
  padding: .25rem .5rem;
  font-size: .875rem;
  color: #2C0735;
  border-radius: .25rem;
  border: none;
  outline: none;
`;

export const ErrorMessage = styled.span`
  text-align: center;
  color: #a73d3a;
  font-size: .875rem;
  letter-spacing: .1rem;
  font-weight: 700;
  margin-bottom: .5rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.span`
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #fff;

  .signin-link{
    color: #e19374;
    margin-left: .25rem;
    text-transform: lowercase;

    &:hover{
      color: #FAA381;
    }
  }
`;