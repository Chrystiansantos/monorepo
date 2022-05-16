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

export const TextAreaStyle = styled.textarea`
  width: 100%;
  resize: vertical;
  margin-top: 0.5rem;
  font-size:1.5rem;
  padding: 0.5rem;

  ::placeholder{
    font-size: 1.5rem;
  }
`;