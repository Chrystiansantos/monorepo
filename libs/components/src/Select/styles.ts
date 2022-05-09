import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #aaa;
  padding: 8px;
`;

export const Label = styled.label`
  
`;

export const SelectStyle = styled.select`

  border: 1px solid #aaa;
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;