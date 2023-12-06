export type PhotoProps = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export type PhotoListSWR = {
  photos: PhotoProps[] | undefined;
  isLoading: boolean;
  isError: Error | undefined;
};

export type PhotoDetailSWR = {
  photo: PhotoProps | undefined;
  isLoading: boolean;
  isError: Error | undefined;
};
