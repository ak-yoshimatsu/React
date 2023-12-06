import useSWR, { Fetcher } from 'swr';
import { PhotoDetailSWR, PhotoListSWR, PhotoProps } from '../../../types/types';

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

const fetcherDetail: Fetcher<PhotoProps, string> = (uri) =>
  fetch(domain + uri).then((res) => res.json());
export function usePhotoById(id: string): PhotoDetailSWR {
  const { data, error, isLoading } = useSWR<PhotoProps, Error>(
    `/photos/${id}?albumId=1`,
    fetcherDetail
  );

  return {
    photo: data,
    isLoading: isLoading,
    isError: error,
  };
}
