import styled from "styled-components";

const TileLayout = styled.img`
  height: 80vh;
  max-height: 500px;
  width: 8vw;
  object-fit: cover;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: all .3s ease-in-out;
  opacity: 0.9;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  &:active {
    width: 6vw;
  }
`;

const TileExpand = styled.div`
  width: 30vw;
  border-radius: 20px;
  transition: all .3s ease-in-out;
  transform-origin: center;

  &:active {
    width: 28vw;
  }
`;

export {
    TileLayout,
    TileExpand
};
