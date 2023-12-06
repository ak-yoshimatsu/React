import useSWR, { Fetcher } from 'swr';
import { PhotoListSWR, PhotoProps } from '../../../types/types';

const domain = 'https://jsonplaceholder.typicode.com';
const fetcher: Fetcher<PhotoProps[], string> = (uri) =>
  fetch(domain + uri).then((res) => res.json());

export function usePhotosList(): PhotoListSWR {
  const { data, error, isLoading } = useSWR<PhotoProps[], Error>(
    '/photos?albumId=1',
    fetcher
  );

  return {
    photos: data,
    isLoading: isLoading,
    isError: error,
  };
}
