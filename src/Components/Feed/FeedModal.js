import React from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFetch from '../../Hooks/useFetch';
import PhotoContent from '../Photo/PhotoContent';
import { Modal } from './FeedModal.styled';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = function (e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  };

  return (
    <Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </Modal>
  );
};

export default FeedModal;
