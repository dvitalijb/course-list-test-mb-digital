import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { logout } from "./features/authSlice";
import AuthForm from "./components/AuthForm";

function App() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      {user ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>Вітаю, {user.email}</h2>
          <button onClick={() => dispatch(logout())}>Вийти</button>
        </div>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}

export default App;
