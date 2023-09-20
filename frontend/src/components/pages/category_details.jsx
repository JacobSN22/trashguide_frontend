import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header } from '../partials/header'
import { Footer } from '../partials/footer';
import { NavLink, useParams } from 'react-router-dom';

export const Category_details = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    const getdata = async () => {

      const url = `http://localhost:4000/category/details/${id}`;
      const result = await axios.get(url)
      setDetails(result.data.types);
      console.log(result.data.types);
    }
    getdata()
  }, []);

  return (
    <>

      {details && details.map(item => {
              return (
                <>
                    <div key={item.id} className='container'>
                      <h3 >{item.title}</h3>
                    </div>
                </>
              )

            })}
    </>
  )
}