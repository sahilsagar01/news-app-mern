import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


function Cards(props) {
  return (
    <div>
      {props.card?<div className="card rounded overflow-hidden">
        <img className="w-full" src={props.image} alt="Forest" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.content}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a href={props.link}>
            <span className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Learn More
            </span>
          </a>
        </div>
      </div>
      :
      <div className=" rounded overflow-hidden">
      
     
        <div className="px-6 py-4">
        <Stack spacing={1}>
        <Skeleton variant="rounded" height={150} />

      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
    </Stack>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a href={props.link}>
            <span className=" px-3 py-1 text-sm mr-2 mb-2">
            <Skeleton variant="rounded" width={90} height={40}/>

            </span>
          </a>
        </div>
      </div>
      }
    </div>
  );
}

export default Cards;
