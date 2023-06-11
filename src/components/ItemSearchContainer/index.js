import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner"
import Item from "../Item";
import SearchBar from "../SearchBar";
import NoResults from "../../assets/images/noresults.png"

import axios from "axios";


const ItemSearchContainer = () => {

    const [titles, setTitles] = useState([]);
    const [loading, setLoading] = useState(false);

    const {title} = useParams();
    useEffect(() => {

        setLoading(true)

        const options = {
            method: 'GET',
            url: "https://moviesdatabase.p.rapidapi.com/titles/search/keyword/"+title,
            headers: {
                'X-RapidAPI-Key': '432f7bf076msh3339b682685d302p17f26ajsnde2d013bfcc5',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        
        const getData = async () => {
              try {
                  const response = await axios.request(options);
                  setTitles(response.data.results);
                  setLoading(false);
              } catch (error) {
                  console.error(error);
            }
        }

        getData();

    },[title]);

    return (
        <>
          {loading ? (
            <div className="itemListContainer flex flex-col items-center mb-14">
                <div className="mt-12 mb-10 flex flex-col items-center">
                    <h2 className="mb-8 font-bold text-3xl">Searching: "{title}"</h2>
                    <div className="spinner">
                        <Spinner />
                    </div>
                </div>
            </div>
          ) : (
            <div className="itemListContainer flex flex-col items-center mb-14">
                <div className="mt-12 mb-10 flex flex-col items-center">
                    <h2 className="mb-8 font-bold text-3xl">Searching: "{title}"</h2>
                    <SearchBar />
                </div>
                    {titles.length === 0 ? <img src={NoResults} className="p-10" alt=""></img> : 
                    <ul className="lg:w-full lg:px-44 lg:flex lg:flex-wrap lg:justify-around">
                        {titles.map((i) => (
                            <li key={i.id}>
                                <Link to={`/title/${i.id}`}>
                                    <Item 
                                        name = {i.originalTitleText?.text}
                                        price = {i.primaryImage?.caption?.plainText}
                                        image = {i.primaryImage?.url}
                                    />
                                </Link>
                            </li>
                        ))}
                </ul>}
            </div>)}
        </>
    )
}

export default ItemSearchContainer