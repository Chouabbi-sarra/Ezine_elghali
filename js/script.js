/* ===== EZINE EL GHALI — script =====
   1) CONFIG : numéro, email, réseaux sociaux (à modifier ici)
   2) PRODUITS : liste, images, champs du formulaire
   3) Header / footer partagés, cartes produits, formulaire de commande */
const CONFIG={
  whatsapp:'213675207822',          // 0675207822 au format international
  tel:'0675207822',
  email:'Ezineelghali@gmail.com',
  adresse:'Cité Rym, Annaba, Algérie',
  formspree:'',                     // Collez ici votre URL Formspree (ex: https://formspree.io/f/xxxx) pour recevoir les demandes par email
  social:{Facebook:'#',Instagram:'#',TikTok:'#'}  // Remplacez # par vos liens
};
// t = taille, c = couleur, d = dimensions
const PRODUITS=[
 {id:'T-shirt',nom:'T-shirts',img:'tshirt',t:1,c:1,txt:'Coton doux, impression nette de votre logo pour vos équipes et événements.'},
 {id:'Polo',nom:'Polos',img:'polo',t:1,c:1,txt:'La tenue élégante de vos collaborateurs, brodée ou imprimée à vos couleurs.'},
 {id:'Sweat',nom:'Sweats',img:'sweat',t:1,c:1,txt:'Sweats à capuche confortables, personnalisés pour l\'hiver et le merchandising.'},
 {id:'Casquette',nom:'Casquettes',img:'casquette',c:1,txt:'Casquettes brodées ou imprimées, un classique de visibilité.'},
 {id:'Tote Bag',nom:'Tote Bags',img:'tote',c:1,txt:'Sacs en tissu pratiques et écologiques, avec votre marque en avant.'},
 {id:'Mug',nom:'Mugs',img:'mug',txt:'Mugs blancs imprimés en haute qualité, un cadeau qu\'on garde.'},
 {id:'Cartes de visite',nom:'Cartes de visite',img:'cartes',txt:'Cartes professionnelles au rendu premium, papier et finitions au choix.'},
 {id:'Flyers',nom:'Flyers',img:'flyers',txt:'Flyers et dépliants créatifs pour annoncer vos offres et vos événements.'},
 {id:'Habillage vitrine',nom:'Habillage vitrine',img:'vitrine',d:1,txt:''},
 {id:'Panneau publicitaire',nom:'Panneaux publicitaires',img:'panneau',d:1,txt:''}
];
const $=(s,r=document)=>r.querySelector(s);
const page=location.pathname.split('/').pop()||'index.html';
const lien=(h,t)=>`<a href="${h}" class="${page===h?'on':''}">${t}</a>`;

// --- Header ---
$('#header').innerHTML=`<div class="wrap nav">
 <a href="index.html" class="logo"><img src="images/logo.jpg" alt="Logo EZINE EL GHALI"><span>EZINE EL GHALI</span></a>
 <button class="burger" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
 <nav class="menu" id="menu">${lien('index.html','Accueil')}${lien('produits.html','Nos produits')}${lien('services.html','Nos services')}<a href="index.html#apropos">À propos</a>${lien('contact.html','Contact')}
 <a class="btn sm" href="commande.html">Demander un devis</a></nav></div>`;
$('.burger').onclick=e=>{const o=$('#menu').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};

// --- Footer ---
$('#footer').innerHTML=`<div class="wrap"><div class="fg">
 <div><h4>EZINE EL GHALI</h4><p>Votre image, notre créativité.<br>Agence publicitaire à Annaba depuis 2017.</p>
 <div class="soc">${Object.entries(CONFIG.social).map(([n,u])=>`<a href="${u}" aria-label="${n}" target="_blank" rel="noopener">${n[0]}</a>`).join('')}</div></div>
 <div><h4>Liens</h4><ul><li><a href="index.html">Accueil</a></li><li><a href="produits.html">Produits</a></li><li><a href="services.html">Services</a></li><li><a href="contact.html">Contact</a></li></ul></div>
 <div><h4>Contact</h4><ul><li>📍 ${CONFIG.adresse}</li><li>📞 <a href="tel:${CONFIG.tel}">${CONFIG.tel}</a></li><li>✉ <a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li></ul></div></div>
 <p class="copy">© ${new Date().getFullYear()} EZINE EL GHALI — Tous droits réservés</p></div>
 <a class="wa-fix" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Bonjour EZINE EL GHALI, je souhaite avoir des informations.')}" target="_blank" rel="noopener" aria-label="WhatsApp" title="Discuter sur WhatsApp"><svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.4.7 4.7 1.9 6.6L3 29l7.100-2.300c1.800 1 3.800 1.500 5.900 1.500 6.900 0 12.600-5.600 12.600-12.500S22.900 3 16 3zm0 22.900c-1.900 0-3.700-.5-5.300-1.500l-.4-.2-4.200 1.400 1.400-4.100-.3-.4c-1.100-1.700-1.700-3.600-1.700-5.600C5.500 9.800 10.200 5.200 16 5.200s10.500 4.600 10.500 10.300S21.800 25.900 16 25.900zm5.800-7.700c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100c-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.300-.2-.3 0-.5.1-.7l.5-.6c.2-.2.200-.3.300-.5.100-.2.100-.4 0-.6l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400-.3.300-1.200 1.200-1.200 2.900s1.200 3.400 1.400 3.600c.2.200 2.400 3.700 5.900 5.100.8.400 1.500.6 2 .7.8.300 1.600.2 2.200.1.700-.1 1.900-.8 2.200-1.500.3-.8.3-1.400.2-1.500-.1-.2-.3-.3-.6-.4z"/></svg></a>`;

