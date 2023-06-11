import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from "../Spinner/Spinner";

import axios from "axios";


const ItemDetailContainer = () => {

  const [titleDetail, setTitleDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const {id} = useParams();
  useEffect(() => {

      setLoading(true);

      const options = {
          method: 'GET',
          url: 'https://moviesdatabase.p.rapidapi.com/titles/'+id,
          headers: {
            'X-RapidAPI-Key': '432f7bf076msh3339b682685d302p17f26ajsnde2d013bfcc5',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
      };
      
      const getData = async () => {
            try {
                const response = await axios.request(options);
                setTitleDetail(response.data?.results);
                console.log(response.data?.results)
                setLoading(false);
            } catch (error) {
                console.error(error);
          }
      }

      getData();
      
  },[id]);

  return (
    <>
      {loading ? (
              <div className="itemListContainer flex flex-col items-center mb-14">
                <div className="mt-12 mb-10 flex flex-col items-center">
                  <div className="spinner">
                      <Spinner />
                  </div>
                </div>
              </div>
            ) : (<div className='detail lg:mt-12' key={titleDetail.id}>
                      <div className="detailContainer lg:w-full lg:px-44 lg:flex lg:justify-center lg:items-center">
                          <img src={titleDetail.primaryImage?.url} alt="" className='lg:max-w-lg'></img>
                          <div className='detailInfo p-6 lg:p-10'>
                            <h6 className='italic text-red-300 lg:text-2xl'>
                              <span>{titleDetail.releaseDate?.day} / </span>
                              <span>{titleDetail.releaseDate?.month} / </span>
                              <span>{titleDetail.releaseDate?.year}</span>
                            </h6>
                          <h2 className='text-red-950 font-bold lg:text-7xl	text-4xl mb-2 lg:mb-4'>{titleDetail.originalTitleText?.text}</h2>
                          <h6 className='italic text-red-300 lg:text-3xl'>{titleDetail.titleText?.text}</h6>
                          <p className='my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                    </div>)
      }
    </>
      
  )
}

export default ItemDetailContainer