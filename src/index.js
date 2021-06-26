import './sass/main.scss';
const debounce = require('lodash.debounce');
const Handlebars = require("handlebars");

// импорт из fetchCountries возвращающей промис с массивом стран, результат запроса к API.
import fetchCountries from './fetchCountries';
