import styled from 'styled-components';

const CustomSVG = styled.object`
  width: 25px;
  cursor: pointer;
  color: aliceblue;
  display: inline-block;
  background-size: cover;
  filter: saturate(0%);

  :hover {
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(158deg) brightness(110%) contrast(80%);
  }
`;

export default CustomSVG;
