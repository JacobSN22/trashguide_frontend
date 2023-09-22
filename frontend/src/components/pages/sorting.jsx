import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header } from '../partials/header'
import { Sortingstyle } from '../style/sorting.style';
import { NavLink } from 'react-router-dom';
import { Footer } from '../partials/footer';

export const Sortering = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getdata = async () => {

      const url = `http://localhost:4000/section`;
      const result = await axios.get(url)
      setImages(result.data.slice(0, 12))
      console.log(result.data);
    }
    getdata()
  }, []);

  return (
    <>
      <Sortingstyle>
        <Header />

        <section>

          <div className='search'>
            <h1><span>Din guide</span> <br /> til en sund affaldssotering</h1>
            <input type="text" placeholder='Søg på affald' />
          </div>
          <div className='grid'>

            {images && images.map(item => {
              return (
                <>
                  <NavLink to={`/sortering/${item.id}`}>
                    <div key={item.id} className='container'>
                      <img src={`http://localhost:4000/Assets/Images/Guide/Categories/${item.filename}`} alt="Billed" />
                      <h3 >{item.title}</h3>
                    </div>
                  </NavLink>
                </>
              )

            })}
          </div>
        </section>
      </Sortingstyle>
      <Footer />
    </>
  )
}
