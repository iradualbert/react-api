import { useState, useEffect } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import useFetch from "./hooks/useFecth";
import useFetchDynamic from "./hooks/useFetchDynamic";

const API_URL = "https://jsonplaceholder.typicode.com/users/";

const App = () => {

  const { data: users, isLoading, error } = useFetchDynamic({ url: API_URL});

  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // FETCH API
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(API_URL)
  //   .then( response  => response.json())
  //   .then( data => {
  //     setUsers(data);
  //   })
  //   .catch( err => {
  //       setError(err);
  //       console.log(err);
  // });
  //   .finally( () => setIsLoading(false));
  // }, []);

  // FETCH API async 

  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(API_URL);
  //       const data = await res.json();
  //       setUsers(data);

  //     } catch (err) {
  //       setError(err)
  //       console.log(err);
  //     }
  //     finally {
  //       setIsLoading(false)
  //     }
  //   };

  //   fetchData();

  // }, []);

  // 

  const handleRefresh = () => window.location.reload(true);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Sorry there was an error: <button onClick={handleRefresh}>Refresh</button></h1>;
  return (
    <div className="container">
      {users.map(user => <UserProfile user={user} key={user.id} />)}
    </div>
  )
};


export default App;
