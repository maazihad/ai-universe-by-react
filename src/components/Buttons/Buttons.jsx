import React from 'react';

const Buttons = ({ children }) => {

   return (
      <div className="text-center my-5">
         <button className="btn btn-accent text-white">{children}</button>
      </div>
   );
};

export default Buttons;