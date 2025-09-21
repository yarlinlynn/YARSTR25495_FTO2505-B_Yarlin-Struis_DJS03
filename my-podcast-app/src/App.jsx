import { useState, useEffect } from 'react'
import './App.css'
import Header from "../components/Header/Header.jsx";
// import LibrarySidebar from "../components/Library/MyLibrary.jsx";
import PodcastCard from "../components/PodcastCard/PodcastCard";
import Modal from "../components/PodcastModal/PodcastModal.jsx";

/**
 * The main component that fetches and displays a list of podcasts.
 * Handles loading, error states, and modal display for individual podcast details.
 * @returns {JSX.Element} The rendered App component with podcast cards and modal.
 */
function App() {
  /**
   * State to store the list of podcasts fetched from the API.
   */
  const [podcasts, setPodcast] = useState([]);

  /**
   * State to track that podcast data is being fetched.
   */
  const [loading, setLoading] = useState(true);

  /**
   * State to store any error that occurs during the API fetch.
   */
  const [error, setError] = useState(null);

  /**
   * State to manage the podcast modal.
   */
  const [openModal, setOpenModal] = useState(null)

  /**
   * Fetches podcast data from the API with a 2-second delay and updates state.
   * Cleans up the timeout on component unmount to prevent memory leaks.
   */
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

  return (
  <>
    <Header/>

    <main className="main-content">

      <section className="rendered-podcast">
        
        {loading ? (
          <div className='loading-container'>
            <div>
              
              <div className="loading-animation"></div>
              
              <p className="loading-text">Fetching data... please wait.</p>
            </div>
          </div>
        ) : error ? (
            <div className="error-container">
              <p className="error-message">
                Failed to fetch Podcasts from API. Please refresh webpage
              </p>
            </div>
        ) : podcasts.map( (podcast) => (
              <PodcastCard  key={podcast.id} podcast={podcast} onClick={() => setOpenModal(podcast)}/>
            ))
        } 
      </section>
    </main>
    {openModal && (
      <Modal podcast={openModal} onClose={() => setOpenModal(null)} />
    )}
    
  </>
)
}

export default App
