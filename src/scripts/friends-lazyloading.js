function callback(entries) {
  for (const i in entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('friend_visible');
      }
    });
  }
}

function initObserver() {
  const observer = new IntersectionObserver(callback);
  const items = document.querySelectorAll('.friend');

  for (const i in items) {
    if (!items.hasOwnProperty(i)) {
      continue;
    }

    observer.observe(items[i]);
  }
}

if (window.IntersectionObserver) {
  initObserver();
} else {
  console.log("IntersectionObserver not supported.");
}
