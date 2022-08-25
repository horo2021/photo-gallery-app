import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Image } from "../models/image";
export interface FullImageProps {
  images: Image[];
  selectedImageId: string;
  onClose: () => void;
}

const FullImage = ({ images, selectedImageId, onClose }: FullImageProps) => {
  const [imagePosition, setImagePosition] = useState(-1);
  useEffect(() => {
    const imageIndex = images.findIndex((i) => i.id === selectedImageId);
    setImagePosition(imageIndex);
  }, [images, selectedImageId]);

  const nextImageHandler = useCallback(() => {
    if (imagePosition < images.length - 1) {
      setImagePosition((prev) => {
        return prev + 1;
      });
    }
  }, [images, imagePosition]);

  const prevImageHandler = useCallback(() => {
    if (imagePosition > 0) {
      setImagePosition((prev) => {
        return prev - 1;
      });
    }
  }, [imagePosition]);

  return (
    <Container>
      {imagePosition !== -1 && (
        <ImageBox>
          <Wrap>
            <CloseBtn onClick={onClose}> &#9587;</CloseBtn>
            <PrevBtn onClick={prevImageHandler}>&laquo;</PrevBtn>

            <img src={images[imagePosition].urls.regular} alt="f" />
            <NextBtn onClick={nextImageHandler}>&raquo;</NextBtn>
          </Wrap>
          <ImageDescription>
            <span>Created At : {images[imagePosition].created_at}</span>
            <span>
              Camera Used :{" "}
              {images[imagePosition].exif.make
                ? images[imagePosition].exif.make
                : "not available"}
            </span>
            <span>
              Downloded :{images[imagePosition].downloads}
              Times
            </span>
          </ImageDescription>
        </ImageBox>
      )}
    </Container>
  );
};

export default FullImage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background-color: rgba(49, 49, 49, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const ImageBox = styled.div`
  background-color: black;
  border-radius: 10px;
  position: relative;
  width: 90%;
  height: 90%;
`;

const Wrap = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  width: 80%;
  height: 80%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ImageDescription = styled.div`
  margin-top: 10px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;

    span {
      color: white;
      font-size: 0.6rem;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 600px) and (max-width: 1200px) {
    span {
      color: white;
      font-size: 0.9rem;
    }
  }
`;

const NextBtn = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  font-size: 3rem;
  border-radius: 50%;
  cursor:pointer;

 
}
`;

const PrevBtn = styled(NextBtn)``;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 33px;
  color: white;
  background: black;
  cursor: pointer;
`;
