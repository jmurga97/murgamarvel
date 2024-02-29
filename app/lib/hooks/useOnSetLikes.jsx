import { useAppContext } from "../../context";

export const useOnSetLikes = (id,name,img) => {
  const { likes, setLikes } = useAppContext();
  const isLiked = likes
    ? likes.some((character) => character.id === id)
    : false;

  const onSetLike = () => {
    if (isLiked) {
      setLikes((previous) => {
        const newState = previous.filter((character) => character.id !== id);
        sessionStorage.setItem("likes", JSON.stringify(newState));
        return newState;
      });
    } else {
      setLikes((previous) => {
        const newState = [...previous, { id, name, img }];
        sessionStorage.setItem("likes", JSON.stringify(newState));
        return newState;
      });
    }
  };
  return {
    isLiked,
    onSetLike,
  };
};
