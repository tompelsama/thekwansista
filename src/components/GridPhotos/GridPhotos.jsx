import React from 'react'
import './GridPhotos.css'

const GridPhotos = () => {

    const photos = [...Array(35)]

    return <div className="collage">
        <div className="photo-block">
            <div className="photo-grid">
                {
                    photos.map((e, index) => {
                        return <div className="photo" key={index}>
                            <img src={`https://picsum.photos/600/800?random=${index}`} alt="" />
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default GridPhotos