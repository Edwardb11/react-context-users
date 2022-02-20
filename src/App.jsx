import "./App.css";
// Componente
import Profile from "./components/Profile";
import UserList from "./components/UserList";

// context
import UserState from "./context/Users/UserState";

function App() {
  return (
    <UserState>
      <UserList></UserList>
      <Profile></Profile>
    </UserState>
  );
}

export default App;
