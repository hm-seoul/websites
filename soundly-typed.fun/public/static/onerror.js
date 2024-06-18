window.addEventListener('error', () => {
  switch (window.location.hostname) {
    case 'typed.fun':
      document.querySelector('main').append(' still something wrong (See the inspector)');
      console.error('You need to go https://soundly-typed.fun');
      break;

    case 'untyped.fun':
      document.querySelector('main').append(' something wrong (See the inspector)');
      console.error('You need to go https://typed.fun');
      break;
  }
});
