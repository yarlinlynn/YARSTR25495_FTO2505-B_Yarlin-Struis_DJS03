import { useState, useEffect } from 'react'
import './App.css'
import PodcastCard from '../components/PodcastCard/PodcastCard';

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
        Failed to fetch Podcasts from API. Please refresh webpage
      </p>
    </div>
    )
  }

  return (
  <>
    <main className="main-content">
      <section className="your-library"></section>
      
      <section className="rendered-podcast">
        {podcasts.map( (podcast) => (
          <PodcastCard  key={podcast.id} podcast={podcast} />
        ))}
      </section>
    </main>
    
  </>
)


}

export default App
