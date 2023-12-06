import React from 'react'; // 追加
import { usePhotosList } from '../../../lib/api/photos/getter';
import PhotoItem from './PhotoItem';

export default function Photos() {
  const { photos, isLoading, isError } = usePhotosList();

  if (isError) return <div style={{ color: 'red' }}>Failed to Load</div>;
  if (isLoading) return <div style={{ color: 'blue' }}>Loading...</div>;

  return (
    <>
      <h1>Photo</h1>
      {photos?.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </>
  );
}
