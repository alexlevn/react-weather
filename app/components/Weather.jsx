var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

// Lấy giá trị weather từ API ở trang openweathermap.org Tạo Tài khoản + Tạo 1
// key: 837a333216fd7fe79c96d6fd4db60b31 Xem giá trị JSON: vào trang
// jsoneditoronline.org

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false, 
      errorMessage: undefined
    }
  },
  handleSearch: function (location) {
    var that = this;

    // debugger;
    this.setState({
      isLoading: true, 
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap
      .getTemp(location)
      .then(function (temp) {
        that.setState({
          isLoading: false,
          location: location,
          temp: temp
        });
      }, function (e) {
        that.setState({
          isLoading: false, 
          errorMessage: e.message
        });
      });
  },
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      console.log("Trang thai: " + errorMessage);
      if (typeof errorMessage === "string") {
        return (
          <div>
            <ErrorModal message={errorMessage}/>
          </div>
        );
      } else{
        // return(<h3>.......</h3>); /// Xong 57, bắt đầu 58
      }
    }

    return (
      <div>
        <h3 className="text-center page-title">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/> 
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;