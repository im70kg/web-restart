import './index.css';

import img from './img/logo.png';

console.log(img);

const imgEl = document.createElement('img');
imgEl.src = img;
// base64
document.body.appendChild(imgEl);
