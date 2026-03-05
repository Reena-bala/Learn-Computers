        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });

        function scrollToForm(courseName) {
            document.getElementById('course').value = courseName;
            document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('active');
        }

        function handleSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const course = document.getElementById('course').value;
            alert(`Thank you ${name}! Your enrollment for ${course} has been received. We will contact you soon at the provided phone number.`);
            event.target.reset();
        }
