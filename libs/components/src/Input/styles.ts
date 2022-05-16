import styled, { css } from 'styled-components';

interface IInputProps {
  required: boolean;
}

export const Container = styled.div`
  display:grid;
`;

export const Label = styled.label<IInputProps>`
  font-size: 1.5rem;
  color: #666666;
  height: 1.5rem;
  margin-top: 0.5rem;
  ${({ required }) =>
    required &&
    css`
      &:after {
       content: "*";
       color:red;
       margin:4px
      }
    `}
`;

export const Input_ = styled.input`
width: 100%;
height: 30px;
border-radius: 4px;
border: 1px solid #E8E8E8;
color: #656565;
font-size:1rem;
padding:0.25rem;
margin-top: 0.5rem;
&::placeholder{
  color:#9A9A9A;
}

`;