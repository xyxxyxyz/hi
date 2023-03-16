const commentForm = document.querySelector('.comment-box form');
const commentSection = document.querySelector('.comment-section');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = commentForm.name.value;
  const email = commentForm.email.value;
  const comment = commentForm.comment.value;

  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const userAgent = window.navigator.userAgent;

      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';

      const commentAuthor = document.createElement('h3');
      commentAuthor.innerText = name;

      const commentText = document.createElement('p');
      commentText.innerText = comment;

      const commentMeta = document.createElement('p');
      commentMeta.innerText = `IP: ${ip}, User Agent: ${userAgent}`;

      commentContainer.append(commentAuthor, commentText, commentMeta);
      commentSection.append(commentContainer);

      commentForm.reset();
    })
    .catch(error => {
      console.error(error);
    });
});