// --- Cartes produits ---
const g=$('#grille');
if(g){const n=+g.dataset.max||8;g.innerHTML=PRODUITS.slice(0,n).map(p=>`<article class="card">
 <div class="im"><img src="images/${p.img}.jpg" alt="${p.nom} personnalisés — EZINE EL GHALI" loading="lazy"></div>
 <div class="tx"><h3>${p.nom}</h3><p>${p.txt}</p>
 <a class="btn sm" href="commande.html?produit=${encodeURIComponent(p.id)}">Personnaliser / Commander</a></div></article>`).join('')}

// --- Page commande ---
const f=$('#formulaire');
if(f){
 const id=new URLSearchParams(location.search).get('produit');
 const p=PRODUITS.find(x=>x.id===id)||null;
 const prod=p?p.id:'';
 if(p){$('#sel').innerHTML=`<img src="images/${p.img}.jpg" alt="${p.nom}"><div><small>Produit sélectionné</small><strong>${p.id}${p.d?'':' personnalisé'}</strong></div>`}
 else{$('#sel').innerHTML=`<div><small>Votre demande</small><strong>Choisissez un produit ci-dessous</strong></div>`}
 const sel=$('#produit');
 sel.innerHTML=(p?'':'<option value="">— Choisir —</option>')+PRODUITS.map(x=>`<option${x.id===prod?' selected':''}>${x.id}</option>`).join('');
 // Adapte les champs (taille, couleur, dimensions) selon le produit
 const adapt=()=>{const x=PRODUITS.find(y=>y.id===sel.value)||{};
  $('#l-taille').classList.toggle('hide',!x.t);$('#l-couleur').classList.toggle('hide',!x.c);$('#l-dim').classList.toggle('hide',!x.d);
  $('#l-qte').classList.toggle('hide',!!x.d)};
 sel.onchange=adapt;adapt();
 f.onsubmit=async e=>{e.preventDefault();
  const d=Object.fromEntries(new FormData(f));const L=[];
  L.push('*Nouvelle demande — EZINE EL GHALI*','Produit : '+d.produit,'Nom : '+d.nom,'Entreprise : '+(d.entreprise||'-'),'Téléphone : '+d.tel,'Email : '+(d.email||'-'),'Wilaya/Adresse : '+d.adresse);
  ['quantite','couleur','taille','dimensions'].forEach(k=>{if(d[k]&&!$('#l-'+({quantite:'qte',couleur:'couleur',taille:'taille',dimensions:'dim'}[k])).classList.contains('hide'))L.push(k[0].toUpperCase()+k.slice(1)+' : '+d[k])});
  L.push('Logo déjà disponible : '+(d.logo?'Oui':'Non'),'Personnalisation : '+d.perso,'Message : '+(d.message||'-'));
  const msg=L.join('\n');
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');
  if(CONFIG.formspree){try{await fetch(CONFIG.formspree,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({...d,message_complet:msg})})}catch(_){}}
  f.classList.add('hide');$('#sel').classList.add('hide');$('#merci').classList.remove('hide');scrollTo({top:0,behavior:'smooth'})};
}

// --- Fond animé : petites feuilles dorées qui tombent lentement ---
(()=>{const f=document.createElement('div');f.id='fond';f.setAttribute('aria-hidden','true');
 let h='';
 for(let i=0;i<22;i++){const s=14+Math.random()*20;
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#8a6a1c'/><stop offset='.3' stop-color='#f3d76f'/><stop offset='.5' stop-color='#fff3bd'/><stop offset='.75' stop-color='#d4a72c'/><stop offset='1' stop-color='#a67c1a'/></linearGradient></defs><path fill='url(#g)' d='M12 1C5 6 3 13 6 21c8 0 15-5 16-17-4-1-7-1-10-3z'/><path d='M6 21C10 14 14 9 20 5' stroke='#8a6a1c' stroke-opacity='.5' stroke-width='.7' fill='none'/></svg>`;
  h+=`<i style="left:${Math.random()*96}%;width:${s}px;height:${s}px;background-image:url(&quot;data:image/svg+xml,${encodeURIComponent(svg)}&quot;);animation-duration:${32+Math.random()*30}s;animation-delay:-${Math.random()*50}s"></i>`}
 f.innerHTML=h;document.body.prepend(f)})();


// --- Vidéo : lecture automatique. Les navigateurs bloquent le son sans action de l'utilisateur :
//     on essaie avec le son, sinon lecture muette + activation du son au 1er clic / toucher.
(()=>{const v=$('#vid');if(!v)return;const b=$('#son');
 const son=()=>{v.muted=false;v.volume=1;v.play().then(()=>b&&b.classList.add('hide')).catch(()=>{v.muted=true})};
 v.muted=false;v.play().then(()=>b&&b.classList.add('hide')).catch(()=>{v.muted=true;v.play().catch(()=>{})});
 ['click','touchstart','keydown'].forEach(ev=>addEventListener(ev,function f(){son();['click','touchstart','keydown'].forEach(e=>removeEventListener(e,f))},{once:false}));
 if(b)b.onclick=son;
 new IntersectionObserver(([e])=>{e.isIntersecting?v.play().catch(()=>{}):v.pause()},{threshold:.25}).observe(v)})();
