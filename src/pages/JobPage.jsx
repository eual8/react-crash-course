import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <h1>{job.title}</h1>
          
        </div>
      )}
    </>
  );
};

export default JobPage;
