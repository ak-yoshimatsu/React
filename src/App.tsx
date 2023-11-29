import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addPost, deletePost } from './features/Posts';
import { useState } from 'react';

function App() {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const postList = useSelector<any, any>((state) => state.posts.value);

  const dispath = useDispatch();

  const handleClick = () => {
    dispath(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );

    setName('');
    setContent('');
  };

  return (
    <div className="App">
      <div>
        <h1>React-Redux 掲示板</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="お名前"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post: any) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispath(deletePost({ id: post.id }))}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
