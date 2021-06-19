import React from 'react'
import '../css/Photo.css'

export default function Photo({ title, thumbnailUrl }) {
    return (
        <div>
            <figure className="position-relative">
                <img src={thumbnailUrl} alt={title} />
                <figcaption className="photo-title">{ title }</figcaption>
            </figure>
        </div>
    )
}