import { MemComponent } from "../components/MemComponent";
import React from "react";

export const MemePage = ({ isHot = false, memes }) => {

  return (
    <section>
      <h1 className="heading">
        {isHot ? "Hot" : "Regular"} <span>mems</span>
      </h1>
      <div className="wrapper">
        {memes &&
          memes.map((mem) => {
            return isHot ? (
              mem.upvotes + mem.downvotes > 5 && (
                <MemComponent mem={mem} key={mem.title} />
              )
            ) : (
              <MemComponent mem={mem} key={mem.title} />
            );
          })}
      </div>
    </section>
  );
};
