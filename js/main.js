// Main JavaScript file for Academy Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeSidebar();
    loadHomePage();
    
    // Add smooth scrolling effect
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Sidebar functionality
function initializeSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebar = document.getElementById('sidebar');

    // Open sidebar
    menuToggle.addEventListener('click', function() {
        sidebarOverlay.classList.remove('hidden');
        setTimeout(() => {
            sidebar.classList.add('active');
        }, 10);
    });

    // Close sidebar
    function closeSidebarMenu() {
        sidebar.classList.remove('active');
        setTimeout(() => {
            sidebarOverlay.classList.add('hidden');
        }, 300);
    }

    closeSidebar.addEventListener('click', closeSidebarMenu);
    
    // Close sidebar when clicking on overlay
    sidebarOverlay.addEventListener('click', function(e) {
        if (e.target === sidebarOverlay) {
            closeSidebarMenu();
        }
    });

    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !sidebarOverlay.classList.contains('hidden')) {
            closeSidebarMenu();
        }
    });
}

// Page navigation
function showPage(pageName) {
    const mainContent = document.getElementById('mainContent');
    
    // Add fade out effect
    mainContent.style.opacity = '0';
    
    setTimeout(() => {
        // Load the page content
        switch(pageName) {
            case 'home':
                loadHomePage();
                break;
            case 'about':
                loadAboutPage();
                break;
            case 'board':
                loadBoardPage();
                break;
            case 'faculty':
                loadFacultyPage();
                break;
            case 'trainers':
                loadTrainersPage();
                break;
            case 'graduates':
                loadGraduatesPage();
                break;
            case 'departments':
                loadDepartmentsPage();
                break;
            case 'programs':
                loadProgramsPage();
                break;
            case 'education-system':
                loadEducationSystemPage();
                break;
            case 'admission':
                loadAdmissionPage();
                break;
            case 'verification':
                loadVerificationPage();
                break;
            case 'accreditations':
                loadAccreditationsPage();
                break;
            case 'magazine':
                loadMagazinePage();
                break;
            case 'news':
                loadNewsPage();
                break;
            case 'faq':
                loadFAQPage();
                break;
            case 'contact':
                loadContactPage();
                break;
            default:
                loadHomePage();
        }
        
        // Add fade in effect
        mainContent.style.opacity = '1';
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Close sidebar
        document.getElementById('sidebar').classList.remove('active');
        setTimeout(() => {
            document.getElementById('sidebarOverlay').classList.add('hidden');
        }, 300);
        
    }, 150);
}

// Load home page initially
function loadHomePage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = getHomePageHTML();
    
    // Initialize home page interactions
    initializeHomePageAnimations();
}

// Home page animations
function initializeHomePageAnimations() {
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString('ar');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString('ar');
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// Utility functions
function addFadeInClass(elements) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 200);
    });
}

// Form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('الاسم يجب أن يكون أكثر من حرفين');
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('البريد الإلكتروني غير صحيح');
    }
    
    if (!formData.phone || !/^[0-9+\-\s]{10,}$/.test(formData.phone)) {
        errors.push('رقم الهاتف غير صحيح');
    }
    
    return errors;
}

// Show notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 left-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Export functions for use in other files
window.showPage = showPage;
window.showNotification = showNotification;
window.validateForm = validateForm;