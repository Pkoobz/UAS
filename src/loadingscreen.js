var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <title>Loading Screen</title>
          <style dangerouslySetInnerHTML={{__html: "\n    body {\n      margin: 0;\n      padding: 0;\n      background-color: black;\n      color: #fff;\n      font-family: Arial, sans-serif;\n      text-align: center;\n    }\n    .loading-screen {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-image: url(\"./img/clouds-moving.gif\");\n      background-repeat: no-repeat;\n      background-size: cover;\n      background-attachment: fixed;\n      z-index: 9999;\n      opacity: 0;\n      visibility: hidden;\n      transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;\n    }\n    .loading-screen.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    .loading-screen__content {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n    }\n    .loading-screen__message {\n      font-size: 24px;\n      margin-top: 10px;\n    }\n\n  " }} />
          <div className="loading-screen">
            <div className="loading-screen__content">
              <img src="./img/loading-img.gif" alt="Loading..." />
              <div className="loading-screen__message">Loading...</div>
            </div>
          </div>
          <h1>Welcome to TravelIndo</h1>
          <p>Discover Your Next Destination With Us!</p>
        </div>
      );
    }
  });