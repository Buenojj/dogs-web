import React from 'react';
import { UserContext } from '../../UserContext';
import { CommentsUl } from './PhotoComments.styled';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);

  // 🔙 Função callback dentro do useState para ser executada uma vez como estado inicial, setando a variavel comments com os props.comments que já vem como propriedade!
  const [comments, setComments] = React.useState(() => props.comments);
  return (
    <>
      <CommentsUl>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentsUl>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
