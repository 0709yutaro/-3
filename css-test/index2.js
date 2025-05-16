const start = document.getElementById('start'); 
const image = document.getElementById('image'); 

start.addEventListener('click', () => {
  image.animate(
    [
      { transform: 'translateX(0)'}, 
      { transform: 'translateX(200px)' } 
    ], 
    
    {
      fill: 'backwards', 
      duration: 1000, 
    },
  );
});
