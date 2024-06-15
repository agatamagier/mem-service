import { MemePage } from "../components/MemPage";
import React from "react";
import { useSelector } from "react-redux";

export const RegularPage = () => {
  const memes = useSelector((state) => state.allMemes);

  return (
    <section>
      <MemePage isHot={false} memes={memes}/>
    </section>
  );
};
