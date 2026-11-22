const BUILD_HASH = 'd84caffc2b1b';
const PRECACHE_URLS = JSON.parse('["/","/offline/","/manifest.json","/favicon.svg","/assets/AlgebraArenaGame.astro_astro_type_script_index_0_lang.Hv9px-hu.js","/assets/AngleAdventureGame.astro_astro_type_script_index_0_lang.CHLA09qP.js","/assets/AssociationGame.astro_astro_type_script_index_0_lang.BMmmfqQ1.js","/assets/BaseLayout.Z6xx5jhA.css","/assets/BodyBuilderGame.astro_astro_type_script_index_0_lang.IWMAdg8j.js","/assets/BusinessArchitect.yMONfAVr.js","/assets/CalculusClimber.DfPqwvRF.js","/assets/CellCityGame.astro_astro_type_script_index_0_lang.DlL5BkfG.js","/assets/CircuitChallengeGame.astro_astro_type_script_index_0_lang.3GoCVRHx.js","/assets/ClientRouter.astro_astro_type_script_index_0_lang.6Spq5I16.js","/assets/ClimateCluesGame.astro_astro_type_script_index_0_lang.KGZOFFNM.js","/assets/ClockGame.astro_astro_type_script_index_0_lang.DlnO-XJG.js","/assets/ComparisonGame.astro_astro_type_script_index_0_lang.DWrN6a-0.js","/assets/CyberScoutGame.astro_astro_type_script_index_0_lang.Dk9kzLY_.js","/assets/DecimalGame.astro_astro_type_script_index_0_lang.DZSn5gA1.js","/assets/DivisionDashGame.astro_astro_type_script_index_0_lang.CanQ9afu.js","/assets/EvidenceHunterGame.astro_astro_type_script_index_0_lang.Bqr6yx3Y.js","/assets/FlashcardGameEngine.astro_astro_type_script_index_0_lang.DuQkAi25.js","/assets/FractionFeastGame.astro_astro_type_script_index_0_lang.VKz0MfRo.js","/assets/GeneLabGame.astro_astro_type_script_index_0_lang.DGXhAgL_.js","/assets/ImageSequenceGame.astro_astro_type_script_index_0_lang.CgTJ-gIg.js","/assets/LandmarkLegendsGame.astro_astro_type_script_index_0_lang.BgD2HHQ7.js","/assets/LevelPath.astro_astro_type_script_index_0_lang.BXIL-xci.js","/assets/MCQGame.C45GTayb.css","/assets/MCQGame.astro_astro_type_script_index_0_lang.D5Dnx1Pv.js","/assets/MapMasterGame.astro_astro_type_script_index_0_lang.C9TGiIXs.js","/assets/MatchGameEngine.astro_astro_type_script_index_0_lang.DE5UjEqR.js","/assets/MathQuizGame.astro_astro_type_script_index_0_lang.NMlN9Ysw.js","/assets/MultiplicationGame.astro_astro_type_script_index_0_lang.DOx4ZpYY.js","/assets/Nav.astro_astro_type_script_index_0_lang.CSanyHQi.js","/assets/OddOneOutGame.astro_astro_type_script_index_0_lang.C8sjXw0t.js","/assets/PatternGame.astro_astro_type_script_index_0_lang.CQ7xIkd1.js","/assets/PlanetPatrolGame.astro_astro_type_script_index_0_lang.CS3Y9sXa.js","/assets/PythonPathwaysGame.astro_astro_type_script_index_0_lang.DErOZWln.js","/assets/ScienceLabGame.astro_astro_type_script_index_0_lang._w3xBlat.js","/assets/SentenceBuilderGame.astro_astro_type_script_index_0_lang.CT9qZZPB.js","/assets/SequenceGame.astro_astro_type_script_index_0_lang.0VI_OatL.js","/assets/ShadowMatchGame.astro_astro_type_script_index_0_lang.MyhFf2lV.js","/assets/SortGame.astro_astro_type_script_index_0_lang.B5eLzjh_.js","/assets/WebWizardryGame.astro_astro_type_script_index_0_lang.96Aq8VXE.js","/assets/WordWizardGame.astro_astro_type_script_index_0_lang.72zzQLKp.js","/assets/algebra-steps.astro_astro_type_script_index_0_lang.CLTU1FTT.js","/assets/algorithm-adventure.astro_astro_type_script_index_0_lang.BLzpzUsc.js","/assets/alphabet.CDYWPKZd.js","/assets/animals.CT3RXk-i.js","/assets/argument-architect.astro_astro_type_script_index_0_lang.gU1Lfbc0.js","/assets/birds.OTCHe8Y_.js","/assets/body_parts.PUbMLay1.js","/assets/bugs.Co-l8F_1.js","/assets/circuit-builder.astro_astro_type_script_index_0_lang.CAmWMh13.js","/assets/civilization-builder.astro_astro_type_script_index_0_lang.Cd4A2R1W.js","/assets/client.Djq7F49Y.js","/assets/colors.Yu2cF8jJ.js","/assets/debug-dungeon.astro_astro_type_script_index_0_lang.cKQMI3Sc.js","/assets/element-quest.astro_astro_type_script_index_0_lang.DfS0E6Bh.js","/assets/emotions.CL94YrXK.js","/assets/equation-explorer.astro_astro_type_script_index_0_lang.Xaz02WRu.js","/assets/evolution-isle.astro_astro_type_script_index_0_lang.C21vjvj0.js","/assets/fa-brands-400.BfBXV7Mm.woff2","/assets/fa-regular-400.BVHPE7da.woff2","/assets/fa-solid-900.8GirhLYJ.woff2","/assets/flags.BG85NVsT.js","/assets/fruits.BemRBBG9.js","/assets/gameRound.Dwp1Teq0.js","/assets/gameSounds.CNOs3kYF.js","/assets/government-guru.astro_astro_type_script_index_0_lang.BW64lZLP.js","/assets/inter-cyrillic-400-normal.HOLc17fK.woff","/assets/inter-cyrillic-400-normal.obahsSVq.woff2","/assets/inter-cyrillic-500-normal.BasfLYem.woff2","/assets/inter-cyrillic-500-normal.CxZf_p3X.woff","/assets/inter-cyrillic-600-normal.4D_pXhcN.woff","/assets/inter-cyrillic-600-normal.CWCymEST.woff2","/assets/inter-cyrillic-700-normal.CjBOestx.woff2","/assets/inter-cyrillic-700-normal.DrXBdSj3.woff","/assets/inter-cyrillic-800-normal.C7MGvYyJ.woff2","/assets/inter-cyrillic-800-normal.CCHyn08d.woff","/assets/inter-cyrillic-ext-400-normal.BQZuk6qB.woff2","/assets/inter-cyrillic-ext-400-normal.DQukG94-.woff","/assets/inter-cyrillic-ext-500-normal.B0yAr1jD.woff2","/assets/inter-cyrillic-ext-500-normal.BmqWE9Dz.woff","/assets/inter-cyrillic-ext-600-normal.Bcila6Z-.woff","/assets/inter-cyrillic-ext-600-normal.Dfes3d0z.woff2","/assets/inter-cyrillic-ext-700-normal.BjwYoWNd.woff2","/assets/inter-cyrillic-ext-700-normal.LO58E6JB.woff","/assets/inter-cyrillic-ext-800-normal.BZOjs1Xv.woff2","/assets/inter-cyrillic-ext-800-normal.Ca-gJeZY.woff","/assets/inter-greek-400-normal.B4URO6DV.woff2","/assets/inter-greek-400-normal.q2sYcFCs.woff","/assets/inter-greek-500-normal.BIZE56-Y.woff2","/assets/inter-greek-500-normal.Xzm54t5V.woff","/assets/inter-greek-600-normal.BZpKdvQh.woff","/assets/inter-greek-600-normal.plRanbMR.woff2","/assets/inter-greek-700-normal.BUv2fZ6O.woff","/assets/inter-greek-700-normal.C3JjAnD8.woff2","/assets/inter-greek-800-normal.BU00tryP.woff","/assets/inter-greek-800-normal.CLIouy3y.woff2","/assets/inter-greek-ext-400-normal.DGGRlc-M.woff2","/assets/inter-greek-ext-400-normal.KugGGMne.woff","/assets/inter-greek-ext-500-normal.2j5mBUwD.woff","/assets/inter-greek-ext-500-normal.C4iEst2y.woff2","/assets/inter-greek-ext-600-normal.B8X0CLgF.woff","/assets/inter-greek-ext-600-normal.DRtmH8MT.woff2","/assets/inter-greek-ext-700-normal.BoQ6DsYi.woff","/assets/inter-greek-ext-700-normal.qfdV9bQt.woff2","/assets/inter-greek-ext-800-normal.B--PVpEC.woff2","/assets/inter-greek-ext-800-normal.DUe57HfS.woff","/assets/inter-latin-400-normal.C38fXH4l.woff2","/assets/inter-latin-400-normal.CyCys3Eg.woff","/assets/inter-latin-500-normal.BL9OpVg8.woff","/assets/inter-latin-500-normal.Cerq10X2.woff2","/assets/inter-latin-600-normal.CiBQ2DWP.woff","/assets/inter-latin-600-normal.LgqL8muc.woff2","/assets/inter-latin-700-normal.BLAVimhd.woff","/assets/inter-latin-700-normal.Yt3aPRUw.woff2","/assets/inter-latin-800-normal.BYj_oED-.woff2","/assets/inter-latin-800-normal.D1mf63XC.woff","/assets/inter-latin-ext-400-normal.77YHD8bZ.woff","/assets/inter-latin-ext-400-normal.C1nco2VV.woff2","/assets/inter-latin-ext-500-normal.BxGbmqWO.woff","/assets/inter-latin-ext-500-normal.CV4jyFjo.woff2","/assets/inter-latin-ext-600-normal.CIVaiw4L.woff","/assets/inter-latin-ext-600-normal.D2bJ5OIk.woff2","/assets/inter-latin-ext-700-normal.Ca8adRJv.woff2","/assets/inter-latin-ext-700-normal.TidjK2hL.woff","/assets/inter-latin-ext-800-normal.BOMpwxm3.woff","/assets/inter-latin-ext-800-normal.DZJjya6U.woff2","/assets/inter-vietnamese-400-normal.Bbgyi5SW.woff","/assets/inter-vietnamese-400-normal.DMkecbls.woff2","/assets/inter-vietnamese-500-normal.DOriooB6.woff2","/assets/inter-vietnamese-500-normal.mJboJaSs.woff","/assets/inter-vietnamese-600-normal.BuLX-rYi.woff","/assets/inter-vietnamese-600-normal.Cc8MFFhd.woff2","/assets/inter-vietnamese-700-normal.BZaoP0fm.woff","/assets/inter-vietnamese-700-normal.DlLaEgI2.woff2","/assets/inter-vietnamese-800-normal.Cm7tD1pz.woff2","/assets/inter-vietnamese-800-normal.DDlpr_Ee.woff","/assets/irony-island.astro_astro_type_script_index_0_lang.BVr4YOE2.js","/assets/jobs.DXm7Bxm0.js","/assets/jsx-runtime.-IxHqnBx.js","/assets/masteryGate.Dv7zfrjX.js","/assets/material-symbols-outlined-latin-100-normal.B0rAfzu1.woff2","/assets/material-symbols-outlined-latin-100-normal.BjI1Rn8P.woff","/assets/material-symbols-outlined-latin-200-normal.KXHez457.woff2","/assets/material-symbols-outlined-latin-200-normal.iGDLx3av.woff","/assets/material-symbols-outlined-latin-300-normal.9VJ2oz3n.woff","/assets/material-symbols-outlined-latin-300-normal.DC_2Y5ca.woff2","/assets/material-symbols-outlined-latin-400-normal.BH7DKY-U.woff2","/assets/material-symbols-outlined-latin-400-normal.Ch_CLUfl.woff","/assets/memory.BCe1W-A3.js","/assets/music.Bca2967U.js","/assets/numPad.BEhBHCDM.js","/assets/numbers.CAPFFsdq.js","/assets/ocean.Dn1eK12e.js","/assets/periodic-brainer.astro_astro_type_script_index_0_lang.DtsIhdvS.js","/assets/probability-park.astro_astro_type_script_index_0_lang.BkyJ2IYF.js","/assets/progress.CSSrL5Fb.js","/assets/pythagoras-puzzle.astro_astro_type_script_index_0_lang.CY1DNN-x.js","/assets/react.CYP4SagT.js","/assets/reading-sight-words.astro_astro_type_script_index_0_lang.ClQkq365.js","/assets/root-ranger.astro_astro_type_script_index_0_lang.CJJ7Z3UF.js","/assets/shape-sort.astro_astro_type_script_index_0_lang.CBUclSZD.js","/assets/shapes.B43YsDFI.js","/assets/space.CUfHqpBB.js","/assets/spelling-words.astro_astro_type_script_index_0_lang.BNMONIGe.js","/assets/time-traveler.astro_astro_type_script_index_0_lang.D-qlFHpx.js","/assets/vegetables.D8UH41w7.js","/assets/vehicles.Bmb9A7q3.js","/assets/weather.Bf62dINV.js"]');
const PRECACHE_CACHE = `learn-precache-${BUILD_HASH}`;
const RUNTIME_CACHE = `learn-runtime-${BUILD_HASH}`;
const OFFLINE_URL = '/offline/';
const NETWORK_TIMEOUT_MS = 3000;

