import "./PodcastCard.css";
import getGenreTitles from "../utils/getGenres.js";
import { format, parseISO } from "date-fns";


function PodcastCard({ podcast, onClick }) {
    const formattedDate = format(parseISO(podcast.updated), "MMMM d, yyyy");

    return(
        <section className="podcast-card" key={podcast.id} id={podcast.id} onClick={ () => setOpenModal(true)}>
            <img className="podcast-img" src={podcast.image} alt={podcast.title}  loading="lazy"/>

            <div className="podcast-container">
                <h2 className="title">{podcast.title}</h2>
                <p className="podcast-season">Season {podcast.seasons}</p>
                <div className="genres-list">
                    {getGenreTitles(podcast).map((title, i) => (
                        <p key={i} className="genre">
                        {title}
                        </p>
                    ))}
                </div>
                <p className="date">Updated: <span>{formattedDate}</span></p>
            </div>
        </section>
    )
}
export default PodcastCard