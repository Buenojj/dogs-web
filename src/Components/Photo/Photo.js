import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import PhotoContent from './PhotoContent';
import { MainSectionContainer } from '../../styles';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <MainSectionContainer>
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </MainSectionContainer>
    );
  else return null;
};

export default Photo;
