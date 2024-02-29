import { Heart } from "./icons/heart";
const Favorite = ({ likes = 0 }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center',gap:'4px', cursor:'pointer'}}>
      <Heart isLiked={likes > 0 ? true : false} fill={likes > 0 ? '#EC1D24' : 'transparent'} size="35" />
      <p style={{color:'white',fontSize:'1rem' }}>
        {likes}
      </p>
    </div>
  );
};

export default Favorite;
