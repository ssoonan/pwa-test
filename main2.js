if (window.caches) {

    caches.open('pwa-v1.1').then( (cache) => {

        cache.match('/index.html').then((res) => {
            res.text().then(console.log);
         
    });
});

}