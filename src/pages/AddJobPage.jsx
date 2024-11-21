import JobForm from '../components/JobForm';

const AddJobPage = ({addJobSubmit}) => {
  return (
    <JobForm 
      onSubmit={addJobSubmit} 
      formType="add"
    />
  );
};

export default AddJobPage;
