import { useSelector } from "react-redux";
import { RootState } from "./store";
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
    <div style={{ padding: 20 }}>
      {user ? (
        <>
          <div style={{ textAlign: "right" }}>
            <span>Вітаю, {user.email}</span>
            <button style={{ marginLeft: 10 }} onClick={() => dispatch(logout())}>
              Вийти
            </button>
          </div>
          <h2>Список курсів</h2>
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
