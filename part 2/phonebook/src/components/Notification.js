const Notification =({message, bad}) => {
  const notificationStyle = {
    color: 'green',
    fontSize: 16,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderColor: 'green',
    borderRadius: '0.25em',
    padding: '0.5em',
    margin: '0.5em'
  }
  if (bad) {
    notificationStyle.color = 'red'
    notificationStyle.borderColor = 'red'
  }
  if (message === null){
    return null
  } else {
    return (
      <div 
      className="error"
      style={notificationStyle}>
        {message}
      </div>
    )
  }
}

export default Notification