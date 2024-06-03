import { HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <HashLoader
      color="#7e22ce"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
