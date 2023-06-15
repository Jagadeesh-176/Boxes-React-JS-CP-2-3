const Box = props => {
  //  Write your code here.
  const {text, className, paraClassName} = props
  return (
  <div className = {className}>
    <p className = {paraClassName}>{text}</p>
  </div>
  )
}

const element = (
  //  Write your code here. 
  <div className = "main-container">
    <h1 className = "heading">Boxes</h1>
    <Box text = "Small" className = "small-container" paraClassName = "paraText" />
    <Box text = "Medium" className = "medium-container" paraClassName = "paraText" />
    <Box text = "Large" className = "large-container" paraClassName = "paraText" />
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
