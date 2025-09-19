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
    return (
    <div className='loading-container'>
      <div>
        
        <div className="loading-animation"></div>
        
        <p className="loading-text">Fetching data... please wait.</p>
      </div>
    </div>
    )
  }

  if(error) {
    return (
    <div className="error-container">
      <p className="error-message">
        Failed to fetch tasks from API.
      </p>
    </div>
    )
  }

  return (
  <>
    {podcasts.map( (podcast) => (
      <section key={podcast.id} id={podcast.id}>
        <img className="podcast-img" src={podcast.image} alt={podcast.title} />
        <h2 className="title">{podcast.title}</h2>
        <p className="podcast-season">Season {podcast.seasons}</p>
        <div className="genres-list">
          {podcast.genres}
        </div>
        <p className="date">Updated: <span>{podcast.updated}</span></p>
      </section>
    ))}
  </>
)


}

export default App
