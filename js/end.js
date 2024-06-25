document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username');
    const saveScoreBtn = document.getElementById('saveScoreBtn');
    const finalScore = document.getElementById('finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    
    finalScore.innerText = mostRecentScore;
    
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });
    
    document.getElementById('saveScoreForm').addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const score = {
            scores: mostRecentScore,
            username: username.value
        };
    
        try {
            const response = await fetch('http://localhost:3000/API/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(score)
            });
    
            if (response.ok) {
                console.log('Score saved successfully');
                window.location.assign('/');
            } else {
                throw new Error('Failed to save score');
            }
        } catch (error) {
            console.log('Error:', error)
        }
    }); 
})