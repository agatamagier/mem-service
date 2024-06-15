import { MemePage } from "../components/MemPage";
import { useSelector } from "react-redux";

export const HotPage = () => {
  const memes = useSelector((state) => state.allMemes);

  return (
    <section>
        <MemePage isHot={true} memes={memes}/>
    </section>
  );
};
