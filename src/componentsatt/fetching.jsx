import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// interface Post {
//   id: number;
//   title: string;
// }

export default function Demo() {
  const [error, setError] = useState();
  const [id,setid]=useState();
  const [title,settitle]=useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
 
//   const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

 const abortControllerRef = useRef(null);
// const login = async () => {
//   try {
//     const data = await post("/login", { email, password });
//     console.log(data);
//   } catch (err) {
//     console.error(err.response?.data?.message || err.message);
//   }
// };


  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const info = (await response.json());
        setData(prev => [...prev, ...info]);
        // setPosts(posts);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Aborted");
          return;
        }

        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Data Fething in React</h1>
      <button onClick={() => setPage(page + 1)}>Increase Page ({page})</button>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}