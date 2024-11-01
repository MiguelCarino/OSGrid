document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('/assets/json/tiles.json');
        const tilesData = await response.json();

        const tilesContainer = document.querySelector('.tiles');
        const contentDiv = document.querySelector('.content-div');

        // Function to initialize and load main tiles
        function loadMainTiles() {
            tilesContainer.innerHTML = '';
            tilesData.forEach(tile => createTile(tile, loadSubgroup));
        }

        // Function to create a tile element
        function createTile(tile, clickHandler) {
            const tileElement = document.createElement('div');
            tileElement.classList.add('tile');
            tileElement.dataset.content = tile.content;
            tileElement.dataset.bg = tile.bg;
            tileElement.dataset.font = tile.font;
            tileElement.dataset.bgImg = tile['bg-img'];

            tileElement.innerHTML = `
                <img src="${tile.img}" alt="${tile.name}">
                <span>${tile.name}</span>
            `;

            // Event listeners for hover and click
            tileElement.addEventListener('mouseenter', () => updateContent(tile));
            tileElement.addEventListener('mouseleave', resetContent);
            tileElement.addEventListener('click', () => clickHandler(tile, tileElement));

            tilesContainer.appendChild(tileElement);
        }

        // Function to load subgroup tiles
        function loadSubgroup(tile) {
            // Fade out main tiles
            document.querySelectorAll('.tile').forEach(tile => tile.style.opacity = '0');

            // Delay to allow fade-out before clearing
            setTimeout(() => {
                tilesContainer.innerHTML = ''; // Clear main tiles

                // Add subgroup tiles
                tile.subgroup.forEach(subTile => {
                    const subTileElement = document.createElement('a');
                    subTileElement.href = subTile.url;
                    subTileElement.target = "_blank";
                    subTileElement.classList.add('tile', 'sub-tile');
                    subTileElement.dataset.content = subTile.content;
                    subTileElement.dataset.bg = subTile.bg;
                    subTileElement.dataset.font = subTile.font;
                    subTileElement.dataset.bgImg = subTile['bg-img'];

                    subTileElement.innerHTML = `
                        <img src="${subTile.img}" alt="${subTile.name}">
                        <span>${subTile.name}</span>
                    `;

                    // Hover events for subgroup tiles
                    subTileElement.addEventListener('mouseenter', () => updateContent(subTile));
                    subTileElement.addEventListener('mouseleave', resetContent);

                    tilesContainer.appendChild(subTileElement);
                });

                // Add back button
                const backButton = document.createElement('button');
                backButton.textContent = 'Back to Main';
                backButton.classList.add('back-button');
                backButton.addEventListener('click', loadMainTiles);
                tilesContainer.appendChild(backButton);

            }, 300); // Adjust delay as needed for fade-out effect
        }

        // Function to update the content div and background on hover
        function updateContent(tile) {
            document.body.style.backgroundColor = tile.bg;
            document.body.style.backgroundImage = `url(${tile['bg-img']})`;
            contentDiv.querySelector('h1').textContent = tile.name;
            contentDiv.querySelector('p').textContent = tile.content;
            contentDiv.style.fontFamily = tile.font;
            contentDiv.style.backgroundColor = tile.bg;
        }

        // Function to reset the content div on mouse leave
        function resetContent() {
            document.body.style.backgroundColor = '';
            document.body.style.backgroundImage = '';
            contentDiv.querySelector('h1').textContent = 'Hover over an option';
            contentDiv.querySelector('p').textContent = 'This content will update on hover.';
            contentDiv.style.fontFamily = 'sans-serif';
            contentDiv.style.backgroundColor = '#e0e0e0';
        }

        // Load the main tiles initially
        loadMainTiles();

    } catch (error) {
        console.error('Error loading tiles:', error);
    }
});
