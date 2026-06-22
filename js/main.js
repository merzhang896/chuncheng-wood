// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 返回顶部
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 表单提交
function handleSubmit(formId, successMessage) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(successMessage);
            form.reset();
        });
    }
}

handleSubmit('joinForm', '感谢您的加盟申请！我们的工作人员会尽快与您联系。');
handleSubmit('contactForm', '感谢您的留言！我们会尽快回复您。');

// 数字滚动动画
function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 观察者 - 数字动画
const observerOptions = {
    threshold: 0.5
};

const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateNumber(entry.target, 0, target, 2000);
            numberObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    numberObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('.gallery-img').forEach(img => {
        img.onerror = function() {
            const fallback = this.getAttribute('data-fallback');
            if (fallback) {
                this.src = fallback;
            }
        };
    });
});

function openImage(element) {
    const img = element.querySelector('img');
    const caption = element.querySelector('.gallery-overlay h4').textContent;
    document.getElementById('modalImage').src = img.src;
    document.getElementById('modalCaption').textContent = caption;
    document.getElementById('imageModal').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeImage() {
    document.getElementById('imageModal').classList.remove('visible');
    document.body.style.overflow = '';
}