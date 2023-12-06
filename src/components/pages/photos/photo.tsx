import React from 'react';
import './index.css';
import { PhotoProps } from '../../../types/types';

export default function PhotoItem({ photo }: { photo: PhotoProps }) {
  return (
    <div className="card">
      <img src={photo.thumbnailUrl} alt="thumbnail" style={{ width: '100%' }} />
      <div className="container">
        <h4>No.{photo.id}</h4>
        <p>{photo.title}</p>
      </div>
    </div>
  );
}
