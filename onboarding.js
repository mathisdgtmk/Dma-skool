// ONBOARDING DMA — A inclure dans dashboard.html
// Ajoute ce script et le HTML du popup dans ton dashboard

const ONBOARDING_HTML = `
<style>
.ob-overlay{
  position:fixed;inset:0;z-index:9999;
  background:rgba(6,6,10,.95);
  backdrop-filter:blur(20px);
  display:flex;align-items:center;justify-content:center;
  opacity:0;transition:opacity .4s;
}
.ob-overlay.show{opacity:1}
.ob-card{
  width:calc(100vw - 32px);max-width:380px;
  background:#0b0b12;
  border:1px solid rgba(200,168,75,.12);
  position:relative;overflow:hidden;
  transform:translateY(30px) scale(.97);
  transition:transform .5s cubic-bezier(.16,1,.3,1);
}
.ob-overlay.show .ob-card{transform:translateY(0) scale(1)}
.ob-topbar{height:2px;background:linear-gradient(90deg,transparent,#c8a84b,#e8c86a,#c8a84b,transparent)}
.ob-progress{height:2px;background:rgba(255,255,255,.05);position:relative}
.ob-progress-fill{height:100%;background:#c8a84b;transition:width .5s cubic-bezier(.16,1,.3,1);width:0%}

/* STEPS */
.ob-steps{display:flex;overflow:hidden;width:100%}
.ob-step{min-width:100%;padding:32px 28px 24px;display:flex;flex-direction:column;transition:none}

.ob-step-num{
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:9px;font-weight:500;letter-spacing:.25em;text-transform:uppercase;
  color:rgba(200,168,75,.5);margin-bottom:20px;
  display:flex;align-items:center;gap:8px;
}
.ob-step-num::after{content:"";flex:1;height:1px;background:rgba(200,168,75,.1)}

.ob-step-ic{
  width:56px;height:56px;border-radius:50%;
  border:1px solid rgba(200,168,75,.15);
  background:rgba(200,168,75,.06);
  display:flex;align-items:center;justify-content:center;
  font-size:26px;margin-bottom:20px;
}
.ob-step-title{
  font-family:"Cormorant Garamond",Georgia,serif;
  font-size:28px;font-weight:600;color:#ece8f0;
  line-height:1.1;margin-bottom:10px;
}
.ob-step-title em{color:#c8a84b;font-style:italic}
.ob-step-desc{
  font-size:13px;font-weight:300;
  color:rgba(236,232,240,.45);line-height:1.8;
  margin-bottom:24px;flex:1;
}
.ob-step-desc strong{color:rgba(236,232,240,.8);font-weight:400}

.ob-step-tips{display:flex;flex-direction:column;gap:8px;margin-bottom:24px}
.ob-tip{display:flex;gap:10px;align-items:flex-start;font-size:12px;font-weight:300;color:rgba(236,232,240,.5);line-height:1.5}
.ob-tip-dot{width:4px;height:4px;border-radius:50%;background:#c8a84b;flex-shrink:0;margin-top:6px;opacity:.7}

/* NAV */
.ob-nav{display:flex;align-items:center;justify-content:space-between;padding-top:16px;border-top:1px solid rgba(255,255,255,.05)}
.ob-dots{display:flex;gap:6px}
.ob-dot{width:16px;height:2px;background:rgba(255,255,255,.12);transition:all .3s;cursor:pointer}
.ob-dot.on{background:#c8a84b;width:24px}
.ob-btn-skip{font-size:10px;font-weight:300;letter-spacing:.15em;text-transform:uppercase;color:rgba(236,232,240,.25);background:none;border:none;cursor:pointer;font-family:inherit;padding:8px 0}
.ob-btn-next{
  font-size:11px;font-weight:400;letter-spacing:.15em;text-transform:uppercase;
  color:#c8a84b;background:rgba(200,168,75,.08);
  border:1px solid rgba(200,168,75,.2);
  padding:10px 22px;cursor:pointer;font-family:inherit;
  transition:background .2s,border-color .2s;
}
.ob-btn-next:active{background:rgba(200,168,75,.15)}
.ob-btn-finish{
  font-size:11px;font-weight:500;letter-spacing:.15em;text-transform:uppercase;
  color:#06060a;background:linear-gradient(135deg,#c8a84b,#e8c86a);
  border:none;
  padding:10px 22px;cursor:pointer;font-family:inherit;
  transition:opacity .2s;
}
.ob-btn-finish:active{opacity:.8}
</style>

<div class="ob-overlay" id="ob-overlay">
  <div class="ob-card">
    <div class="ob-topbar"></div>
    <div class="ob-progress"><div class="ob-progress-fill" id="ob-fill"></div></div>

    <div class="ob-steps" id="ob-steps">

      <!-- STEP 1 — Bienvenue -->
      <div class="ob-step">
        <div class="ob-step-num">01 / 05 &nbsp; Bienvenue</div>
        <div class="ob-step-ic">&#127942;</div>
        <div class="ob-step-title">Tu fais partie<br>de la <em>DMA.</em></div>
        <div class="ob-step-desc">Ce guide va te montrer comment tirer le maximum de ta formation en quelques minutes. Suis les etapes dans l ordre.</div>
        <div class="ob-step-tips">
          <div class="ob-tip"><div class="ob-tip-dot"></div>Formation complete — 28 modules disponibles immediatement</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>7 business models + outils IA inclus</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Droits MRR — tu peux revendre des aujourd hui</div>
        </div>
      </div>

      <!-- STEP 2 — Modules -->
      <div class="ob-step">
        <div class="ob-step-num">02 / 05 &nbsp; La formation</div>
        <div class="ob-step-ic">&#128218;</div>
        <div class="ob-step-title">Commence par<br>les <em>fondations.</em></div>
        <div class="ob-step-desc">Va dans <strong>Modules</strong> et commence par les 4 premiers. Mindset, positionnement, produits digitaux. C est la base de tout.</div>
        <div class="ob-step-tips">
          <div class="ob-tip"><div class="ob-tip-dot"></div>Filtre par categorie pour trouver ce dont tu as besoin</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Bascule entre vue Liste et vue Grille selon ta preference</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Chaque module a des exercices, quiz et checklist interactifs</div>
        </div>
      </div>

      <!-- STEP 3 — Business -->
      <div class="ob-step">
        <div class="ob-step-num">03 / 05 &nbsp; Ton business</div>
        <div class="ob-step-ic">&#128200;</div>
        <div class="ob-step-title">Choisis ton<br><em>business model.</em></div>
        <div class="ob-step-desc">Va dans <strong>Bonus → 7 Business Models</strong> et explore chaque option. Lis les etudes de cas et utilise les simulateurs pour voir le potentiel de chacun.</div>
        <div class="ob-step-tips">
          <div class="ob-tip"><div class="ob-tip-dot"></div>Drop, POD, UGC, Affiliation, Newsletter, Flipping, Agence IA</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Chaque model a un simulateur de revenus integre</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Tu peux en combiner plusieurs — le coaching t aide a choisir</div>
        </div>
      </div>

      <!-- STEP 4 — MRR -->
      <div class="ob-step">
        <div class="ob-step-num">04 / 05 &nbsp; Les droits MRR</div>
        <div class="ob-step-ic">&#128176;</div>
        <div class="ob-step-title">Revends.<br><em>Garde tout.</em></div>
        <div class="ob-step-desc">Avec les droits MRR tu peux revendre la DMA a <strong>397EUR</strong> et garder <strong>100%</strong>. Va dans <strong>Bonus → Arguments de Vente</strong> pour avoir tous les scripts prets a l emploi.</div>
        <div class="ob-step-tips">
          <div class="ob-tip"><div class="ob-tip-dot"></div>1 seule vente = ton investissement rembourse</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Scripts DM, reponses objections, profils clients disponibles</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Les generateurs IA creent tes accroches et hooks automatiquement</div>
        </div>
      </div>

      <!-- STEP 5 — GO -->
      <div class="ob-step">
        <div class="ob-step-num">05 / 05 &nbsp; C est parti</div>
        <div class="ob-step-ic">&#9889;</div>
        <div class="ob-step-title">Tout est<br><em>en place.</em></div>
        <div class="ob-step-desc">Tu as tout ce qu il te faut. Maintenant c est a toi de jouer. Commence par un module, choisis ton business model et fais ta premiere vente.</div>
        <div class="ob-step-tips">
          <div class="ob-tip"><div class="ob-tip-dot"></div>IA Suite Pro — 13 outils pour accelerer</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Les annonces te tiennent au courant des nouveautes</div>
          <div class="ob-tip"><div class="ob-tip-dot"></div>Questions ? Contacte Mathis directement</div>
        </div>
      </div>

    </div>

    <div class="ob-nav">
      <button class="ob-btn-skip" id="ob-skip" onclick="obSkip()">Passer</button>
      <div class="ob-dots" id="ob-dots"></div>
      <button class="ob-btn-next" id="ob-next" onclick="obNext()">Suivant</button>
    </div>
  </div>
</div>
`;

