import { useState } from 'react';
import { AnimeInfo } from './AnimeInfo';
import '../index.css';


export const AnimeSearchApp = () => {
  const [title, setTitle] = useState('bleach');
  const [searchtitle, setSearchttitle] = useState(title);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSearch = () => {
    setSearchttitle(title);
  };

  return (

    <>
      <div class="bg-light">
        <div id='container'>
          <h1 id='titulo'>Buscador de Anime</h1>
          <div id='caja'>
            <input class="form-control"
              type="text"
              value={title}
              onChange={handleInputChange}
              placeholder="Ingresa el título del anime" />
            <button class="btn btn-secondary" onClick={handleSearch}>Buscar</button>
          </div>
          <AnimeInfo title={searchtitle} />
        </div>
      </div>

    </>

  );
};