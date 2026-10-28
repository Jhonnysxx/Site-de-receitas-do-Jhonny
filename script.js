// Dados de exemplo das receitas
const recipes = [
    {
        id: 1,
        title: 'Bolo de Chocolate Fofinho',
        description: 'Um bolo de chocolate super fofinho, perfeito para o lanche da tarde.',
        category: 'Sobremesa',
        time: '45 min',
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 2,
        title: 'Prato Feito Clássico',
        description: 'Arroz, feijão e um molho especial. O prato nacional feito com amor.',
        category: 'Prato Principal',
        time: '40 min',
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo=1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 3,
        title: 'Salada Caesar Light',
        description: 'Salada refrescante com frango grelhado e molho leve de iogurte.',
        category: 'Salada',
        time: '20 min',
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo=1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
];

// Função para renderizar as receitas
function renderRecipes(filter = '') {
    const grid = document.getElementById('recipesGrid');
    const emptyState = document.getElementById('emptyState');

    let filteredRecipes = recipes;

    // Filtrar por título e categoria
    if (filter) {
        const searchTerm = filter.toLowerCase();
        filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm)
        );
    }

    // Renderizar
    grid.innerHTML = '';

    if (filteredRecipes.length === 0) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-info">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
                <a href="#" onclick="alert('Receita "${recipe.title}" em breve!'); return false;">Ver Receita</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes();

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        renderRecipes(e.target.value);
    });
});
