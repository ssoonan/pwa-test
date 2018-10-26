
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {

  // Register the SW
  navigator.serviceWorker.register('/sw.js').then(function(registration){

 
    // onupdatefound라는 것은, update가 되었을 때를 말하는 것인듯. 이를 강제할 것인가, 다르게 줄 수 있는가?는
    // 봐보면 알게 되지 않을까 싶다
    // registration.onupdatefound = () => {

    //   let newSW = registration.installing;
    //   if (confirm("App update found. Do you want to update now?")) {
    //     newSW.postMessage('update_self');
    //   }
    // }

    /* 뭐 활성화가 되어있으니 메시지가 서비스 워커로 가버림 */
    // if (registration.active) {
    //   registration.active.postMessage('respond to this');
    // }
    
  }).catch(console.log);

// navigator.serviceWorker.addEventListener('message', (e) => {
//   console.log(e.data);
// })

}
