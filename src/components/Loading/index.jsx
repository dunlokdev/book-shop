import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={style}>
      <ScaleLoader color="#36d7b7" height={50} width={6} />
    </div>
  );
};
export default Loading;
