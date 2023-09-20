import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header } from '../partials/header'
import { Footer } from '../partials/footer';
import { NavLink, useParams } from 'react-router-dom';
import { Detailsstyle } from '../style/sorting_details.style';


export const Sorting = () => {
  return (
    <>
      <div><Sortering_details /></div>
    </>
  )
}


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

  const goBack = () => {
    window.history.back();
  }

  return (
    <>

      <Header />
      <Detailsstyle>
        <button onClick={goBack}>Gå tilbage</button>
        {details && details.map(item => {
          return (
            <>
              <NavLink to={`/sortering/${item.id}/details/${item.id}`}>
                <div key={item.id} className='container'>
                  <h3>{item.title}</h3>
                </div>
              </NavLink>
            </>
          )
        })}
      </Detailsstyle>
      <Footer />
    </>
  )
}



export const Category_details = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getdata = async () => {
      const url = `http://localhost:4000/category/details/${id}`;
      const result = await axios.get(url);
      setDetails(result.data.types);
    }
    getdata();
  }, []);

  const goBack = () => {
    window.history.back();
  }

  // Opdeller rules ind i true og false så de kan mappes ud
  const trueItems = details.filter(item => item.rules && item.rules.is_allowed);
  const falseItems = details.filter(item => !item.rules || !item.rules.is_allowed);

  return (
    <>
      <Header />
      <Detailsstyle>
        <button onClick={goBack}>Gå tilbage</button>

        <div className='true-items'>
          <h2>Hvad modtager vi?</h2>
          <hr />
          {trueItems.map(item => ( // mapper du rules som er true
            <div key={item.id} className='container' style={{ color: 'green' }}>
              <h3>{item.title}</h3>
              <p>Ja tak</p>
            </div>
          ))}
        </div>

        <div className='false-items'>
          <h2>Hvad modtager vi ikke?</h2>
          <hr />
          {falseItems.map(item => ( //mapper de rules som er false
            <div key={item.id} className='container' style={{ color: 'red' }}>
              <h3>{item.title}</h3>
              <p>Nej tak</p>
            </div>
          ))}
        </div>
      </Detailsstyle>
      <Footer />
    </>
  );
};
