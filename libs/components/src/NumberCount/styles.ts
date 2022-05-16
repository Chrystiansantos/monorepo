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

export const ContaierInput = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr) ;
  width: 100%;
  height: 30px;
  margin-top: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem ;
  align-items:center;

  Span{
    text-align:center;
    color:#959595
  }
`;

export const IconMath = styled.button`
 text-align:center;
 color:#959595;
 height: 100%;
 border: none;
 font-size: 1.5rem;
 background-color: transparent;
`

export const Number = styled.span``