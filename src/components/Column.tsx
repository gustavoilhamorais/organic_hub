import styled from "styled-components";

interface ColumnProps {
    width?: string;
    top?: string;
    left?: string;
    bottom?: string;
}

const Column = styled.div`
  position: absolute;
  width: ${(props: ColumnProps) => props.width || "100%"};
  top: calc(100vh - ${(props: ColumnProps) => props.top || 0});
  left: calc(100vh - ${(props: ColumnProps) => props.left || 0});
  bottom: calc(100vh - ${(props: ColumnProps) => props.bottom || 0});
`;

export default Column;
