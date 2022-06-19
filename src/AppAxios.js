import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserProfile from "./components/UserProfile";



const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/users/";
    const fetchUsers = async () => {
        try{
            const { data } = await axios.get(API_URL);
            setUsers(data);
            setError(null);
            setIsLoading(false);
        } catch(err){
            setError(err)
        } finally{
            setIsLoading(false);
        }
    };

    fetchUsers();

  }, []);

  const handleRefresh = () => {} // window.location.reload(true);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Sorry there was an error</h1>;
  return (
    <div className="container">
      {users.map(user => <UserProfile user={user} key={user.id} />)}
    </div>
  )
};


export default App;
