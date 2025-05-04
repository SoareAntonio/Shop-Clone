const xhr=new XMLHttpRequest();
xhr.addEventListener('load',()=>{
  console.log(xhr.response);
});
xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');
//to use GET is like to use a browser
xhr.send();
xhr.response