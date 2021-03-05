import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [value,setvalue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(()=> {
    fetchJobs();
  },[]);

  if(loading){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company,dates,duties,titles } = jobs[value];

  return(
    <section className="section">
      <div className="title">
        <h2>Expierence</h2>
        <div className="underline"></div>
        <div className="jobs-center">
          {/* { btn container } */}
          {/* job infor */}
          <article className="job-info">
            <h3>Title</h3>
            <h4>Company</h4>
            <p className="job-date">{dates}</p>
            {
              duties.map((duty,index)=> {
                return(
                  <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon">

                  </FaAngleDoubleRight>
                  <p>{duty}</p>
                  </div>
                )
              })
            }
          </article>
        </div>
      </div>
    </section>
  )
}

export default App
