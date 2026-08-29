const ErrorMessage = ({ foodItems }) => {
  return <>
    {foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null}
  </>
}

export default ErrorMessage;