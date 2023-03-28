import React from 'react';

const Modal = (props) => {
   // console.log(props.singleData);
   const { image_link, integrations, features, accuracy, description } = props.singleData;
   // console.log(features);
   // console.log(Object.values(features || {}));

   return (
      <>
         <input type="checkbox" id="my-modal-5" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
               <div className="card lg:card-side bg-base-100 flex gap-3">
                  <div className="card-body w-6/12 border-2 border-purple-200 rounded-lg">
                     <h2 className="card-title">
                        {
                           description &&
                              description ? description : "Not found"
                        }
                     </h2>
                     <div className='flex justify-between'>
                        <div>
                           <h2 className="text-2xl font-bold">Features</h2>
                           {
                              Object.values(features || {}) &&
                              Object.values(features || {})?.map(value => (
                                 <p>{value.feature_name ? value.feature_name : "Not found"}</p>
                              ))
                           }
                        </div>
                        <div>
                           <h2 className="text-2xl font-bold">Integrations</h2>
                           {
                              integrations &&
                              integrations?.map(integration => (
                                 <p>{integration ? integration : "Not Found"}</p>
                              ))
                           }
                        </div>
                     </div>

                  </div>
                  <figure className='w-6/12'><img className='w-full' src={image_link && image_link[0]} /></figure>
               </div>
               <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            </div>
         </div>
      </>
   );
};

export default Modal;