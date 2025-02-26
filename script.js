// Function to get query parameters from the URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the 'name' parameter from the URL
    const name = getQueryParam('name');

    // If the 'name' parameter exists, update the content of the element
    if (name) {
        document.getElementById('change-able').textContent = name;
    }
        let currentTheme = 1;
        const totalThemes = 4;

        function changeTheme() {
            currentTheme = currentTheme % totalThemes + 1;
            document.body.className = `theme-${currentTheme}`;
            localStorage.setItem('selectedTheme', currentTheme);
        }

        function revealProposal() {
            const proposal = document.getElementById('proposalMessage');
            proposal.style.display = 'block';
            document.querySelector('.proposal-button').style.display = 'none';
            createFloatingElements();
        }

        function createFloatingElements() {
            const container = document.createElement('div');
            container.className = 'floating-elements';
            
            for(let i = 0; i < 30; i++) {
                const element = document.createElement('span');
                element.innerHTML = ['❤️', '🌸', '✨', '🌹'][Math.floor(Math.random() * 4)];
                element.style.left = Math.random() * 100 + 'vw';
                element.style.animationDelay = Math.random() * 3 + 's';
                container.appendChild(element);
            }
            
            document.body.appendChild(container);
        }

        window.onload = function() {
            const savedTheme = localStorage.getItem('selectedTheme');
            if(savedTheme) {
                currentTheme = parseInt(savedTheme);
                document.body.className = `theme-${currentTheme}`;
            }
        }
