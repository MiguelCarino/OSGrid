document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('/assets/json/tiles.json');
        const tilesData = await response.json();

        const tilesContainer = document.querySelector('.tiles');
        const contentDiv = document.querySelector('.content-div');

        // Initial function to load main tiles
        function loadMainTiles() {
            tilesContainer.innerHTML = '';
            tilesData.forEach(tile => createTile(tile, loadSubgroup));
        }

        // Function to create a tile element
        function createTile(tile, clickHandler) {
            const tileElement = document.createElement('div');
            tileElement.classList.add('tile');
            tileElement.setAttribute('data-content', tile.content);
            tileElement.setAttribute('data-bg', tile.bg);
            tileElement.setAttribute('data-font', tile.font);
            tileElement.setAttribute('data-bg-img', tile['bg-img']);

            tileElement.innerHTML = `
                <img src="${tile.img}" alt="${tile.name}">
                <span>${tile.name}</span>
            `;

            // Event to show tile info on hover
            tileElement.addEventListener('mouseenter', () => {
                document.body.style.backgroundColor = tile.bg;
                document.body.style.backgroundImage = `url(${tile['bg-img']})`;
                contentDiv.querySelector('h1').textContent = tile.name;
                contentDiv.querySelector('p').textContent = tile.content;
                contentDiv.style.fontFamily = tile.font;
                contentDiv.style.backgroundColor = tile.bg;
            });

            tileElement.addEventListener('mouseleave', () => {
                resetContent();
            });

            // Click event to load subgroup or open URL
            tileElement.addEventListener('click', () => clickHandler(tile, tileElement));

            tilesContainer.appendChild(tileElement);
        }

        // Function to load subgroup tiles
        function loadSubgroup(tile, selectedTile) {
            // Hide main tiles with fade-out effect
            const mainTiles = document.querySelectorAll('.tile');
            mainTiles.forEach(tile => tile.style.opacity = '0');

            // Delay for fade-out effect
            setTimeout(() => {
                tilesContainer.innerHTML = ''; // Clear main tiles

                // Generate subgroup tiles with slide-in effect
                tile.subgroup.forEach(subTile => {
                    const subTileElement = document.createElement('a');
                    subTileElement.href = subTile.url;
                    subTileElement.target = "_blank";
                    subTileElement.classList.add('tile', 'sub-tile'); // Add 'sub-tile' for slide-in animation
                    subTileElement.setAttribute('data-content', subTile.content);
                    subTileElement.setAttribute('data-bg', subTile.bg);
                    subTileElement.setAttribute('data-font', subTile.font);
                    subTileElement.setAttribute('data-bg-img', subTile['bg-img']);

                    subTileElement.innerHTML = `
                        <img src="${subTile.img}" alt="${subTile.name}">
                        <span>${subTile.name}</span>
                    `;

                    subTileElement.addEventListener('mouseenter', () => {
                        document.body.style.backgroundColor = subTile.bg;
                        document.body.style.backgroundImage = `url(${subTile['bg-img']})`;
                        contentDiv.querySelector('h1').textContent = subTile.name;
                        contentDiv.querySelector('p').textContent = subTile.content;
                        contentDiv.style.fontFamily = subTile.font;
                        contentDiv.style.backgroundColor = subTile.bg;
                    });

                    subTileElement.addEventListener('mouseleave', () => {
                        resetContent();
                    });

                    tilesContainer.appendChild(subTileElement);
                });

                // Back button to return to main tiles
                const backButton = document.createElement('button');
                backButton.textContent = 'Back to Main';
                backButton.classList.add('back-button');
                backButton.addEventListener('click', loadMainTiles);
                tilesContainer.appendChild(backButton);

            }, 300); // Adjust delay to match fade-out duration
        }

        // Function to open a URL in a new tab
        function openUrl(tile) {
            window.open(tile.url, '_blank');
        }

        // Function to reset content div on mouse leave
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
