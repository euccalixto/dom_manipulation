function remove(){
  document.querySelector('#hi').remove()
}
function add(){
  const body= document.body;
  const p= document.createElement('p');
  p.innerText = 'Hello World'
  p.id='hi'
  body.append(p)
}
