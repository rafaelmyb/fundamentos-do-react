import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import Button from './Button';
import { ThemeProvider } from './ThemeProvider';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Titulo 01', subtitle: 'Subtitulo 01', likes: 20, read: false },
    { id: Math.random(), title: 'Titulo 02', subtitle: 'Subtitulo 02', likes: 10, read: true },
    { id: Math.random(), title: 'Titulo 03', subtitle: 'Subtitulo 02', likes: 50, read: false },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: prevState.length < 9 ? `Titulo 0${prevState.length + 1}` : `Titulo ${prevState.length + 1}`,
        subtitle: prevState.length < 9 ? `Subtitulo 0${prevState.length + 1}` : `Subtitulo ${prevState.length + 1}`,
        likes: prevState.length * 2 + 50,
        read: (Math.random() * 10) > 5 ? true : false,
      },
    ]);
  };

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana
          <Button onClick={handleRefresh}>Atualizar</Button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
	)
}

export default App;