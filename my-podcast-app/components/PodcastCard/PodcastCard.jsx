import "./PodcastCard.css";
import getGenreTitles from "../utils/getGenres.js";


function PodcastCard({ podcast, onClick }) {
    // const [openModal, setOpenModal] = useState(false)

    return(
        <section className="podcast-card" key={podcast.id} id={podcast.id} onClick={ () => setOpenModal(true)}>
            <img className="podcast-img" src={podcast.image} alt={podcast.title}  loading="lazy"/>

            <div className="podcast-container">
                <h2 className="title">{podcast.title}</h2>
                <p className="podcast-season">Season {podcast.seasons}</p>
                <div className="genres-list">
                    {getGenreTitles(podcast).map((title, i) => (
                        <span key={i} className="genre">
                        {title}
                        </span>
                    ))}
                </div>
                <p className="date">Updated: <span>{podcast.updated}</span></p>
            </div>
        </section>
    )
}
export default PodcastCard