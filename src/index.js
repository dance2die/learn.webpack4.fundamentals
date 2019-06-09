import makeButton from './button';
import logoUrl from './webpack-logo.jpg';
import makeImage from './image';

console.log(`logoUrl`, logoUrl);

const button = makeButton('<strong>👨‍🎤 Awesome Button! 👍</strong>');
const image = makeImage(logoUrl);

document.body.appendChild(button);
document.body.appendChild(image);
