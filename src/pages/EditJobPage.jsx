import {useLoaderData} from "react-router-dom";
import JobForm from '../components/JobForm';

const EditJobPage = ({updateJobSubmit}) => {
  const job = useLoaderData();

  return (
    <JobForm 
      initialJob={job} 
      onSubmit={updateJobSubmit} 
      formType="edit"
      redirectPath={`/jobs/${job.id}`}
    />
  );
};

export default EditJobPage;
