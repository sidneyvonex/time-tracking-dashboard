const cardsContainer = document.querySelector('.cards');
const buttons = document.querySelectorAll('.timeframes button');

let currentTimeframe = 'daily'; 


const bgColors = {
  "Work": "hsl(15, 100%, 70%)",
  "Play": "hsl(195, 74%, 62%)",
  "Study": "hsl(348, 100%, 68%)",
  "Exercise": "hsl(145, 58%, 55%)",
  "Social": "hsl(264, 64%, 52%)",
  "Self Care": "hsl(43, 84%, 65%)"
};


function formatFilename(title) {
  return title.toLowerCase().replace(' ', '-');
}

function renderCards(timeframe) {
  cardsContainer.innerHTML = '';

  data.forEach(item => {
    const { title, timeframes } = item;
    const current = timeframes[timeframe].current;
    const previous = timeframes[timeframe].previous;
    const previousLabel = {
      daily: 'Yesterday',
      weekly: 'Last Week',
      monthly: 'Last Month'
    }[timeframe];

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-header" style="background-color: ${bgColors[title]}; background-image: url('images/${formatFilename(title)}-icon.svg');">
      </div>
      <div class="card-content">
        <h2>${title}<img src=\"images/ellipsis-icon.svg\" alt=\"Options\"></h2>
        <h3>${current}hrs</h3>
        <p>${previousLabel} - ${previous}hrs</p>
      </div>
    `;
    cardsContainer.appendChild(card);
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentTimeframe = button.dataset.timeframe;
    renderCards(currentTimeframe);
  });
});

renderCards(currentTimeframe); // initial render
