const Notification = (props) => {
    const {className, icon, message} = props
    const classNameContainer = `notification-container ${className}`

    return (
        <div className=${classNameContainer}>
            <img className="image" src={url}/>
            <p className="message">{message}</p>
        </div>
    )
};

const element = (
  <div className="bg-container">
      <h1 className="title">Notifications</h1>
      <div className="container">
       <Notification
            className="primary-bg-color"
          url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          message="Information Message"/>
        
        <Notification
          className="success-bg-color"
          url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          message="Success Message"/>
       
        <Notification
            className="warning-bg-color"
          url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" 
          message="Warning Message"/>
      
        <Notification
            className="danger-bg-color"
          url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          message="Danger Message"/>
      
      </div>
    </div>
  
);

ReactDOM.render(element, document.getElementById("root"));
