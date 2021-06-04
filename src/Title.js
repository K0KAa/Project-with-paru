import React from "react";
import styled from "styled-components";

export default function Title({ title }) {
  return (
    <TitleWrapper>
      <h4 className="title">{title}</h4>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  .title {
    color: #c9c8c7;
  }
`;
