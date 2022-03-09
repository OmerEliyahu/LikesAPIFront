import downloadIcon from '../assets/download.png'
import React from 'react';
import FileSaver from 'file-saver';
import axios from 'axios';


var DownloadButton = () => {
    const handleExport = () => {
        axios.get(`http://127.0.0.1:8000/get_all_likes/`)
        .then(response => {
            const csvData = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
            FileSaver.saveAs(csvData, 'likes.csv');
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    return (
        <div>
              <button onClick={handleExport} className='download_button'><img className='download_img' src={downloadIcon} alt="Download"/></button>
        </div>
    )
}

export default DownloadButton