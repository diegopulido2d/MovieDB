import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner"
import "./style.css";
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
            <div className="itemListContainer">
                <h2>Searching: "{title}"</h2>
                <div className="spinner">
                    <Spinner />
                </div>
            </div>
          ) : (
            <div className="itemListContainer">
                <h2>Searching: "{title}"</h2>
                <SearchBar />
                {console.log(titles)}
                    { titles.length === 0 ? <img src={NoResults} alt=""></img> : 
                    <ul>
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