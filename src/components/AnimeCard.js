import React from 'react'

function AnimeCard({ anime }) {
    return (
        <article className="anime-card">
            <a href={anime.url} target="_blank">
                <figure>
                    <LazyImg name={anime.name} imgSrc={anime.image_url} />
                </figure>
                <h3>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard
