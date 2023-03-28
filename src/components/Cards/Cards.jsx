import React, { useEffect, useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Cards = () => {
   const [data, setData] = useState([]);
   const [singleData, setSingleData] = useState({});
   const [showAll, setShowAll] = useState(false);
   const [uniqueId, setUniqueId] = useState(null);
   // console.log(singleData);

   useEffect(() => {
      // console.log("hello from useEffect 13");
      fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
         .then(response => response.json())
         .then(data => setSingleData(data.data));
   }, [uniqueId]);


   const handleShowAll = () => {
      setShowAll(true);
   };
   const handleSort = () => {
      const sortedData = data.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
      setData([...data, sortedData]);
   };

   useEffect(() => {
      const loadData = async () => {
         const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
         const data = await res.json();
         // console.log(data.data.tools);
         setData(data.data.tools);
      };
      loadData();
   }, []);


   return (
      <>
         {
            <span onClick={() => handleSort()}>
               <Buttons>Sort By Date</Buttons>
            </span>
         }

         <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-14 gap-5 md:px-6'>
            {/*   {
               data.map(singleData => {
                  return <SingleData
                     singleData={singleData}
                  ></SingleData>;
               })
            } */}

            {
               data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData
                  key={singleData.id}
                  singleData={singleData}
                  setUniqueId={setUniqueId}
               ></SingleData>)
            }
         </div>
         {
            !showAll && <span onClick={() => handleShowAll()}>
               <Buttons>See more</Buttons>
            </span>
         }
         <Modal

            singleData={singleData}
         ></Modal>
      </>

   );
};

export default Cards;