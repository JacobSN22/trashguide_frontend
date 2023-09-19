import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header } from '../partials/header'

export const Sortering = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getdata = async () => {

      const url = `http://localhost:4000/section`;
      const result = await axios.get(url)
      setImages(result.data.slice(0, 2))
    }
    getdata()
  }, []);

  return (
    <div>
            <Header />
      {images && images.map(item => {
            return (
              <>
                <h1>Skuespillere</h1>
                <div className='container'>
                  <img key={item.id} src={item.image} alt="Billed" />
                  <h3 key={item.id} >{item.name}</h3>
                  <p key={item.id}>{item.description}</p>
                  <button>LÆS MERE</button>
                </div>
              </>
            )

          })}
    </div>
  )
}