const { getStrategy, isHtmlNavigation } = (() => {
  const HASHED_ASSET_RE = /[.-][a-f0-9]{6,}\.(?:js|mjs|css|woff2?|ttf|png|jpe?g|gif|webp|svg|avif)$/i;
const IMAGE_EXT_RE = /\.(?:png|jpe?g|gif|webp|svg|avif|ico)$/i;
const AUDIO_EXT_RE = /\.(?:mp3|m4a|aac|ogg|wav)$/i;
const FILE_EXT_RE = /\.[a-z0-9]+$/i;
function getPathname(url) {
    try {
        return new URL(url, 'https://app.local').pathname;
    }
    catch {
        return url.split('?')[0] ?? '/';
    }
}
function isHashedAsset(pathname) {
    return pathname.startsWith('/assets/') || HASHED_ASSET_RE.test(pathname);
}
function isHtmlNavigation(pathname, acceptHeader, mode) {
    if (isHashedAsset(pathname))
        return false;
    if (mode === 'navigate')
        return true;
    if (acceptHeader?.includes('text/html'))
        return true;
    return pathname.endsWith('/') || !FILE_EXT_RE.test(pathname);
}
function isImageRequest(pathname, destination) {
    return destination === 'image' || IMAGE_EXT_RE.test(pathname);
}
function isAudioManifest(pathname) {
    return (pathname === '/audio/manifest.json' ||
        pathname.startsWith('/audio/') ||
        AUDIO_EXT_RE.test(pathname));
}
function isExcludedUrl(pathname, method = 'GET') {
    if (method.toUpperCase() !== 'GET')
        return true;
    return pathname === '/sw.js' || pathname === '/sw-kill.json';
}
function isKillSwitchActive(data) {
    return data.disabled === true;
}
function getStrategy(url, destination, method = 'GET') {
    const pathname = getPathname(url);
    if (isExcludedUrl(pathname, method))
        return 'bypass';
    if (isHashedAsset(pathname))
        return 'cache-first';
    if (isAudioManifest(pathname) || isImageRequest(pathname, destination)) {
        return 'stale-while-revalidate';
    }
    if (destination === 'document' || isHtmlNavigation(pathname)) {
        return 'network-first';
    }
    return 'network-first';
}
  return { getStrategy, isHtmlNavigation };
})();

