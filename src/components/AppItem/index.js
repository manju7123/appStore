import './index.css'

const AppItem = props => {
  const {appItems} = props
  const {appName, imageUrl} = appItems

  return (
    <li className="card">
      <img className="images" src={imageUrl} alt={appName} />
      <p className="title"> {appName} </p>
    </li>
  )
}
export default AppItem
