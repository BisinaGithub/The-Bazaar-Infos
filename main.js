async function loadMonsters() {
  try {
    const response = await fetch('data/monsters.json');
    if (!response.ok) throw new Error('Erro ao carregar o JSON');

    const monsters = await response.json();

    const grid = document.querySelector('.grid');
    grid.innerHTML = '';

    monsters.forEach(monster => {
      const a = document.createElement('a');
      a.href = `https://thebazaar.wiki.gg/wiki/${monster.id}`;
      a.target = '_blank';

      const img = document.createElement('img');
      img.src = monster.image;
      img.alt = monster.name;

      a.appendChild(img);
      grid.appendChild(a);
    });
  } catch (error) {
    console.error('Erro:', error);
  }
}

window.addEventListener('DOMContentLoaded', loadMonsters);