async function precache() {
  const cache = await caches.open(PRECACHE_CACHE);
  await Promise.all(
    PRECACHE_URLS.map(async (url) => {
      try {
        const request = new Request(new URL(url, self.location.href), { cache: 'reload' });
        const response = await fetch(request);
        if (!response.ok) {
          console.warn('[sw] skipping precache for', url, response.status);
          return;
        }
        await cache.put(request, response);
      } catch (error) {
        console.warn('[sw] precache failed for', url, error);
      }
    })
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(
            (name) =>
              (name.startsWith('learn-') || name.startsWith('learnquest-')) &&
              name !== PRECACHE_CACHE &&
              name !== RUNTIME_CACHE
          )
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

async function fetchWithTimeout(request, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(request, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function offlineResponse() {
  return new Response('Offline', {
    status: 503,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

async function cacheRuntime(request, response) {
  const copy = response.clone();
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    await cache.put(request, copy);
  } catch (error) {
    console.warn('[sw] failed to cache', request.url, error);
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) await cacheRuntime(request, response);
    return response;
  } catch (error) {
    console.warn('[sw] cache-first request failed', request.url, error);
    return offlineResponse();
  }
}

function revalidate(event, request) {
  const update = fetch(request)
    .then(async (response) => {
      if (response.ok) await cacheRuntime(request, response);
      return response;
    })
    .catch((error) => {
      console.warn('[sw] revalidation failed', request.url, error);
      return undefined;
    });

  event.waitUntil(update);
  return update;
}

async function staleWhileRevalidate(event, request) {
  const cached = await caches.match(request);
  if (cached) {
    revalidate(event, request);
    return cached;
  }

  const response = await revalidate(event, request);
  return response ?? offlineResponse();
}

async function networkFirst(event, request, url) {
  const isNavigation = request.mode === 'navigate' || isHtmlNavigation(url.pathname);

  try {
    const response = await fetchWithTimeout(request, NETWORK_TIMEOUT_MS);
    if (response.ok) event.waitUntil(cacheRuntime(request, response));
    return response;
  } catch (error) {
    console.warn('[sw] network-first fell back to cache', request.url, error);

    const cached = await caches.match(request);
    if (cached) return cached;

    if (isNavigation) {
      const offlinePage = await caches.match(OFFLINE_URL);
      if (offlinePage) return offlinePage;
    }

    return offlineResponse();
  }
}

async function handleRequest(event, request, url, strategy) {
  if (strategy === 'cache-first') return cacheFirst(request);
  if (strategy === 'stale-while-revalidate') return staleWhileRevalidate(event, request);
  return networkFirst(event, request, url);
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const strategy = getStrategy(url.href, request.destination, request.method);
  if (strategy === 'bypass') return;

  event.respondWith(handleRequest(event, request, url, strategy));
});
