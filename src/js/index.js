import '../scss/style.scss';
console.log('new to webpack!');

async function getUserAsync() 
{
  let response = await fetch(`https://api.github.com/users`);
  let data = await response.json()
  return console.log(data);
}
getUserAsync(); 
import cube from './test.js';
console.log(cube(3)); // 27