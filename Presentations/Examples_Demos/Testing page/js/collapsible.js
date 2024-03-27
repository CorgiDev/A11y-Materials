(function () {
    const headings = document.querySelectorAll('main h2');
  
    Array.prototype.forEach.call(headings, h => {
      let btn = h.querySelector('button');
      let target = h.nextElementSibling;
  
      btn.onclick = () => {
          let expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', !expanded);
          target.hidden = expanded;
      }
    });
  })();
  