import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import axios from "axios";
import Cards from './Cards';


function FetchData(props) {
    const [card, setCard] = useState([])

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
        <h1>Top {Categories?Categories:"Generals"}</h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          card && card.map((items, index) =>{
                return <Cards
                key={index}
                title={items.title}
                content={items.content}
                image={items.urlToImage}
                learnMore={items.url}
                link={items.url} />
            })
        }
        </div>

        </Container>
    </>
  )
}

export default FetchData