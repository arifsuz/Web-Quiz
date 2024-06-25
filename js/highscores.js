document.addEventListener('DOMContentLoaded', function() {
  const highScoresList = document.getElementById('highScoresList');

  fetch('http://localhost:3000/API/highscores')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch highscores');
    }
    return response.json();
  })
  .then(highScores => {
    highScoresList.innerHTML = highScores
    .sort((a, b) => b.scores - a.scores)
    .map(score => {
      return `<li class="high-score"> ${score?.username} - ${score?.scores} </li>`;
    })
    .join('');
  })
  .catch(error => {
    console.error('Error fetching highscores:', error);
    highScoresList.innerHTML = '<li>Error fetching highscores</li>';
  });
});