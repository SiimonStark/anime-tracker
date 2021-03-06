import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then(res => res.json());
    setTopAnime(temp.top.slice(0, 5));
  }

  const handleSearch = e => {
    e.preventDefault();
    console.log('What is the search? ', search);
    fetchAnime(search);
  }

  const fetchAnime = async (query) => {
    console.log('Searching for: ', query)
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json())
      .catch(err => console.error(err));
    console.log({ temp });

    setAnimeList(temp.results);
  }

  useEffect(() => {
    getTopAnime();
    console.log(topAnime);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar
          topAnime={topAnime} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;

// * API
// https://jikan.docs.apiary.io/#reference/0/anime