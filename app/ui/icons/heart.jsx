'use client'
export const Heart = ({isLiked = false, size = '30', fill = 'transparent', onClick}) => {

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{cursor:'pointer'}}
      onClick={() => onClick()}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        style={{transitionDuration: '300ms'}}
        d="M20 11.9768L14 8.33521L8 11.9768V19.7803L20 30.0115L32 19.7803V11.9768L26 8.33521L20 11.9768Z"
        fill={fill}
        stroke={isLiked ? null : 'white'}
        strokeWidth="2"
      />
    </svg>
  );
};
