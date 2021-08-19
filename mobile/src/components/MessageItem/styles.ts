import styled, { css } from 'styled-components/native';

interface IProps {
  readed: boolean;
}

export const Container = styled.TouchableOpacity`
  background-color: #1f1e25;
  padding: 15px;
  border-radius: 10px;
  margin-top: 5px;
`;

export const Subject = styled.Text<IProps>`
  margin-bottom: 10px;
  color: #666;

  ${({ readed }) =>
    !readed &&
    css`
      color: #fff;
      font-weight: bold;
    `}
`;

export const DateTime = styled.Text<IProps>`
  text-align: right;
  font-size: 10px;
  color: #666;

  ${({ readed }) =>
    !readed &&
    css`
      color: #fff;
      font-weight: bold;
    `}
`;
