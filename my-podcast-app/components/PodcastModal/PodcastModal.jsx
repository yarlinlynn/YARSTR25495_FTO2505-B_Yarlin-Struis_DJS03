import { IoCloseOutline } from "react-icons/io5";

function Modal({open, onClose})  {
    if(!open) return null;

    return (
        <section className="modal">
            <div className="modal-content">
                <h2 className="modalTitle">Scamfluencers</h2>
                <button className="close-btn">
                    <IoCloseOutline />
                </button>
            </div>
            <div className="banner">
                <img src="https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png" alt=""/>
                <div className="podcast-info">
                    <p className="description">
                        You never really know someone…especially online. In today’s world, the power of influence can be the quickest path to money and fame, and it often ends in ruin. These are the stories of the world’s most insidious Scamfluencers. And we are their prey. On Wondery’s new weekly series, join co-hosts Scaachi Koul and Sarah Hagi as they unpack epic stories of deception from the worlds of social media, fashion, finance, health, and wellness. These influencers claim to be everything from charismatic healers to trusted financial insiders to experts in dating. They cast spells over millions. Why do we believe them, and how does our culture allow them to thrive? From Black Swan Murder to a fake social media influencer to an audacious Hollywood Ponzi schemer, each season will take the listener along the twists and turns, the impact on victims, and what’s left when the facade falls away. New episodes come out every Monday for free, with 1-week early access for Wondery+ subscribers. Listen ad-free on Wondery+ or on Amazon Music with a Prime membership or Amazon Music Unlimited subscription.
                    </p>
                    <div id="modalGenres" class="tags">
                        <span class="tag">Investigative Journalism</span>
                    </div>
                    <p id="modalUpdated" class="modal-updated-text">Updated 
                        <span className="date">October 24, 2022</span>
                    </p>
                </div>
            </div>
            <h3>Seasons</h3>
            <ul id="seasonList" class="season-list">
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
            </ul>
        </section>
    )
}
export default Modal