// assets/js/people-renderer.js
(async function(){
  const dataUrl = 'assets/data/backoffice-staff.json';
  const resp = await fetch(dataUrl);
  const staff = await resp.json();

  // build map by department and by id
  const byId = {};
  const depts = {};
  staff.forEach(s => { byId[s.id]=s; depts[s.department]=depts[s.department]||[]; depts[s.department].push(s); });

  const orgTree = document.getElementById('org-tree');

  // render each department column
  Object.keys(depts).forEach(dept => {
    const col = document.createElement('div'); col.className='org-column';
    const h = document.createElement('h2'); h.textContent = dept; col.appendChild(h);

    // find head (person with reports in this dept or first listed)
    const head = depts[dept].find(p => p.reports && p.reports.length>0) || depts[dept][0];
    const leader = document.createElement('div'); leader.className='leader-card';
    leader.innerHTML = `<img src="${head.photo}" alt="${head.name}"><div><strong>${head.name}</strong><div style="color:#666">${head.title}</div></div>`;
    leader.addEventListener('click', ()=> openProfile(head.profileUrl));
    col.appendChild(leader);

    // team grid
    const grid = document.createElement('div'); grid.className='team-grid';
    depts[dept].forEach(member=>{
      const item = document.createElement('div'); item.className='team-item';
      item.innerHTML = `<img src="${member.photo}" alt="${member.name}"><div><strong>${member.name}</strong><div style="color:#666;font-size:0.95rem">${member.title}</div></div>`;
      item.addEventListener('click', ()=> openProfile(member.profileUrl));
      // quick chat trigger
      item.setAttribute('data-assistant', member.id);
      grid.appendChild(item);
    });
    col.appendChild(grid);
    orgTree.appendChild(col);
  });

  // open profile helper
  window.openProfile = function(url){
    window.location.href = url;
  };

  // Narrator intro (sample text)
  const narratorIntro = `Let me introduce you to Ross House. Meet our departmental leads and assistants — let them tell you how they work and how they can help your project.`;

  document.getElementById('play-narrator').addEventListener('click', ()=>{
    appendChat('narrator', narratorIntro);
  });

  // Chatbot simple logic
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  function appendChat(who, text){
    const el = document.createElement('div');
    el.style.marginBottom='0.6rem';
    el.innerHTML = `<strong style="display:block">${who==='user'?'You': who==='narrator' ? 'Narrator' : byId[who].name}</strong><div style="color:#333">${text}</div>`;
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSend.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter') handleSend(); });

  function handleSend(){
    const text = chatInput.value.trim(); if(!text) return;
    appendChat('user', text);
    chatInput.value='';
    // simple intent parsing
    const lower = text.toLowerCase();
    if(lower.includes('governance')) return assistantIntroduce('governance-elysian');
    if(lower.includes('documentation')) return assistantIntroduce('documentation-aster');
    if(lower.includes('archive')) return assistantIntroduce('archive-orin');
    if(lower.includes('systems')) return assistantIntroduce('systems-kael');
    if(lower.includes('emotional')) return assistantIntroduce('emotional-seraphine');
    if(lower.includes('introduce') || lower.includes('who')) return appendChat('narrator','Say a department name (Governance, Documentation, Archive, Systems, Emotional) and I will introduce the lead.');
    appendChat('narrator','I can introduce departments: Governance, Documentation, Archive, Systems, Emotional. Try: "Introduce Governance".');
  }

  function assistantIntroduce(id){
    const person = byId[id];
    if(!person) return appendChat('narrator','I could not find that assistant.');
    // assistant greeting
    const greeting = `Hi, I'm ${person.name}. ${person.bio} You can email me at ${person.email}.`;
    appendChat(person.id, greeting);
  }

  // allow clicking team items to trigger assistant intro
  document.querySelectorAll('.team-item').forEach(el=>{
    el.addEventListener('click', (e)=>{
      const id = el.getAttribute('data-assistant');
      if(id) assistantIntroduce(id);
    });
  });

})();
