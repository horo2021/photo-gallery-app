import React, { useState, useEffect, useCallback } from "react";
// InfiniteScroll is a third party library to manage the lazy loading strategy
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { fetchImages } from "../services/fetchService";
import SingleImage from "./SingleImage";

import Loader from "./Loader";
import FullImage from "./FullImage";
import { Image } from "../models/image";
// the iamge list component is responsible for rendering a list of images on the home component
const ImagesList = () => {
  const [imagesList, setImagesList] = useState<Image[]>([]);
  // selected image state is giving an id to the exact image that  was clicked
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fetch = useCallback(async () => {
    const images = await fetchImages();
    setImagesList([...imagesList, ...images]);
  }, [imagesList]);

  useEffect(() => {
    fetch();
  }, []);

  const onImagePress = useCallback(
    (id: string) => {
      const foundImage = imagesList.find((i) => i.id === id);
      if (foundImage) {
        setSelectedImage(foundImage);
      }
    },
    [imagesList]
  );
  // image limiter function was added to prevent the user from abusing api and avoiding too requests
  const imageLimiter = useCallback(() => {
    if (imagesList.length > 40) {
      return false;
    } else {
      return true;
    }
  }, [imagesList]);
  // this function is called to handle the close btn popup
  const onCloseFullImage = () => setSelectedImage(null);
  return (
    <Container>
      {selectedImage && (
        <FullImage
          images={imagesList}
          selectedImageId={selectedImage.id}
          onClose={onCloseFullImage}
        />
      )}

      <InfiniteScroll
        dataLength={imagesList.length}
        next={fetch}
        hasMore={imageLimiter()}
        loader={<Loader />}
      >
        <Content>
          {imagesList.map((image) => (
            <SingleImage
              key={image.id}
              image={image}
              onImagePress={onImagePress}
            />
          ))}
        </Content>
      </InfiniteScroll>
    </Container>
  );
};

export default ImagesList;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
