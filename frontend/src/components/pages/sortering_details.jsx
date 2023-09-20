import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header } from '../partials/header'
import { Footer } from '../partials/footer';
import { useParams } from 'react-router-dom';
import { Category_details } from './category_details';

export const Sortering_details = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    const getdata = async () => {

      const url = `http://localhost:4000/section/${id}`;
      const result = await axios.get(url)
      setDetails(result.data.categories);
      console.log(result.data.categories);
    }
    getdata()
  }, []);

  return (
    <>

      <Header />
      {details && details.map(item => {
        return (
          <>
            <div key={item.id} className='container'>
              <h3>{item.title}</h3>
              {/* <Category_details /> */}
            </div>
          </>
        )
      })}
      <Footer />
    </>
  )
}



