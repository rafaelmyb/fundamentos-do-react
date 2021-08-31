import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Titulo 01', subtitle: 'Subtitulo 01', likes: 20 },
    { id: Math.random(), title: 'Titulo 02', subtitle: 'Subtitulo 02', likes: 10 },
    { id: Math.random(), title: 'Titulo 03', subtitle: 'Subtitulo 02', likes: 50 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: prevState.length < 9 ? `Titulo 0${prevState.length + 1}` : `Titulo ${prevState.length + 1}`,
        subtitle: prevState.length < 9 ? `Subtitulo 0${prevState.length + 1}` : `Subtitulo ${prevState.length + 1}`,
        likes: prevState.length * 2 + 50,
      },
    ]);
  };

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
	)
}

export default App;