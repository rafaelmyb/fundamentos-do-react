import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title:"Titulo da noticia 01",
          subtitle:"Subtitulo da noiticia 01"
        }}
      />

      <Post 
        likes={30}
        post={{
          title:"Titulo da noticia 02",
          subtitle:"Subtitulo da noiticia 02"
        }}
      />

      <Post
        likes={50}
        post={{
          title:"Titulo da noticia 03",
          subtitle:"Subtitulo da noiticia 03"
        }}
      />
    </>
	)
}

export default App;