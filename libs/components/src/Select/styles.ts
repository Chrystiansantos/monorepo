import styled, { css } from 'styled-components';

interface IInputProps {
  required: boolean;
}

interface IInfoProps {
  textInfo: string;
}

export const Container = styled.div`
  display:grid;
`;

export const ContainerLabel = styled.div`
  display: flex;
  align-items: end;
`

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

export const SelectStyle = styled.select`
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

export const TextInfo = styled.span`
  display:none;
`;

export const Info = styled.span<IInfoProps>`
  margin-left: 5px;
  background: #979797;
  color: #fff;
  width: 16px;
  height: 16px;
  text-align: center;
  border-radius: 50%;
  font-size: 12px;
  position: relative;

  &:hover::after{
  content: '${({ textInfo }) => textInfo}';
  position: absolute;
  bottom: 20px;
  right: -115px;
  width: 230px;
  border: 1px #aaaaaa solid;
  border-radius: 8px;
  background-color: #979797;
  padding: 12px;
  color: #fff;
  font-size: 14px;
  }
`;
