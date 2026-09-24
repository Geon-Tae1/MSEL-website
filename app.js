
(function(){
  var NAV=[
    {id:'home',label:'Home'},
    {id:'team',label:'Team',children:[{id:'advisor',label:'Advisor'},{id:'members',label:'Members'},{id:'alumni',label:'Alumni'}]},
    {id:'research',label:'Research'},
    {id:'publications',label:'Publications'},
    {id:'conference',label:'Conference'},
    {id:'lecture',label:'Lecture'},
    {id:'activities',label:'Activities'},
    {id:'notice',label:'Notice'},
    {id:'labaccess',label:'Lab Access Only',lock:true,children:[{id:'labaccess',label:'Project'}]},
    {id:'contact',label:'Contact'}
  ];
  var C2P={}; NAV.forEach(function(n){if(n.children)n.children.forEach(function(c){C2P[c.id]=n.id;});});
  var PREVIEW = (typeof window.__PREVIEW__!=='undefined' && window.__PREVIEW__);
  function href(id){return PREVIEW?('#'+id):(id==='home'?'index.html':id+'.html');}
  var MARK='<svg class="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="7" fill="var(--navy)"/><path d="M8 22.5h16M8 17.5h16M8 12.5h16M8 9h16" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".55"/><circle cx="12" cy="12.5" r="1.9" fill="#fff"/><circle cx="20" cy="17.5" r="1.9" fill="#fff"/><circle cx="16" cy="22.5" r="1.9" fill="#fff"/></svg>';
  var LOCK='<svg class="lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>';
  var CHEV='<svg class="cw" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  var BARS='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  var cur = document.body.getAttribute('data-page')||'home';

  function isActive(nid, active){ if(nid===active) return true; var p=C2P[active]; return p===nid; }
  function buildHeader(active){
    var links=NAV.map(function(n){
      var lk=n.lock?(' '+LOCK):'';
      // force a second row starting at "Activities" (balances the wrapped desktop nav: 6 / 4)
      var brk=(n.id==='activities')?'<span class="nav-break" aria-hidden="true"></span>':'';
      if(n.children){
        var sub=n.children.map(function(c){return '<a href="'+href(c.id)+'" data-nav="'+c.id+'"'+(c.id===active?' class="active"':'')+'>'+c.label+'</a>';}).join('');
        var top='<a href="'+href(n.children[0].id)+'" data-nav="'+n.id+'"'+(isActive(n.id,active)?' class="active"':'')+'>'+n.label+lk+CHEV+'</a>';
        return brk+'<div class="nav-item">'+top+'<div class="dropdown">'+sub+'</div></div>';
      }
      return brk+'<a href="'+href(n.id)+'" data-nav="'+n.id+'"'+(n.id===active?' class="active"':'')+'>'+n.label+lk+'</a>';
    }).join('');
    return '<header class="nav"><div class="nav-in">'+
      '<a class="brand" href="'+href('home')+'">'+MARK+'<span class="bt"><b>Materials for Sustainable Energy Lab</b><span>Hanyang University</span></span></a>'+
      '<nav class="nav-links" id="menu">'+links+'</nav>'+
      '<div class="nav-right"><button class="icon-btn menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false">'+BARS+'</button></div>'+
      '</div></header>';
  }
  var FOOT='<footer><div class="wrap foot-in"><div class="fl">Materials for Sustainable Energy Lab</div><div class="fr">Hanyang University · Seoul, Republic of Korea</div></div></footer>';

  var head=document.getElementById('site-header'); if(head)head.innerHTML=buildHeader(cur);
  var foot=document.getElementById('site-footer'); if(foot)foot.innerHTML=FOOT;

  var mb=document.getElementById('menu-btn'), menu=document.getElementById('menu');
  if(mb)mb.addEventListener('click',function(){var o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o?'true':'false');});
  if(menu)menu.addEventListener('click',function(e){if(e.target.closest('a')){menu.classList.remove('open');if(mb)mb.setAttribute('aria-expanded','false');}});

  function observe(scope){
    var els=(scope||document).querySelectorAll('.reveal:not(.in)');
    if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -6% 0px'});els.forEach(function(el){io.observe(el);});}
    else els.forEach(function(el){el.classList.add('in');});
  }

  if(PREVIEW){
    var routes=[].slice.call(document.querySelectorAll('.route'));
    function setActive(id){var p=C2P[id];document.querySelectorAll('.nav-links a').forEach(function(a){var d=a.getAttribute('data-nav');a.classList.toggle('active',d===id||d===p);});}
    function show(id){
      var found=false;
      routes.forEach(function(r){var on=(r.getAttribute('data-route')===id);r.style.display=on?'':'none';if(on)found=true;});
      if(!found){routes.forEach(function(r){r.style.display=(r.getAttribute('data-route')==='home')?'':'none';});id='home';}
      setActive(id);
      var act=document.querySelector('.route[data-route="'+id+'"]'); if(act)observe(act);
      window.scrollTo(0,0);
    }
    window.addEventListener('hashchange',function(){show((location.hash||'#home').slice(1));});
    show((location.hash||'#home').slice(1));
  } else {
    observe(document);
  }
})();
