const aiTools = {
    'writing': {
        icon: '✍️',
        name: 'AI Writing',
        tools: [
            { id: 'blog-writer', name: 'Blog Writer', description: 'Generate engaging blog posts', icon: 'fas fa-pen-fancy' },
            { id: 'article-gen', name: 'Article Generator', description: 'Create full articles automatically', icon: 'fas fa-newspaper' },
            { id: 'essay-writer', name: 'Essay Writer', description: 'Write essays on any topic', icon: 'fas fa-scroll' },
            { id: 'email-writer', name: 'Email Writer', description: 'Compose professional emails', icon: 'fas fa-envelope' },
            { id: 'grammar-check', name: 'Grammar Checker', description: 'Fix grammar and spelling', icon: 'fas fa-check' },
            { id: 'paraphraser', name: 'Paraphraser', description: 'Rephrase text intelligently', icon: 'fas fa-exchange-alt' },
            { id: 'summarizer', name: 'Summarizer', description: 'Summarize any text', icon: 'fas fa-compress' }
        ]
    },
    'chat': {
        icon: '💬',
        name: 'AI Chat',
        tools: [
            { id: 'ai-chat', name: 'AI Chatbot', description: 'Chat with advanced AI', icon: 'fas fa-comments' },
            { id: 'support-bot', name: 'Support Bot', description: 'Customer support automation', icon: 'fas fa-headset' },
            { id: 'code-assist', name: 'Coding Assistant', description: 'Get coding help instantly', icon: 'fas fa-code' },
            { id: 'research-assist', name: 'Research Assistant', description: 'AI-powered research tool', icon: 'fas fa-search' }
        ]
    },
    'image': {
        icon: '🎨',
        name: 'AI Image',
        tools: [
            { id: 'text-to-img', name: 'Text to Image', description: 'Generate images from text', icon: 'fas fa-image' },
            { id: 'upscaler', name: 'Image Upscaler', description: 'Enhance image resolution', icon: 'fas fa-expand' },
            { id: 'bg-remover', name: 'Background Remover', description: 'Remove image backgrounds', icon: 'fas fa-eraser' },
            { id: 'enhancer', name: 'Image Enhancer', description: 'Improve image quality', icon: 'fas fa-sparkles' },
            { id: 'img-editor', name: 'Image Editor', description: 'Edit images online', icon: 'fas fa-edit' },
            { id: 'avatar-gen', name: 'Avatar Generator', description: 'Create AI avatars', icon: 'fas fa-user-circle' }
        ]
    },
    'video': {
        icon: '🎥',
        name: 'AI Video',
        tools: [
            { id: 'text-to-video', name: 'Text to Video', description: 'Create videos from text', icon: 'fas fa-film' },
            { id: 'img-to-video', name: 'Image to Video', description: 'Animate images to video', icon: 'fas fa-video' },
            { id: 'caption-gen', name: 'Caption Generator', description: 'Auto-generate video captions', icon: 'fas fa-closed-captioning' },
            { id: 'script-gen', name: 'Script Generator', description: 'Write video scripts', icon: 'fas fa-scroll' },
            { id: 'video-summary', name: 'Video Summarizer', description: 'Summarize video content', icon: 'fas fa-list' }
        ]
    },
    'audio': {
        icon: '🎵',
        name: 'AI Audio',
        tools: [
            { id: 'tts', name: 'Text to Speech', description: 'Convert text to speech', icon: 'fas fa-volume-up' },
            { id: 'stt', name: 'Speech to Text', description: 'Convert speech to text', icon: 'fas fa-microphone' },
            { id: 'voice-gen', name: 'Voice Generator', description: 'Generate custom voices', icon: 'fas fa-headphones' },
            { id: 'transcribe', name: 'Transcription', description: 'Transcribe audio files', icon: 'fas fa-file-audio' },
            { id: 'noise-removal', name: 'Noise Removal', description: 'Remove background noise', icon: 'fas fa-volume-mute' }
        ]
    },
    'coding': {
        icon: '💻',
        name: 'AI Coding',
        tools: [
            { id: 'code-gen', name: 'Code Generator', description: 'Generate code snippets', icon: 'fas fa-code' },
            { id: 'code-explain', name: 'Code Explainer', description: 'Explain code in plain English', icon: 'fas fa-book' },
            { id: 'bug-finder', name: 'Bug Finder', description: 'Find and fix bugs', icon: 'fas fa-bug' },
            { id: 'code-convert', name: 'Code Converter', description: 'Convert code between languages', icon: 'fas fa-exchange-alt' },
            { id: 'sql-gen', name: 'SQL Generator', description: 'Generate SQL queries', icon: 'fas fa-database' },
            { id: 'regex-gen', name: 'Regex Generator', description: 'Create regular expressions', icon: 'fas fa-terminal' }
        ]
    },
    'education': {
        icon: '📚',
        name: 'AI Education',
        tools: [
            { id: 'tutor', name: 'AI Tutor', description: 'Get personalized tutoring', icon: 'fas fa-chalkboard-user' },
            { id: 'homework', name: 'Homework Helper', description: 'Get homework help', icon: 'fas fa-pencil' },
            { id: 'quiz-gen', name: 'Quiz Generator', description: 'Create quizzes', icon: 'fas fa-question-circle' },
            { id: 'flashcard', name: 'Flashcard Generator', description: 'Generate flashcards', icon: 'fas fa-layer-group' },
            { id: 'planner', name: 'Study Planner', description: 'Plan your studies', icon: 'fas fa-calendar' },
            { id: 'doc-qa', name: 'Document Q&A', description: 'Ask questions about PDFs', icon: 'fas fa-file-pdf' }
        ]
    },
    'business': {
        icon: '📈',
        name: 'AI Business',
        tools: [
            { id: 'marketing-copy', name: 'Marketing Copy', description: 'Generate marketing content', icon: 'fas fa-bullhorn' },
            { id: 'social-post', name: 'Social Post Generator', description: 'Create social media posts', icon: 'fas fa-share' },
            { id: 'product-desc', name: 'Product Description', description: 'Write product descriptions', icon: 'fas fa-shopping-bag' },
            { id: 'resume', name: 'Resume Builder', description: 'Create professional resumes', icon: 'fas fa-file-alt' },
            { id: 'cover-letter', name: 'Cover Letter', description: 'Write cover letters', icon: 'fas fa-envelope-open' },
            { id: 'meeting-summary', name: 'Meeting Summarizer', description: 'Summarize meetings', icon: 'fas fa-users' }
        ]
    }
};

const categories = Object.entries(aiTools).map(([key, value]) => ({
    id: key,
    name: value.name,
    icon: value.icon,
    count: value.tools.length
}));

const allTools = Object.values(aiTools).reduce((acc, category) => {
    return acc.concat(category.tools.map(tool => ({
        ...tool,
        category: category.name.replace('AI ', '')
    })));
}, []);

const popularTools = [
    allTools[0],
    allTools[3],
    allTools[8],
    allTools[15],
    allTools[22],
    allTools[28]
];
