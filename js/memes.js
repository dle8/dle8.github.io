const memes = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 2,
  6: 2,
  7: 2,
  8: 1,
  9: 2,
  10: 1,
  11: 1,
  12: 1, 
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
}

Object.keys(memes).forEach((key, index) => {
  console.log(`../img/memes/${index + 1}.${(memes[key] === 1 ? 'jpg' : 'png')}`)

  document.getElementById('meme-field').innerHTML += `
    <img src="./img/memes/${index + 1}.${(memes[key] === 1 ? 'jpg' : 'png')}" class="meme" />
  `
});