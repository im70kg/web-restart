import './index.css';

import img from './img/logo.png';

console.log(img);

const imgEl = document.createElement('img');
imgEl.src = img;
document.body.appendChild(imgEl);
