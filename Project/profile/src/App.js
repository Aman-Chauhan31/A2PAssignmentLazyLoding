import { lazy, Suspense } from "react";
import Loader from "./Loader/Loader";
const MainPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Main")), 4000);
  });
});

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <MainPage />
      </Suspense>
    </div>
  );
}

export default App;
