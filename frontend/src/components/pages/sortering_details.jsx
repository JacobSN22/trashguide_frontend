import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header } from '../partials/header'
import { Footer } from '../partials/footer';

export const Sortering_details = () => {
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

      <Header />
        <section>
            <h1></h1>
        </section>
      <Footer />
    </>
  )
}