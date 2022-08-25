import React from "react";
import styled from "styled-components";
import ImagesList from "./ImageList";

const Home = () => {
  return (
    <Container>
      <ImagesList />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  padding: 0px 30px;

  background-image: linear-gradient(
    to right top,
    #051937,
    #0e1831,
    #12172c,
    #151626,
    #161521
  );
`;
