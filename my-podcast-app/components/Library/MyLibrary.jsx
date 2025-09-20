import { IoHeart, IoBookmark, IoAdd, IoSearch } from "react-icons/io5";
import "./Sidebar.css"


function LibrarySidebar() {
    return (
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
    )
}

export default LibrarySidebar