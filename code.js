function start() {
    const posts = generateGalleryContent(10);
    setupGallery('gallery-01', posts);
    fillGallery('gallery-01', posts);
}

function generateGalleryContent(postsAmount) {
    const posts = [];
    for (let i = 0; i < postsAmount; i++) {
        let width = getRandomIntInclusive(1000, 2000);
        let height = getRandomIntInclusive(1000, 2000);
        const post = new Post('Description', { width: width, height: height }, `Post-${i}`, `https://via.placeholder.com/${width}x${height}`);
        posts.push(post);
    }
    return posts;
}

function setupGallery(galleryId, posts) {
    const gallery = document.getElementById(galleryId);
    let amountOfColumns = (posts.length >= 4) ? 4 : posts.length;
    for (let i = 0; i < amountOfColumns; i++) {
        gallery.appendChild(createColumn(galleryId, i));
    }
}

function createColumn(galleryId, index) {
    let column = document.createElement('div');
    column.className = 'column';
    column.id = `${galleryId}-column-${index}`;
    return column;
}

function createPost(post) {
    let img = document.createElement('img');
    img.src = post.source;
    img.id = post.id;
    return img;
}

function fillGallery(galleryId, posts) {
    const gallery = document.getElementById(galleryId);
    let columns = gallery.querySelectorAll('.column');

    for (let i = 0; i < posts.length; i++) {
        let shortestColumnIndex = 0;
        for (let j = 0; j < columns.length; j++) {
            if (columns[j].childNodes.length < columns[shortestColumnIndex].childNodes.length) {
                shortestColumnIndex = j;
            }
        }
        columns[shortestColumnIndex].appendChild(createPost(posts[i]));
    }
}

// Utility functions, should be added to Kompjoeter.js 'personal utility library'
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}