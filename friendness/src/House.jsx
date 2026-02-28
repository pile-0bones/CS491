import './App.css'
const House = (props) => (
    <>
      <div>
        My house is named {props.name}
        <div>{props.children}</div>
      </div>
    </>
)

export default House