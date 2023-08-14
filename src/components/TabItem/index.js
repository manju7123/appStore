import './index.css'

const TabItem = props => {
  const {tabItems, appItems, isActive} = props
  const {tabId, displayText} = tabItems

  const onTab = () => {
    appItems(tabId)
  }

  const colorBtn = isActive && 'color-btn'

  return (
    <li className="list-items">
      <button className={`btn ${colorBtn}`} type="button" onClick={onTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
