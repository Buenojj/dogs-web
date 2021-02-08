import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { DeleteButton } from './PhotoDelete.styled';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar essa foto?');

    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);

      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <DeleteButton disabled>Deletando...</DeleteButton>
      ) : (
        <DeleteButton onClick={handleClick}>Deletar</DeleteButton>
      )}
    </>
  );
};

export default PhotoDelete;
