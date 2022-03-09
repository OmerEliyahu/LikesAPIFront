import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/style.css"
import DownloadButton from './downloadButton';
import ImagesGrid from './imagesGrid';



var GridContainer = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios(
            'http://127.0.0.1:8000/get_all/',
            );
            setImages(result.data);          
        }
        fetchData();
      }, []);

      return (
          <div className='gridContainer'>
            <div className='download_contianer'> Hello User! To Download your Statistics, press the button
                <DownloadButton/>
            </div>
            <ImagesGrid images={images} />
            </div>
      )
}

export default GridContainer