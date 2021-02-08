import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import {
  CommentsButton,
  CommentsForm,
  CommentsTextarea,
} from './PhotoCommentsForm.styled';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, token, { comment });

    const { response, json } = await request(url, options);

    if (response.ok) {
      // Limpando o comentário recém digitado
      setComment('');
      // 🔙 Usando o callback novamente para ter acesso aos comentários antigos, desestruturo os comentários antigos e concateno o novo comentário no submit, para sempre aparecer o comentário novo reativamente.
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <CommentsForm onSubmit={handleSubmit}>
      <CommentsTextarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        name="comment"
        id="comment"
        placeholder="Comente..."
      ></CommentsTextarea>
      <CommentsButton>
        <Enviar />
      </CommentsButton>
      <Error error={error} />
    </CommentsForm>
  );
};

export default PhotoCommentsForm;
