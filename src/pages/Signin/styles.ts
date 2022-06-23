import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  background-color: #9DBF9E;
`;

export const Background = styled(motion.div)`
  /* clip-path: circle(400px at 98px 180px); */
  clip-path: circle(80% at 12% 25%);
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;

  @media (min-width: 1000px){
    clip-path: circle(80% at 22% 25%);
  }

`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`;

export const MainCenter = styled.div`
  width: 90vw;
  height: 100%;
  margin: auto;
  max-width: 1100px;
  justify-content: center;
  display: flex;
  // align-items: center;
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
  font-size: 1rem;
  color: #fff;
  letter-spacing: .1rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  font-size: .875rem;
  padding: .25rem .5rem;
  border-radius: .25rem;
  border: none;
  margin-bottom: 1rem;
  outline: none;
  color: #2C0735;
`;

export const ErrorMessage = styled.span`
  text-align: center;
  color: crimson;
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

  .signup-link{
    color: #e19374;
    margin-left: .25rem;
    text-transform: lowercase;

    &:hover{
      color: #FAA381;
    }
  }
`;
