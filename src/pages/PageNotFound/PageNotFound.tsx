import errorMessage from "./error-message-not-found.png";
function PageNotFound() {
  return (
    <div>
      <img
        src={errorMessage}
        alt="Page not found"
        className=" max-w-max max-h-max"
      />
    </div>
  );
}

export default PageNotFound;
