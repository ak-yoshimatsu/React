import React from 'react';
import { usePhotoById } from '../../../lib/api/photos/getter';
import { useParams } from 'react-router';
import PhotoItem from './photo';
import { PhotoProps } from '../../../types/types';

export default function Detail() {
  const param = useParams<string>();
  const { photo, isLoading, isError } = usePhotoById(param.id as string);

  if (isError) return <div style={{ color: 'red' }}>Failed to Load</div>;
  if (isLoading) return <div style={{ color: 'blue' }}>Loading...</div>;

  return <PhotoItem photo={photo as PhotoProps} />;
}
