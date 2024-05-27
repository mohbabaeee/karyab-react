import { HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <HashLoader
      color="#15803d"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
