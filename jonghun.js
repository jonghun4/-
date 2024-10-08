export function jonghun(increment) {

  for (let i = 0; i < 100; i++) {
    increment();
  }

  function a1(callback) {
    setTimeout(() => {
      console.log('코딩 지옥');
      callback();
    }, 200);
  }

  function a2(callback) {
    setTimeout(() => {
      console.log('코딩 폭발');
      callback();
    }, 250);
  }

  function a3(callback) {
    setTimeout(() => {
      console.log('자바스크립트 지옥');
      callback();
    }, 300);
  }

  function a4(callback) {
    setTimeout(() => {
      console.log('자바스크립트 폭발');
      callback();
    }, 350);
  }

  function a5(callback) {
    setTimeout(() => {
      console.log('작동되니?');
      callback();
    }, 450);
  }

  a1(function() {
    a2(function() {
      a3(function() {
        a4(function() {
          a5(function(){});
        });
      });
    });
  });

  return setInterval(() => {
    console.log('최종훈');
    increment();
  }, 150);
};