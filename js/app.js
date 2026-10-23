(() => {
  'use strict';
  const {courses,resources} = window.PORTAL_DATA;
  const $ = sel => document.querySelector(sel);
  const escapeHTML = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm = s => String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const typeLabels = {presentacion:'Presentación',practica:'Práctica',codigo:'Código',lectura:'Lectura',video:'Video'};
  const courseName = id => courses.find(c=>c.id===id)?.short || 'Asignatura';
  const safeURL = u => { const value=String(u || '').trim(); return /^(https:\/\/|http:\/\/|\.\.?\/|[\wáéíóúñÁÉÍÓÚÑ-])/.test(value) && !/^(javascript|data):/i.test(value) ? value : '#'; };

  function renderCourses(){
    const q=norm($('#buscar-cursos').value);
    const items=courses.filter(c=>norm([c.name,c.description,c.category].join(' ')).includes(q));
    $('#course-grid').innerHTML=items.map(c=>`<article class="course-card"><div class="course-icon ${escapeHTML(c.color)}" aria-hidden="true">${escapeHTML(c.icon)}</div><p class="eyebrow blue">${escapeHTML(c.category)}</p><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.description)}</p><div class="card-bottom"><span>${resources.filter(r=>r.course===c.id).length} materiales</span><button class="card-link" data-course="${escapeHTML(c.id)}">Ver unidad <span aria-hidden="true">→</span></button></div></article>`).join('');
    $('#course-empty').hidden=items.length>0;
  }
  function resourceCard(r){
    const url=safeURL(r.url);
    const isPDF=/\.pdf(?:[?#]|$)/i.test(url);
    return `<article class="resource-item"><span class="file-icon" aria-hidden="true">${r.type==='codigo'?'⌘':r.type==='video'?'▶':'▤'}</span><div class="resource-info"><div class="resource-title">${escapeHTML(r.title)}${r.demo?'<span class="demo">DEMOSTRACIÓN</span>':''}</div><p>${escapeHTML(courseName(r.course))} · ${escapeHTML(r.topic)} · ${escapeHTML(typeLabels[r.type]||r.type)}</p></div><div class="resource-actions">${isPDF?`<button class="small-btn" data-view="${escapeHTML(r.id)}">Visualizar</button>`:''}<a class="small-btn outlined" href="${escapeHTML(url)}" ${/^https?:/.test(url)?'target="_blank" rel="noopener noreferrer"':''} ${!/^https?:/.test(url)?'download':''}>${/^https?:/.test(url)?'Abrir ↗':'Descargar ↓'}</a></div></article>`;
  }
  function renderResources(){
    const query=norm($('#buscar-materiales').value),course=$('#filtrar-curso').value,type=$('#filtrar-tipo').value;
    const filtered=resources.filter(r=>(course==='todos'||r.course===course)&&(type==='todos'||r.type===type)&&norm([r.title,r.topic,courseName(r.course),r.type].join(' ')).includes(query));
    $('#resource-list').innerHTML=filtered.map(resourceCard).join('');
    $('#resource-empty').hidden=filtered.length>0;
  }
  function openCourse(id){
    const c=courses.find(x=>x.id===id); if(!c)return;
    $('#course-dialog-title').textContent=c.name;
    $('#course-dialog-desc').textContent=c.description;
    $('#course-dialog-topics').innerHTML=c.topics.map(t=>`<li>${escapeHTML(t)}</li>`).join('');
    const items=resources.filter(r=>r.course===id);
    $('#course-dialog-resources').innerHTML=items.length?items.map(resourceCard).join(''):'<p class="muted">Los materiales de esta asignatura se agregarán próximamente.</p>';
    $('#course-dialog').showModal();
  }
  function openViewer(id){
    const r=resources.find(x=>x.id===id);if(!r||!/\.pdf(?:[?#]|$)/i.test(r.url))return;
    $('#viewer-title').textContent=r.title;
    $('#pdf-frame').src=safeURL(r.url);
    $('#viewer-open').href=safeURL(r.url);
    $('#viewer-dialog').showModal();
  }
  document.addEventListener('click',e=>{
    const c=e.target.closest('[data-course]');if(c)openCourse(c.dataset.course);
    const v=e.target.closest('[data-view]');if(v)openViewer(v.dataset.view);
    const close=e.target.closest('[data-close]');if(close)$('#'+close.dataset.close)?.close();
    if(e.target.closest('#nav a')) {$('#nav').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');}
  });
  ['#course-dialog','#viewer-dialog'].forEach(sel=>$(sel).addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close();}));
  $('#viewer-dialog').addEventListener('close',()=>$('#pdf-frame').removeAttribute('src'));
  $('#buscar-cursos').addEventListener('input',renderCourses);
  $('#buscar-materiales').addEventListener('input',renderResources);
  $('#filtrar-curso').addEventListener('change',renderResources);
  $('#filtrar-tipo').addEventListener('change',renderResources);
  $('#filtrar-curso').innerHTML='<option value="todos">Todas las asignaturas</option>'+courses.map(c=>`<option value="${escapeHTML(c.id)}">${escapeHTML(c.short)}</option>`).join('');
  $('#count-courses').textContent=courses.length;
  $('#count-resources').textContent=resources.length;
  $('#current-year').textContent='© '+new Date().getFullYear();
  $('#menu-toggle').addEventListener('click',()=>{const open=$('#nav').classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(open));});
  const setTheme = dark => {document.documentElement.dataset.theme=dark?'dark':'light';$('#theme-toggle').textContent=dark?'☀':'◐';$('#theme-toggle').setAttribute('aria-label',dark?'Activar modo claro':'Activar modo oscuro');};
  let dark=false;try{dark=localStorage.getItem('portal-theme')==='dark';}catch(_){} setTheme(dark);
  $('#theme-toggle').addEventListener('click',()=>{dark=!dark;setTheme(dark);try{localStorage.setItem('portal-theme',dark?'dark':'light');}catch(_){}});
  renderCourses();renderResources();
})();
