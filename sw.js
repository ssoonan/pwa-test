// service worker

const pwaCache = 'pwa-cache-1'

// 말 그대로 install 단계는, 처음에 깔았을 때만 돌아가고 그 이후엔 당연히 안 돌아감. 그 개념부터 조금씩 잡아나가자~!
// 
self.addEventListener('install', (e) => {
    
   let cacheReady = caches.open(pwaCache).then((cache) => {
       
    console.log('New Cache ready')
    return cache.addAll([
        '/',
        'style.css',
        'thumb.png'
    ]);
   });

   e.waitUntil(cacheReady);


});


// 여기서의 fetch는 결국, client가 요구하는 곳의 url이라 볼 수 있다. 백단 설계랑도 유사하다.
// 저 빈 / 일 때만 cache로 가져와서 더 빠르다~! 라는 느낌이랄까
self.addEventListener('fetch', (e) => {
    if ( !e.request.url.match(location.origin)) return;

    let newRes = caches.open(pwaCache).then((cache) => {
        return cache.match(e.request);
        })

    e.respondWith(newRes);
    }
)


// 원래는 언제 activate가 되는지 명시를 해줘야하나 싶다. 그게 없으면, skip으로 바로 해버릴 수도 있는 것이고
// self.addEventListener('activate', () => {
//     console.log('Sw Active');
// })


// // 여기서 메시지라는 이벤트가 왓으니 밑에가 실행된달까..
// self.addEventListener('message', (e) => { 
//     self.clients.matchAll().then((clients) => {
//         clients.forEach((client) => {
//             client.postMessage("Hello from Service Worker");
            
//         });
//     });
// });