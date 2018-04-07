var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return(
        <div>
            <h3 className="text-center page-title">Examples</h3>
            <p className="">Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=hanoi">Hanoi, Viet Name</Link>
                </li>
                <li>
                    <Link to="/?location=paris">Paris, France</Link>                    
                </li>
            </ol>
        </div>
    )
}

module.exports = Examples;