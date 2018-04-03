var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

// Lấy giá trị weather từ API ở trang openweathermap.org Tạo Tài khoản + Tạo 1
// key: 837a333216fd7fe79c96d6fd4db60b31 Xem giá trị JSON: vào trang
// jsoneditoronline.org

var Weather = React.createClass({
    getInitialState: function () {
        return {
          isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        // debugger;
        this.setState({isLoading: true});
        // debugger;
        openWeatherMap
            .getTemp(location)
            .then(function (temp) {
                that.setState( {
                  isLoading: false,
                  location: location, 
                  temp: temp
                });
            }, function (errorMessage) {
              that.setState({
                isLoading: false
              });
              alert(errorMessage);
            }
          );      
          // debugger;
    },
    render: function () {
              var {isLoading, temp, location} = this.state;
              
              function renderMessage(){
                if(isLoading){
                  return <h3>Fetching weather...</h3>
                }else if(temp && location){
                  return <WeatherMessage temp={temp} location={location}/>;
                }
              }

              return (
                <div>
                    <h3>Weather Component</h3>
                    <WeatherForm onSearch={this.handleSearch}/>
                    {renderMessage()}
                </div>
               )
    }
});

module.exports = Weather;