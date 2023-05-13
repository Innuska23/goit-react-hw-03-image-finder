import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 6px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  min-width: 180px;
  :hover,
  :focus {
  background-color: #303f9f;
}
`;