import { useState, useEffect } from 'react';
import { getAnimeInfo } from '../helpers/getAnimeInfo';

export const AnimeInfo = ({ title }) => {
  const [animeInfo, setAnimeInfo] = useState(null);


  useEffect(() => {
    const fetchAnimeInfo = async () => {
      const info = await getAnimeInfo(title);
      setAnimeInfo(info);
    };

    fetchAnimeInfo();
  }, [title]);

  return (
    <div>
      {animeInfo && (
        <>
          <div className='row' >
            <div className='col-md-3'>
              <img id='img'  src={animeInfo.images.jpg.image_url} />
            </div>

            <div className='col-md-9'>
              <div >
                <p><h3>Sinopsis:</h3> {animeInfo.synopsis}</p>
                <p><h3>Episodios:</h3> {animeInfo.episodes}</p>
                <p><h3>Puntuación:</h3> {animeInfo.score}</p>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
};