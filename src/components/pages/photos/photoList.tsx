import React from 'react';
import PhotoItem from './photo';
import { PhotoProps } from '../../../types/types';
import { Link } from 'react-router-dom';

export default function PhotoList({ photo }: { photo: PhotoProps }) {
  return (
    <Link to={`/photos/${photo.id}`}>
      <PhotoItem photo={photo} />
    </Link>
  );
}
