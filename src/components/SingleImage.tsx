import React, { useCallback } from "react";
import styled from "styled-components";

import { Image } from "../models/image";
export interface SingleImageProps {
  image: Image;
  onImagePress: (id: string) => void;
}
// SingleImage is responsible for showing the image in the list and handling the id
const SingleImage = ({
  image: { id, urls },
  onImagePress,
}: SingleImageProps) => {
  const onClickHandler = useCallback(() => {
    onImagePress(id);
  }, [id]);

  return (
    <Wrap onClick={onClickHandler}>
      <img src={urls.small} alt="not available" />
    </Wrap>
  );
};

export default SingleImage;

const Wrap = styled.div`
  border-radius: 10px;
  margin-top: 30px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  }
`;
