import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Cards = () => {

   const [data, setData] = useState([]);
   useEffect(() => {
      const loadData = async () => {
         const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
         const data = await res.json();
         // console.log(data.data.tools);
         setData(data.data.tools);
      };
      loadData();
   }, []);

   console.log(data);

   return (
      <>
         <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-14 gap-5 md:px-6'>
            {/*   {
               data.map(singleData => {
                  return <SingleData
                     singleData={singleData}
                  ></SingleData>;
               })
            } */}

            {
               data.map(singleData => <SingleData
                  key={singleData.id}
                  singleData={singleData}
               ></SingleData>)
            }
         </div>
      </>
   );
};

export default Cards;