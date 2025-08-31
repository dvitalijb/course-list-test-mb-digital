import { useSelector } from "react-redux";
import type { RootState } from "./store";
import AuthForm from "./components/AuthForm";
import { logout } from "./features/authSlice";
import { useDispatch } from "react-redux";
import CourseList from "./components/CourseList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const user = useSelector((state: RootState) => state.auth.user);
  const video = useSelector((state: RootState) => state.video.currentVideo);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {user ? (
        <>
          <div className="greeting">
            <span>Hello, {user.email}</span>
            <button className="greeting-button" onClick={() => dispatch(logout())}>
              Log Out
            </button>
          </div>
          <h2 className="header-list">List of courses</h2>
          <CourseList />
          {video && <VideoPlayer />}
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}

export default App;
