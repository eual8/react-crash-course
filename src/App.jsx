import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob)
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}></Route>
        <Route path="/jobs" element={<JobsPage/>}></Route>
        <Route path="/add-job" met element={<AddJobPage addJobSubmit={addJob}/>}></Route>
        <Route path="/jobs/:id" element={<JobPage/>} loader={jobLoader}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router}/>;
};

export default App;
