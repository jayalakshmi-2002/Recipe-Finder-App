const recipes = [
    { name: "Chicken Curry", ingredients: ["chicken", "onion", "tomato"], link: "#" },
    { name: "Vegetable Stir Fry", ingredients: ["carrot", "broccoli", "bell pepper"], link: "#" },
    { name: "Pasta Salad", ingredients: ["pasta", "tomato", "cheese"], link: "#" }
];

function fetchRecipes() {
    const query = document.getElementById("search").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const filteredRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ingredient => ingredient.includes(query))
    );

    if (filteredRecipes.length === 0) {
        resultsDiv.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            <a href="${recipe.link}" target="_blank">View Recipe</a>
        `;
        recipeCard.style.border = "1px solid #ddd";
        recipeCard.style.padding = "10px";
        recipeCard.style.margin = "10px 0";
        resultsDiv.appendChild(recipeCard);
    });
}
