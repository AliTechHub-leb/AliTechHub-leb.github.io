// AI Tools Database
const tools = [
    // Writing
    { id: 1, name: 'AI Blog Writer', category: 'Writing', icon: '✍️', description: 'Generate high-quality blog posts instantly', free: true, rating: 4.8 },
    { id: 2, name: 'AI Article Writer', category: 'Writing', icon: '📰', description: 'Write articles for any topic', free: true, rating: 4.7 },
    { id: 3, name: 'Email Writer', category: 'Writing', icon: '📧', description: 'Compose professional emails', free: true, rating: 4.6 },
    { id: 4, name: 'Grammar Checker', category: 'Writing', icon: '✓', description: 'Check and fix grammar errors', free: true, rating: 4.9 },
    { id: 5, name: 'Summarizer', category: 'Writing', icon: '📋', description: 'Summarize long texts', free: false, rating: 4.7 },
    
    // Coding
    { id: 6, name: 'Code Generator', category: 'Coding', icon: '💻', description: 'Generate code snippets', free: true, rating: 4.8 },
    { id: 7, name: 'Bug Finder', category: 'Coding', icon: '🐛', description: 'Find and fix bugs in code', free: false, rating: 4.6 },
    { id: 8, name: 'SQL Generator', category: 'Coding', icon: '🗄️', description: 'Generate SQL queries', free: true, rating: 4.7 },
    
    // Image
    { id: 9, name: 'Image Generator', category: 'Image', icon: '🎨', description: 'Create AI-generated images', free: false, rating: 4.9 },
    { id: 10, name: 'Image Upscaler', category: 'Image', icon: '📈', description: 'Upscale image resolution', free: false, rating: 4.5 },
    { id: 11, name: 'Background Remover', category: 'Image', icon: '✂️', description: 'Remove image backgrounds', free: true, rating: 4.8 },
    
    // Chat
    { id: 12, name: 'AI Chatbot', category: 'Chat', icon: '💬', description: 'Chat with advanced AI', free: true, rating: 4.9 },
    { id: 13, name: 'Research Assistant', category: 'Chat', icon: '🔍', description: 'AI research assistant', free: false, rating: 4.7 },
    
    // Video
    { id: 14, name: 'Caption Generator', category: 'Video', icon: '📹', description: 'Generate video captions', free: true, rating: 4.6 },
    { id: 15, name: 'Script Generator', category: 'Video', icon: '🎬', description: 'Write video scripts', free: false, rating: 4.7 },
    
    // Audio
    { id: 16, name: 'Text to Speech', category: 'Audio', icon: '🔊', description: 'Convert text to speech', free: true, rating: 4.8 },
    { id: 17, name: 'Speech to Text', category: 'Audio', icon: '🎙️', description: 'Transcribe audio files', free: true, rating: 4.7 },
    
    // Education
    { id: 18, name: 'AI Tutor', category: 'Education', icon: '📚', description: 'Get tutoring from AI', free: true, rating: 4.8 },
    { id: 19, name: 'Quiz Generator', category: 'Education', icon: '❓', description: 'Create quizzes automatically', free: true, rating: 4.6 },
    
    // Business
    { id: 20, name: 'Resume Builder', category: 'Business', icon: '👔', description: 'Create professional resumes', free: true, rating: 4.9 },
    { id: 21, name: 'Marketing Copy', category: 'Business', icon: '📢', description: 'Generate marketing content', free: false, rating: 4.8 },
];

const categories = [
    { id: 1, name: 'Writing', icon: '✍️', description: 'Writing tools' },
    { id: 2, name: 'Coding', icon: '💻', description: 'Coding tools' },
    { id: 3, name: 'Image', icon: '🎨', description: 'Image tools' },
    { id: 4, name: 'Chat', icon: '💬', description: 'Chat tools' },
    { id: 5, name: 'Video', icon: '🎬', description: 'Video tools' },
    { id: 6, name: 'Audio', icon: '🔊', description: 'Audio tools' },
    { id: 7, name: 'Education', icon: '📚', description: 'Education tools' },
    { id: 8, name: 'Business', icon: '📢', description: 'Business tools' },
];

const articles = [
    {
        id: 1,
        title: '10 Best AI Tools You Should Try in 2026',
        slug: '10-best-ai-tools-2026',
        category: 'AI Tools',
        author: 'Ali Tech Hub',
        date: '2024-01-15',
        image: '🛠️',
        excerpt: 'Discover the top 10 AI tools that are changing how we work.',
        readingTime: 8,
        featured: true
    },
    {
        id: 2,
        title: 'How AI Can Help Students Study Smarter',
        slug: 'ai-help-students-study',
        category: 'AI for Students',
        author: 'Sarah Johnson',
        date: '2024-01-14',
        image: '📚',
        excerpt: 'Learn how to use AI tools to improve your study habits and grades.',
        readingTime: 6
    },
    {
        id: 3,
        title: 'Best AI Tools for Content Writers',
        slug: 'best-ai-tools-content-writers',
        category: 'AI Writing',
        author: 'Mike Chen',
        date: '2024-01-13',
        image: '✍️',
        excerpt: 'Tools that help you write better content faster than ever before.',
        readingTime: 7
    },
    {
        id: 4,
        title: 'How to Use AI for Your Business',
        slug: 'how-use-ai-business',
        category: 'AI for Business',
        author: 'Emily Davis',
        date: '2024-01-12',
        image: '💼',
        excerpt: 'A complete guide to implementing AI in your business.',
        readingTime: 10
    },
    {
        id: 5,
        title: 'AI Image Generators: Complete Beginner\'s Guide',
        slug: 'ai-image-generators-guide',
        category: 'AI Image Generation',
        author: 'Tom Wilson',
        date: '2024-01-11',
        image: '🎨',
        excerpt: 'Learn how to create stunning images with AI generators.',
        readingTime: 9
    },
    {
        id: 6,
        title: 'AI Coding Tools for Beginners',
        slug: 'ai-coding-tools-beginners',
        category: 'AI Coding',
        author: 'Lisa Anderson',
        date: '2024-01-10',
        image: '💻',
        excerpt: 'Start your coding journey with helpful AI tools.',
        readingTime: 8
    }
];

// Search functionality
function searchTools(query = null) {
    const searchQuery = query || document.getElementById('heroSearch')?.value || '';
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filteredTools.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(filteredTools));
        window.location.href = 'pages/tools.html?search=' + encodeURIComponent(searchQuery);
    } else {
        showToast('No tools found matching your search', 'error');
    }
}
