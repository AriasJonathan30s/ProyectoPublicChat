let loader;

function load(){
  this.loader = {
    'body': document.getElementById('body').textContent,
    'user': document.getElementById('usr').textContent
  }
  console.log(this.loader);
}

function navBtn(id){
  redirectTo(id);
  
}

function redirectTo(where){
  console.log(where);
}


