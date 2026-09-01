// Main JavaScript

// Toggle Mobile Menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('active');
    });
});

// Toggle Search
function toggleSearch() {
    const search = document.getElementById('heroSearch');
    if (search) search.focus();
}

// Load Featured Tools
function loadFeaturedTools() {
    const featured = tools.slice(0, 6);
    const container = document.getElementById('featuredTools');
    
    container.innerHTML = featured.map(tool => `
        <div class="tool-card">
            <div class="tool-icon">${tool.icon}</div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <span class="tool-badge">${tool.category}</span>
            <div class="tool-actions">
                <button class="btn-try">Try Now</button>
                <button class="btn-favorite" onclick="toggleFavorite(${tool.id})">❤️</button>
            </div>
        </div>
    `).join('');
}

// Load Categories
function loadCategories() {
    const container = document.getElementById('categoriesGrid');
    
    container.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="viewCategory('${cat.name}')">
            <div class="category-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <p class="category-count">${tools.filter(t => t.category === cat.name).length} tools</p>
        </div>
    `).join('');
}

// Load Latest Articles
function loadLatestArticles() {
    const container = document.getElementById('latestArticles');
    const latest = articles.slice(0, 3);
    
    container.innerHTML = latest.map(article => `
        <div class="article-card" onclick="viewArticle('${article.slug}')">
            <div class="article-image">${article.image}</div>
            <div class="article-content">
                <span class="article-category">${article.category}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="article-meta">
                    <span>👤 ${article.author}</span>
                    <span>📅 ${new Date(article.date).toLocaleDateString()}</span>
                    <span>⏱️ ${article.readingTime} min</span>
                </div>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>
    `).join('');
}

// View Category
function viewCategory(categoryName) {
    localStorage.setItem('selectedCategory', categoryName);
    window.location.href = 'pages/categories.html?category=' + encodeURIComponent(categoryName);
}

// View Article
function viewArticle(slug) {
    window.location.href = `pages/article.html?slug=${slug}`;
}

// Toggle Favorite
function toggleFavorite(toolId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(toolId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removed from favorites');
    } else {
        favorites.push(toolId);
        showToast('Added to favorites');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Contact Form
function handleContactSubmit(event) {
    event.preventDefault();
    showToast('Message sent! We\'ll get back to you soon.');
    event.target.reset();
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedTools();
    loadCategories();
    loadLatestArticles();
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
