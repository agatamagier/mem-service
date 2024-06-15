import { useDispatch } from "react-redux";

export const MemComponent = ({ mem }) => {
  const dispatch = useDispatch();

  const upvoteHandler = () => {
    if (mem.upvotes + mem.downvotes > 10) {
      mem.star = true;
    }
    dispatch({ type: "UP-VOTE", payload: mem.id });
  };
  const downvoteHandler = () => {
    if (mem.upvotes + mem.downvotes > 10) {
      mem.star = false;
    }
    dispatch({ type: "DOWN-VOTE", payload: mem.id });
  };
  return (
    <div className="mem-container">
      {mem.star && (
        <img className="star" src="/assets/star-svgrepo-com.svg" alt="star" />
      )}
      <div className="img-wrapper">
        <img src={mem.img} alt={mem.title} />
      </div>

      <h3>{mem.title}</h3>
      <div className="mem-votes">
        <div className="vote-up">
          <span>{mem.upvotes}</span>
          <button onClick={upvoteHandler}>&#129033;</button>
        </div>
        <div className="vote-down">
          <span>{mem.downvotes}</span>
          <button onClick={downvoteHandler}>&#x1F80B;</button>
        </div>
      </div>
    </div>
  );
};
