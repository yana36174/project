import './style.scss'
import './components/buttons/index'
window.jQuery = window.$ = require('./scripts/jquery-3.4.1.min.js');
require('./scripts/nativemultiple.jquery.min.js')
import './styles/slider.css'

// console.log($('.title'))

$('input.slider').nativeMultiple({
        stylesheet: "slider",
        onCreate: function() {
            console.log(this);
        },
        onChange: function(first_value, second_value) {
            console.log('onchange', [first_value, second_value]);
        },
        onSlide: function(first_value, second_value) {
            console.log('onslide', [first_value, second_value]);
        }
    });