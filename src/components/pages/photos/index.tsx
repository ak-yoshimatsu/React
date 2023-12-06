import React from 'react'; // 追加
import { usePhotosList } from '../../../lib/api/photos/getter';
import PhotoList from './photoList';

export default function Photos() {
  const { photos, isLoading, isError } = usePhotosList();

  if (isError) return <div style={{ color: 'red' }}>Failed to Load</div>;
  if (isLoading) return <div style={{ color: 'blue' }}>Loading...</div>;

  return (
    <>
      <h1>Photo</h1>
      {photos?.map((photo) => (
        <PhotoList key={photo.id} photo={photo} />
      ))}
    </>
  );
}
