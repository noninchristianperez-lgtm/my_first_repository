// Cursor custom Logic
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Scroll Progress
        window.addEventListener('scroll', () => {
            const progress = document.getElementById('progress');
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const percentage = (window.scrollY / totalHeight) * 100;
            progress.style.width = percentage + '%';
        });

        // Spotlight Effect en Tarjetas
        document.querySelectorAll('.hw-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });

            // Reactividad del cursor
            card.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(3)';
                cursor.style.background = 'rgba(34, 211, 238, 0.4)';
            });
            card.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'var(--primary)';
            });
        });

        // Animación de aparición con scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section').forEach(s => observer.observe(s));