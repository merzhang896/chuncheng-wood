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

// 统计数字保持稳定显示，避免访客或截图看到动画过程中的中间值。
document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (!Number.isNaN(target)) {
        el.textContent = target.toLocaleString();
    }
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

function toggleFaq(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('span:last-child');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.textContent = '▲';
    } else {
        content.style.display = 'none';
        icon.textContent = '▼';
    }
}
