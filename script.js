const mainBtn = document.getElementById('doombtn');
let colorElements = document.querySelectorAll('.color');
const body = document.querySelector('body');

const getRanHex = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
}

const scroll = (e) => {
  e.preventDefault();
    let main = document.querySelectorAll('.color');
    console.log(`Modifying element at index ${n}:`, main[n]);
    

    const newApp = document.createElement('div');
    newApp.className = 'app';
    const newColor = document.createElement('div');
    newColor.className = 'color';
    newApp.appendChild(newColor);
    const likeBtn = document.createElement('button');
    newApp.appendChild(likeBtn);
    const fragment = document.createDocumentFragment();
    fragment.appendChild(newApp);
    document.body.appendChild(fragment);
    newColor.style.backgroundColor = `#${getRanHex(6)}`;
    n += 1;

    likeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        likeBtn.classList.toggle('red-bg');
    });

    window.scrollTo(0, window.innerHeight * (n));
}

let n = 1;
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown'){
      scroll(e);
    }
});

mainBtn.addEventListener('click', (e) => {scroll(e);});