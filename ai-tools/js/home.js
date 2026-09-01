// Populate Popular Tools
function populatePopularTools() {
    const grid = document.getElementById('popularToolsGrid');
    if (!grid) return;
    
    grid.innerHTML = popularTools.map(tool => `
        <div class="tool-card" onclick="openTool('${tool.id}')">
            <div class="tool-icon">
                <i class="${tool.icon}"></i>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <span class="tool-badge">Popular</span>
        </div>
    `).join('');
}

// Populate Categories
function populateCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="viewCategory('${cat.id}')">
            <div class="category-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <div class="category-count">${cat.count} tools</div>
        </div>
    `).join('');
}

// Search Tools
function searchTools() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query.length < 2) {
        populatePopularTools();
        return;
    }
    
    const results = allTools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
    );
    
    const grid = document.getElementById('popularToolsGrid');
    grid.innerHTML = results.length > 0 ? results.map(tool => `
        <div class="tool-card" onclick="openTool('${tool.id}')">
            <div class="tool-icon">
                <i class="${tool.icon}"></i>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <span class="tool-badge">${tool.category}</span>
        </div>
    `).join('') : '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><p>No tools found</p></div>';
}

// Toggle FAQ
function toggleFAQ(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    element.classList.toggle('active');
}

// Navigation
function openTool(toolId) {
    window.location.href = `tools/${toolId}.html`;
}

function viewCategory(categoryId) {
    window.location.href = `tools/category/${categoryId}.html`;
}

function redirectToTools() {
    window.location.href = '#tools';
    document.getElementById('searchInput').focus();
}

function redirectToSignup() {
    window.location.href = 'auth/signup.html';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    populatePopularTools();
    populateCategories();
});
