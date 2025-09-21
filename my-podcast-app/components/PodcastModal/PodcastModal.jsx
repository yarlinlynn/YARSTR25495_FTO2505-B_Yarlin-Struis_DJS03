import getGenreTitles from "../utils/getGenres.js";
import { format, parseISO } from "date-fns";
import { IoCloseOutline } from "react-icons/io5";

function Modal( {podcast, onClose} )  {
    if (!podcast) return null;
    const formattedDate = format(parseISO(podcast.updated), "MMMM d, yyyy");

    return (
        <section className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
                <h2 className="modalTitle">{podcast.title}</h2>
                <button className="close-btn" onClick={onClose}>
                    <IoCloseOutline />
                </button>
            </div>
            <div className="banner">
                <img src={podcast.image} alt={podcast.title}/>
                <div className="podcast-info">
                    <p className="description">{podcast.description}</p>
                    <div id="modalGenres" className="tags">
                        <span className="tag">{getGenreTitles(podcast).join(" ")}</span>
                    </div>
                    <p id="modalUpdated" className="modal-updated-text">Updated 
                        <span className="date">{formattedDate}</span>
                    </p>
                </div>
            </div>
            <h3>Seasons {podcast.seasons}</h3>
            {/* <ul id="seasonList" class="season-list">
                <li class="season-item">
                    <strong class="season-title">Season 1: Season 1</strong>
                    <span class="episodes">8 episodes</span>
                </li>
                <li class="season-item">
                    <strong class="season-title">Season 2: Season 2</strong>
                    <span class="episodes">9 episodes</span>
                </li>
                <li class="season-item">
                    <strong class="season-title">Season 3: Season 3</strong>
                    <span class="episodes">9 episodes</span>
                </li>
            </ul> */}
        </section>
    )
}
export default Modal