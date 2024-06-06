
        let currentQuestion = 0;
        const questions = document.querySelectorAll('.question');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        const submitButton = document.getElementById('submit-button');
    
        function showQuestion(index) {
            questions.forEach((question, qIndex) => {
                question.style.display = qIndex === index ? 'block' : 'none';
            });
            prevButton.style.display = index === 0 ? 'none' : 'inline-block';
            nextButton.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
            submitButton.style.display = index === questions.length - 1 ? 'inline-block' : 'none';
        }
    
        function navigateQuestion(direction) {
            currentQuestion += direction;
            showQuestion(currentQuestion);
        }
    
        // Show the first question when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            showQuestion(currentQuestion);
        });
    