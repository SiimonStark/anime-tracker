import React from 'react';
import AnimeCard from './AnimeCard';

export default function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={props.handleSearch}>
                    <input type="search" placeholder="Search for an anime..."
                        value={props.search} onChange={e => props.setSearch(e.target.value)}
                        required />
                </form>
            </div>
            <div className="anime-list">
                {props.animeList.length ?
                    props.animeList.map(anime => (
                        <AnimeCard anime={anime} key={anime.mal_id} />
                    ))
                    : (<p>No results</p>)
                }
            </div>
        </main>
    )
}
