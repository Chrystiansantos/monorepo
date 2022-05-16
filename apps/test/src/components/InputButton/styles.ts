import styled from 'styled-components';

export const Container = styled.div``;

export const Label = styled.label``;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-top:0.25rem;
  border:1px solid #ddd;
`;

export const LabelInput = styled.span`
  padding: 0.25rem 0.5rem;
`;

export const Input = styled.input`
  border:none;
  height: 100%;
  outline: none;
  flex: 1;
`;

export const Button = styled.button`
  height: 100%;
  padding: 0.45rem 0.5rem;
  background: transparent;
  border: none;
  border-radius: 4px;
  border-left: 1px solid #ddd;
  cursor:pointer;
`