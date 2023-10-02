import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import axios from "axios";
import Cards from './Cards';
import { Card } from 'react-bootstrap';


function FetchData(props) {
    const [card, setCard] = useState([])
    const [skeleton, setSkeleton] = useState(false)

    const Categories = props.cat;

    useEffect(()=> {
        const FetchData = async() => {
            try{
                
                const generalData = await axios.get(
                    Categories? `https://news-app-server-lb75.onrender.com/article/${Categories}`
                : "https://news-app-server-lb75.onrender.com/article/home"
                );
                const genrals = generalData.data.articles;
                console.log({genrals})
                setCard(genrals);
                setSkeleton(true)

            }
            catch(err){
                console.log(err)
            }
        }
        FetchData();
    },[Categories])
  return (
    <>
    {console.log("card",card)}
    <Container className='categoriesCont'>
        <h1 className='news_heading'>Top {Categories?Categories:"Generals"}</h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          skeleton ? card.map((items, index) =>{
                return <Cards
                key={index}
                title={items.title}
                content={items.content}
                image={items.urlToImage}
                learnMore={items.url}
                link={items.url}
                card={card} />
            })
            :
            [1,2,3,4,5,6].map(item =>{
                return <Cards />
            })
        }
        </div>

        </Container>
    </>
  )
}

export default FetchData