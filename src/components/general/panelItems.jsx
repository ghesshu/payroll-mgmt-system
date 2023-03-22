// import React from 'react';

// const PanelItem = (props) => {
//   const { onClick, image, text, active } = props;

//   return (
//     <div>
//       <button
//         onClick={onClick}
//         className={`flex w-full items-center space-x-2 px-3 py-4 bg-slate-900 border-b-black hover:border-b-yellow-700 border-b-4 ${
//           active ? 'border-b-yellow-700' : ''
//         }`}
//       >
//         <img src={image} alt="" className="h-7 bg-yelow-500" />
//         <h1 className="text-yellow-600">{text}</h1>
//       </button>
//     </div>
//   );
// };

// export default PanelItem;


import React from 'react';

const PanelItem = (props) => {
  const { onClick, image, text, active } = props
  return (
    <div>
      <button
        onClick={onClick}
        className={` flex w-full items-center space-x-2 px-3 py-4 bg-yellow-500 border-b-yellow-600 hover:border-b-white transition duration-300 ease-in-out border-b-4 ${active}`}
      >
        <img src={image} alt="" className="h-5 bg-yelow-500" />
        <h1 className="text-white hidden lg:block transition ease-in-out duration-300">{text}</h1>
      </button>
    </div>
  );
};

export default PanelItem;

