document.addEventListener("DOMContentLoaded", async () => {
    const tilesContainer = document.querySelector('.tiles');
    const contentDiv = document.querySelector('.content-div');

    try {
        const response = await fetch('assets/json/tiles.json');
        const tilesData = await response.json();

        function loadTiles(tiles, backFunction = null) {
            tilesContainer.innerHTML = '';

            tiles.forEach(tile => {
                const tileElement = document.createElement('div');
                tileElement.classList.add('tile');
                tileElement.dataset.content = tile.content;
                tileElement.dataset.bg = tile.bg;
                tileElement.dataset.font = tile.font;
                tileElement.dataset.bgImgTop = tile['bg-img-top'];
                tileElement.dataset.bgImgFull = tile['bg-img-full'];

                tileElement.innerHTML = `
                    <img src="${tile.img}" alt="${tile.name}">
                    <span>${tile.name}</span>
                `;

                tileElement.addEventListener('mouseenter', () => updateContent(tile));

                // Click event to load subgroup or open URL
                tileElement.addEventListener('click', () => {
                    if (tile.subgroup) {
                        loadTiles(tile.subgroup, () => loadTiles(tilesData));
                    } else if (tile.url) {
                        window.open(tile.url, '_blank');
                    }
                });

                tilesContainer.appendChild(tileElement);
            });

            if (backFunction) {
                const backButton = document.createElement('button');
                backButton.textContent = 'Back';
                backButton.classList.add('back-button');
                backButton.addEventListener('click', backFunction);
                tilesContainer.appendChild(backButton);
            }
        }

        function updateContent(tile) {
            const topImage = tile['bg-img-top'];
            const fullBgImage = tile['bg-img-full'];

            document.body.style.backgroundImage = `url(${topImage}), url(${fullBgImage})`;
            document.body.style.backgroundColor = tile.bg;

            contentDiv.querySelector('h1').textContent = tile.name;
            contentDiv.querySelector('p').textContent = tile.content;
            contentDiv.style.fontFamily = tile.font;
            contentDiv.style.backgroundColor = tile.bg;
        }

        // Load the main tiles initially
        loadTiles(tilesData);

    } catch (error) {
        console.error('Error loading tiles:', error);
    }
});
