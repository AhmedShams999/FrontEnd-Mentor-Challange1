window.addEventListener('load',function(){
  const text = document.getElementsByTagName('p');
  
  const count = text.length;

  for (let i = 0 ; i < count ; i++){
    const p = text[i];
    p.addEventListener('click', function(e){
      //console.log(e.target.querySelector('span'));
      const t = e.target.querySelector('span');
      const arrow = e.target.querySelector('.arrow'); 
      t.classList.toggle('span-show'); 
      p.classList.toggle('p-show');
      arrow.classList.toggle('arrow-flip');
    })
  }
 
})