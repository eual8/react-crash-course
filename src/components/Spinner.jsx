import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#36d7b7"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