// INJECTION ET LOGIQUE
(function(){
  // Injecter le HTML
  document.body.insertAdjacentHTML('beforeend', ONBOARDING_HTML);

  var total = 5;
  var cur = 0;

  // Creer les dots
  var dotsEl = document.getElementById('ob-dots');
  for(var i = 0; i < total; i++){
    var d = document.createElement('div');
    d.className = 'ob-dot' + (i === 0 ? ' on' : '');
    d.dataset.i = i;
    d.addEventListener('click', function(){ goStep(parseInt(this.dataset.i)); });
    dotsEl.appendChild(d);
  }

  function updateUI(){
    // Progress bar
    document.getElementById('ob-fill').style.width = ((cur+1)/total*100) + '%';
    // Dots
    document.querySelectorAll('.ob-dot').forEach(function(d,i){ d.classList.toggle('on', i === cur); });
    // Steps
    document.getElementById('ob-steps').style.transform = 'translateX(-' + (cur * 100) + '%)';
    document.getElementById('ob-steps').style.transition = 'transform .45s cubic-bezier(.16,1,.3,1)';
    // Bouton
    var btn = document.getElementById('ob-next');
    if(cur === total - 1){
      btn.textContent = 'Commencer';
      btn.className = 'ob-btn-finish';
      btn.onclick = obFinish;
      document.getElementById('ob-skip').style.display = 'none';
    } else {
      btn.textContent = 'Suivant';
      btn.className = 'ob-btn-next';
      btn.onclick = obNext;
      document.getElementById('ob-skip').style.display = '';
    }
  }

  function goStep(i){
    cur = Math.max(0, Math.min(total-1, i));
    updateUI();
  }

  window.obNext = function(){ goStep(cur + 1); };
  window.obSkip = function(){ obFinish(); };
  window.obFinish = function(){
    var ov = document.getElementById('ob-overlay');
    ov.style.opacity = '0';
    ov.style.transition = 'opacity .4s';
    setTimeout(function(){ ov.remove(); }, 400);
    localStorage.setItem('dma_onboarded', '1');
  };

  // Afficher seulement si pas deja vu
  if(!localStorage.getItem('dma_onboarded')){
    setTimeout(function(){
      var ov = document.getElementById('ob-overlay');
      ov.classList.add('show');
      updateUI();
    }, 800);
  }
})();
