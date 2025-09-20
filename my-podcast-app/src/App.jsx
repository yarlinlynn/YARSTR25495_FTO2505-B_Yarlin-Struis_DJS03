import { useState, useEffect } from 'react'
import './App.css'
import PodcastCard from '../components/PodcastCard/PodcastCard';
import Header from '../components/Header/Header.jsx'


import { IoHeart, IoBookmark, IoAdd, IoSearch } from "react-icons/io5";

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

  return (
  <>
    <Header/>

    <main className="main-content">
      <section className="your-library">
        <aside className="library">
          <div className="header">
              <div>Your Library</div>
              <div className="create-playlst">
                <IoAdd />
                <span>Create</span>
              </div>
            </div>

            <div className="search-library">
              <IoSearch />
              <span>Search in your library</span>
            </div>

            <div className="library-content">
              <div className="card">
                <IoHeart className="icon"/>
                <div className="card-title">Favourite Podcast</div>
              </div>
              <div className="card">
                <IoBookmark className="icon" />
                <div className="card-title">Saved Podcast</div>
              </div>
              <div className="card">
                <img src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png" alt="This Is Actually Happening"/>
                <div className="card-title">This Is Actually Happening</div>
              </div>
              <div className="card">
                <img src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png" alt="This Is Actually Happening"/>
                <div className="card-title">This Is Actually Happening</div>
              </div>
              <div className="card">
                <img src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png" alt="This Is Actually Happening"/>
                <div className="card-title">This Is Actually Happening</div>
              </div>
              <div className="card">
                <img src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png" alt="This Is Actually Happening"/>
                <div className="card-title">This Is Actually Happening</div>
              </div>
            </div>
        </aside>
      </section>

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
              <PodcastCard  key={podcast.id} podcast={podcast} />
            ))
        } 
      </section>
    </main>
    
  </>
)


}

export default App
