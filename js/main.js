(function(){
var nav=document.getElementById('nav'),btn=document.getElementById('menu');
function set(o){nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o?'true':'false')}
btn.addEventListener('click',function(){set(!nav.classList.contains('open'))});
document.querySelectorAll('#links a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
})();

(function(){
var links=document.querySelectorAll('#links a[href^="#"]'),secs=document.querySelectorAll('main section[id]');
if(!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id)})}
})},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(function(s){io.observe(s)});
})();
