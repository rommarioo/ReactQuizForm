import FinalyForm from "../FinalyForm";
import Header from "../Header";

const FinalyStep = () => {
  return (
    <>
      <Header />
      <FinalyForm nextStep={"success"} />
    </>
  );
};

export default FinalyStep;
