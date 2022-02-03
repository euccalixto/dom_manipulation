const div=document.querySelector("#test-children");
const divChildren= Array.from(div.children);
const result = document.querySelector("input");

divChildren.forEach(child => {
  if(child.id="two"){
    result.value=child.id;
  }
})