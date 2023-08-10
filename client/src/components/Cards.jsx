import React from 'react'

function Cards(props) {
  return (
    <div>
    <div className="rounded overflow-hidden shadow-lg">
    <img className="w-full" src={props.image} alt="Forest" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.title}</div>
      <p className="text-gray-700 text-base">
        {props.content}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
    <a href={props.link}><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Learn More</span></a>
      
    </div>
  </div>
</div>
  );
}

export default Cards;