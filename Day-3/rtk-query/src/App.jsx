import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "./services/jsonPlaceholderApi";
function App() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: 99999 });
  const { data, error, isLoading } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating, error: createError }] =
    useCreatePostsMutation();
  console.log(data);

  if (isLoading) return <h1>Loading.....</h1>;
  if (error) return <h1>there was an error :(</h1>;
  if (createError) return <h1>There was error creating post</h1>;

  const handleCreatePost = async () => {
    await createPost(newPost);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="title.."
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Body.."
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <button onClick={handleCreatePost} disabled={isCreating}>
          Create Post
        </button>
      </div>
      {data && data.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

export default App;
