import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import Loader from './Loader';

const ImageList = () => {

  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateImage = async () => {
    const url = `https://pixabay.com/api/?key=41895623-1d78e1c7f668aecdd84166fa1&q=nature+night&image_type=photo`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setHits(parsedData.hits);
    setLoading(false);
  };

  useEffect(() => {
    updateImage();
  }, []);

  return (
    <div className='my-1'>
      {loading && <Loader />}
      <div className='flex flex-wrap items-center justify-center'>
        {hits.map((item) => (
          <div id={item.id}>
            <ImageCard img={item.largeImageURL} tags={item.tags} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageList;
