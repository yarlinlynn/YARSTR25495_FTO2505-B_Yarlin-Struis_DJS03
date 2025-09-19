import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [podcasts, setPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect( () => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch((`https://podcast-api.netlify.app/`));
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        } 
        const podcasts = await response.json();
        setPodcast(podcasts)
        console.log(podcasts)
      } catch(error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };

    const delay = setTimeout( () => {
      fetchPodcasts();
    }, 2000);
    return () => clearTimeout(delay)
  }, [])

  if(loading) {
    return 
    <div className='loading-container'>
      <div>
        
        <div className="loading-animation"></div>
        
        <p className="loading-text">Fetching data... please wait.</p>
      </div>
    </div>
  }

  if(error) {
    return
    <div className="error-container">
      <p className="error-message">
        Failed to fetch tasks from API.
      </p>
    </div>
  }

  return (
    <>

    </>
  )
}

export default App
