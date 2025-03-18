document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');

    fetch('https://gitmaxm.github.io/posts-json/data/posts.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>Автор:</strong> ${post.author}</p>
            <p>${post.body}</p>
            <hr>
          `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        });
});
