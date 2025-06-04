// Comprehensive Tulu vocabulary data
const vocabularyData = {
    "Basic Greetings": [
        {"tulu": "namaskAra", "english": "Hello", "pronunciation": "na-mas-kaa-ra"},
        {"tulu": "encha ullar", "english": "How are you?", "pronunciation": "en-cha ul-lar"},
        {"tulu": "yaan usar ulle", "english": "I am fine", "pronunciation": "yaan u-saar ul-le"},
        {"tulu": "solmelu", "english": "Thank you", "pronunciation": "sol-me-lu"},
        {"tulu": "barpae", "english": "Goodbye", "pronunciation": "bar-pe"}
    ],
    "Family & People": [
        {"tulu": "ajje", "english": "Grandmother", "pronunciation": "aj-je"},
        {"tulu": "yaan", "english": "I", "pronunciation": "yaan"},
        {"tulu": "eer", "english": "You (respectful)", "pronunciation": "ee-r"},
        {"tulu": "aaye", "english": "He", "pronunciation": "aa-ye"},
        {"tulu": "aal", "english": "She", "pronunciation": "aal"}
    ],
    "Numbers & Counting": [
        {"tulu": "onji", "english": "One", "pronunciation": "on-ji"},
        {"tulu": "raDD", "english": "Two", "pronunciation": "radd"},
        {"tulu": "mooji", "english": "Three", "pronunciation": "moo-ji"},
        {"tulu": "naal", "english": "Four", "pronunciation": "naal"},
        {"tulu": "ain", "english": "Five", "pronunciation": "a-in"}
    ],
    "Colors": [
        {"tulu": "kappu", "english": "Black", "pronunciation": "kap-pu"},
        {"tulu": "boldu", "english": "White", "pronunciation": "bol-du"},
        {"tulu": "kempu", "english": "Red", "pronunciation": "kem-pu"},
        {"tulu": "neeli", "english": "Blue", "pronunciation": "nee-li"},
        {"tulu": "pachhe", "english": "Green", "pronunciation": "pach-he"}
    ],
    "Fruits": [
        {"tulu": "bare parndh", "english": "Banana", "pronunciation": "ba-re parndh"},
        {"tulu": "kukku", "english": "Mango", "pronunciation": "kuk-ku"},
        {"tulu": "pela kai", "english": "Jackfruit", "pronunciation": "pe-la kai"},
        {"tulu": "peraye", "english": "Guava", "pronunciation": "pe-ra-ye"},
        {"tulu": "kark parnd", "english": "Apple", "pronunciation": "kark parnd"}
    ],
    "Vegetables": [
        {"tulu": "gulla", "english": "Brinjal", "pronunciation": "gul-la"},
        {"tulu": "batate", "english": "Potato", "pronunciation": "ba-ta-te"},
        {"tulu": "tometo", "english": "Tomato", "pronunciation": "to-me-to"},
        {"tulu": "neerulli", "english": "Onion", "pronunciation": "nee-rul-li"},
        {"tulu": "kumbuda", "english": "Pumpkin", "pronunciation": "kum-bu-da"}
    ],
    "Animals": [
        {"tulu": "naayi", "english": "Dog", "pronunciation": "naa-yi"},
        {"tulu": "putche", "english": "Cat", "pronunciation": "put-che"},
        {"tulu": "petta", "english": "Cow", "pronunciation": "pet-ta"},
        {"tulu": "ane", "english": "Elephant", "pronunciation": "a-ne"},
        {"tulu": "pili", "english": "Tiger", "pronunciation": "pi-li"}
    ],
    "Body Parts": [
        {"tulu": "tarae", "english": "Head", "pronunciation": "ta-rae"},
        {"tulu": "kaNN", "english": "Eye", "pronunciation": "kann"},
        {"tulu": "kebi", "english": "Ear", "pronunciation": "ke-bi"},
        {"tulu": "kai", "english": "Hand", "pronunciation": "kai"},
        {"tulu": "kAr", "english": "Leg", "pronunciation": "kaar"}
    ],
    "Daily Activities": [
        {"tulu": "malpuni", "english": "Work", "pronunciation": "mal-pu-ni"},
        {"tulu": "jeppuni", "english": "Sleep", "pronunciation": "jep-pu-ni"},
        {"tulu": "tinnuni", "english": "Eat", "pronunciation": "tin-nu-ni"},
        {"tulu": "parpini", "english": "Drink", "pronunciation": "par-pi-ni"},
        {"tulu": "saippini", "english": "Walk", "pronunciation": "sai-pi-ni"}
    ],
    "Time Expressions": [
        {"tulu": "portu", "english": "Time", "pronunciation": "por-tu"},
        {"tulu": "tingolu", "english": "Month", "pronunciation": "tin-go-lu"},
        {"tulu": "varsha", "english": "Year", "pronunciation": "var-sha"},
        {"tulu": "ainji", "english": "Now", "pronunciation": "ain-ji"},
        {"tulu": "mUvoDu", "english": "Tomorrow", "pronunciation": "moo-vo-du"}
    ],
    "Food & Drinks": [
        {"tulu": "vaNas", "english": "Lunch/Dinner", "pronunciation": "va-nas"},
        {"tulu": "neer", "english": "Water", "pronunciation": "neer"},
        {"tulu": "chaaya", "english": "Tea", "pronunciation": "chaa-ya"},
        {"tulu": "kori", "english": "Chicken", "pronunciation": "ko-ri"},
        {"tulu": "meen", "english": "Fish", "pronunciation": "meen"}
    ],
    "Places": [
        {"tulu": "ill", "english": "Home", "pronunciation": "ill"},
        {"tulu": "oor", "english": "Place", "pronunciation": "oor"},
        {"tulu": "kudla", "english": "Mangalore", "pronunciation": "kud-la"},
        {"tulu": "kotya", "english": "Bathroom", "pronunciation": "kot-ya"},
        {"tulu": "olu", "english": "Where", "pronunciation": "o-lu"}
    ],
    "Cultural Terms": [
        {"tulu": "bhuta kola", "english": "Spirit worship", "pronunciation": "bhoo-ta ko-la"},
        {"tulu": "yakshagana", "english": "Folk theater", "pronunciation": "yak-sha-ga-na"},
        {"tulu": "tulunadu", "english": "Tulu region", "pronunciation": "tu-lu-na-du"},
        {"tulu": "paddana", "english": "Oral epic", "pronunciation": "pad-da-na"},
        {"tulu": "tigalari", "english": "Traditional script", "pronunciation": "ti-ga-la-ri"}
    ]
};

class QuestionGenerator {
    constructor() {
        this.allVocabulary = [];
        this.initializeVocabulary();
    }
    
    initializeVocabulary() {
        // Flatten all vocabulary into a single array
        for (const category in vocabularyData) {
            this.allVocabulary.push(...vocabularyData[category]);
        }
    }
    
    generateQuestions(category, count = 6) {
        const categoryVocab = vocabularyData[category] || [];
        const questions = [];
        
        // Generate mix of question types
        for (let i = 0; i < count; i++) {
            const wordData = categoryVocab[Math.floor(Math.random() * categoryVocab.length)];
            const questionType = Math.random() < 0.5 ? 'TULU_TO_ENGLISH' : 'ENGLISH_TO_TULU';
            
            if (questionType === 'TULU_TO_ENGLISH') {
                questions.push(this.createTuluToEnglishQuestion(wordData, category));
            } else {
                questions.push(this.createEnglishToTuluQuestion(wordData, category));
            }
        }
        
        return questions;
    }
    
    createTuluToEnglishQuestion(wordData, category) {
        const incorrectOptions = this.getIncorrectEnglishOptions(wordData.english, category);
        const options = this.shuffleArray([wordData.english, ...incorrectOptions]);
        
        return {
            type: 'multiple_choice',
            question: `What does "${wordData.tulu}" mean?`,
            options: options,
            correctAnswer: wordData.english,
            pronunciation: wordData.pronunciation,
            tuluWord: wordData.tulu
        };
    }
    
    createEnglishToTuluQuestion(wordData, category) {
        const incorrectOptions = this.getIncorrectTuluOptions(wordData.tulu, category);
        const options = this.shuffleArray([wordData.tulu, ...incorrectOptions]);
        
        return {
            type: 'multiple_choice',
            question: `How do you say "${wordData.english}" in Tulu?`,
            options: options,
            correctAnswer: wordData.tulu,
            pronunciation: wordData.pronunciation,
            englishWord: wordData.english
        };
    }
    
    getIncorrectEnglishOptions(correctAnswer, category) {
        const categoryVocab = vocabularyData[category] || [];
        const otherWords = categoryVocab
            .filter(word => word.english !== correctAnswer)
            .map(word => word.english);
        
        // If not enough words in category, add from other categories
        if (otherWords.length < 3) {
            const allOtherWords = this.allVocabulary
                .filter(word => word.english !== correctAnswer)
                .map(word => word.english);
            otherWords.push(...allOtherWords);
        }
        
        return this.shuffleArray(otherWords).slice(0, 3);
    }
    
    getIncorrectTuluOptions(correctAnswer, category) {
        const categoryVocab = vocabularyData[category] || [];
        const otherWords = categoryVocab
            .filter(word => word.tulu !== correctAnswer)
            .map(word => word.tulu);
        
        // If not enough words in category, add from other categories
        if (otherWords.length < 3) {
            const allOtherWords = this.allVocabulary
                .filter(word => word.tulu !== correctAnswer)
                .map(word => word.tulu);
            otherWords.push(...allOtherWords);
        }
        
        return this.shuffleArray(otherWords).slice(0, 3);
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

class HeartSystem {
    constructor() {
        this.maxHearts = 5;
        this.currentHearts = 5;
        this.regenerationInterval = 60000; // 1 minute
        this.timerUpdateInterval = 1000; // 1 second
        this.regenerationTimer = null;
        this.displayTimer = null;
        this.nextHeartTime = null;
        
        this.elements = {
            heartsDisplay: document.getElementById('heartsDisplay'),
            timerDisplay: document.getElementById('timerDisplay'),
            modalOverlay: document.getElementById('modalOverlay'),
            modalTimer: document.getElementById('modalTimer'),
            modalPracticeBtn: document.getElementById('modalPracticeBtn'),
            modalWaitBtn: document.getElementById('modalWaitBtn')
        };
        
        this.init();
    }
    
    init() {
        this.updateHeartsDisplay();
        this.bindEvents();
    }
    
    bindEvents() {
        this.elements.modalPracticeBtn.addEventListener('click', () => this.practiceMode());
        this.elements.modalWaitBtn.addEventListener('click', () => this.closeModal());
        
        // Close modal when clicking overlay
        this.elements.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.elements.modalOverlay) {
                this.closeModal();
            }
        });
    }
    
    updateHeartsDisplay() {
        this.elements.heartsDisplay.innerHTML = '';
        
        for (let i = 0; i < this.maxHearts; i++) {
            const heart = document.createElement('span');
            heart.className = 'heart';
            heart.textContent = i < this.currentHearts ? '❤️' : '🖤';
            this.elements.heartsDisplay.appendChild(heart);
        }
    }
    
    loseHeart() {
        if (this.currentHearts > 0) {
            // Add losing animation to the last heart
            const hearts = this.elements.heartsDisplay.querySelectorAll('.heart');
            const heartToLose = hearts[this.currentHearts - 1];
            heartToLose.classList.add('losing');
            
            setTimeout(() => {
                this.currentHearts--;
                this.updateHeartsDisplay();
                
                // Start regeneration timer if this is the first heart lost
                if (this.currentHearts === this.maxHearts - 1) {
                    this.startRegenerationTimer();
                }
                
                // Show modal if no hearts left
                if (this.currentHearts === 0) {
                    this.showModal();
                    return false; // Return false to indicate no hearts left
                }
                
                heartToLose.classList.remove('losing');
            }, 250);
        }
        return this.currentHearts > 0;
    }
    
    gainHeart() {
        if (this.currentHearts < this.maxHearts) {
            this.currentHearts++;
            this.updateHeartsDisplay();
            
            // Add regeneration animation to the new heart
            const hearts = this.elements.heartsDisplay.querySelectorAll('.heart');
            const newHeart = hearts[this.currentHearts - 1];
            newHeart.classList.add('regenerating');
            
            setTimeout(() => {
                newHeart.classList.remove('regenerating');
            }, 800);
            
            // Stop timer if all hearts are full
            if (this.currentHearts === this.maxHearts) {
                this.stopRegenerationTimer();
            } else {
                // Restart timer for next heart
                this.startRegenerationTimer();
            }
            
            // Close modal if it's open
            this.closeModal();
        }
    }
    
    hasHearts() {
        return this.currentHearts > 0;
    }
    
    startRegenerationTimer() {
        this.stopRegenerationTimer(); // Clear any existing timer
        
        this.nextHeartTime = Date.now() + this.regenerationInterval;
        this.updateTimerDisplay();
        this.elements.timerDisplay.classList.remove('hidden');
        
        // Update display timer every second
        this.displayTimer = setInterval(() => {
            this.updateTimerDisplay();
        }, this.timerUpdateInterval);
        
        // Set regeneration timer
        this.regenerationTimer = setTimeout(() => {
            this.gainHeart();
        }, this.regenerationInterval);
    }
    
    stopRegenerationTimer() {
        if (this.regenerationTimer) {
            clearTimeout(this.regenerationTimer);
            this.regenerationTimer = null;
        }
        
        if (this.displayTimer) {
            clearInterval(this.displayTimer);
            this.displayTimer = null;
        }
        
        this.elements.timerDisplay.classList.add('hidden');
    }
    
    updateTimerDisplay() {
        if (!this.nextHeartTime) return;
        
        const timeLeft = Math.max(0, this.nextHeartTime - Date.now());
        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Update main timer
        this.elements.timerDisplay.textContent = `Next heart in: ${timeString}`;
        
        // Update modal timer if visible
        const modalTimerText = this.elements.modalTimer.querySelector('.timer-text');
        if (modalTimerText) {
            modalTimerText.textContent = timeString;
        }
        
        // If time is up, regenerate heart
        if (timeLeft === 0) {
            this.gainHeart();
        }
    }
    
    showModal() {
        this.elements.modalOverlay.classList.add('show');
        
        // Update modal timer
        this.updateTimerDisplay();
        
        // Focus first button for accessibility
        setTimeout(() => {
            this.elements.modalPracticeBtn.focus();
        }, 100);
    }
    
    closeModal() {
        this.elements.modalOverlay.classList.remove('show');
    }
    
    practiceMode() {
        this.gainHeart();
        this.closeModal();
    }
}

class LearningApp {
    constructor() {
        this.heartSystem = new HeartSystem();
        this.questionGenerator = new QuestionGenerator();
        this.currentLesson = null;
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.questionsCorrect = 0;
        this.questionsTotal = 0;
        this.currentQuestions = [];
        
        this.elements = {
            lessonsScreen: document.getElementById('lessonsScreen'),
            learningScreen: document.getElementById('learningScreen'),
            completeScreen: document.getElementById('completeScreen'),
            lessonsGrid: document.getElementById('lessonsGrid'),
            progressFill: document.getElementById('progressFill'),
            closeBtn: document.getElementById('closeBtn'),
            questionText: document.getElementById('questionText'),
            pronunciation: document.getElementById('pronunciation'),
            answersContainer: document.getElementById('answersContainer'),
            checkBtn: document.getElementById('checkBtn'),
            feedbackPanel: document.getElementById('feedbackPanel'),
            feedbackIcon: document.getElementById('feedbackIcon'),
            feedbackText: document.getElementById('feedbackText'),
            feedbackExplanation: document.getElementById('feedbackExplanation'),
            continueBtn: document.getElementById('continueBtn'),
            completeStats: document.getElementById('completeStats'),
            backToLessonsBtn: document.getElementById('backToLessonsBtn')
        };
        
        this.init();
    }
    
    init() {
        this.renderLessons();
        this.bindEvents();
    }
    
    bindEvents() {
        this.elements.closeBtn.addEventListener('click', () => this.exitLesson());
        this.elements.checkBtn.addEventListener('click', () => this.checkAnswer());
        this.elements.continueBtn.addEventListener('click', () => this.nextQuestion());
        this.elements.backToLessonsBtn.addEventListener('click', () => this.backToLessons());
        
        // Close modal when clicking overlay or pressing escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.heartSystem.elements.modalOverlay.classList.contains('show')) {
                    this.heartSystem.closeModal();
                } else if (this.elements.learningScreen.classList.contains('hidden') === false) {
                    this.exitLesson();
                }
            }
        });
    }
    
    renderLessons() {
        this.elements.lessonsGrid.innerHTML = '';
        
        Object.keys(vocabularyData).forEach((category, index) => {
            const vocabularyCount = vocabularyData[category].length;
            const lessonCard = document.createElement('div');
            lessonCard.className = 'lesson-card';
            lessonCard.innerHTML = `
                <h3>${category}</h3>
                <p>Practice essential ${category.toLowerCase()} in Tulu</p>
                <div class="lesson-meta">
                    <span>${vocabularyCount} words</span>
                    <span>⭐ Basic</span>
                </div>
            `;
            
            lessonCard.addEventListener('click', () => this.startLesson(category));
            this.elements.lessonsGrid.appendChild(lessonCard);
        });
    }
    
    startLesson(category) {
        if (!this.heartSystem.hasHearts()) {
            this.heartSystem.showModal();
            return;
        }
        
        this.currentLesson = category;
        this.currentQuestionIndex = 0;
        this.questionsCorrect = 0;
        this.currentQuestions = this.questionGenerator.generateQuestions(category, 6);
        this.questionsTotal = this.currentQuestions.length;
        
        this.showScreen('learningScreen');
        this.loadQuestion();
    }
    
    loadQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Update progress
        const progress = (this.currentQuestionIndex / this.questionsTotal) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        
        // Display question
        this.elements.questionText.textContent = question.question;
        
        // Display pronunciation if available
        if (question.pronunciation) {
            this.elements.pronunciation.textContent = `Pronunciation: ${question.pronunciation}`;
            this.elements.pronunciation.style.display = 'block';
        } else {
            this.elements.pronunciation.style.display = 'none';
        }
        
        // Clear previous answers
        this.elements.answersContainer.innerHTML = '';
        this.selectedAnswer = null;
        
        // Create answer buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-button';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(button, option));
            this.elements.answersContainer.appendChild(button);
        });
        
        // Reset check button
        this.elements.checkBtn.classList.add('disabled');
        this.elements.checkBtn.textContent = 'CHECK';
        
        // Hide feedback panel
        this.elements.feedbackPanel.classList.remove('show', 'incorrect');
    }
    
    selectAnswer(button, answer) {
        // Remove previous selection
        const allButtons = this.elements.answersContainer.querySelectorAll('.answer-button');
        allButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Select new answer
        button.classList.add('selected');
        this.selectedAnswer = answer;
        
        // Enable check button
        this.elements.checkBtn.classList.remove('disabled');
    }
    
    checkAnswer() {
        if (!this.selectedAnswer || this.elements.checkBtn.classList.contains('disabled')) {
            return;
        }
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correctAnswer;
        
        // Disable all answer buttons
        const allButtons = this.elements.answersContainer.querySelectorAll('.answer-button');
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected') && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Show feedback
        this.showFeedback(isCorrect, question);
        
        if (isCorrect) {
            this.questionsCorrect++;
        } else {
            // Lose a heart for wrong answer
            const stillHasHearts = this.heartSystem.loseHeart();
            if (!stillHasHearts) {
                // If no hearts left, the modal will be shown by HeartSystem
                return;
            }
        }
        
        // Hide check button
        this.elements.checkBtn.style.display = 'none';
    }
    
    showFeedback(isCorrect, question) {
        const panel = this.elements.feedbackPanel;
        
        if (isCorrect) {
            panel.classList.remove('incorrect');
            this.elements.feedbackIcon.textContent = '✅';
            this.elements.feedbackText.innerHTML = '<h3>Correct!</h3>';
            this.elements.feedbackExplanation.textContent = `Well done! "${question.correctAnswer}" is the right answer.`;
        } else {
            panel.classList.add('incorrect');
            this.elements.feedbackIcon.textContent = '❌';
            this.elements.feedbackText.innerHTML = '<h3>Incorrect</h3>';
            this.elements.feedbackExplanation.textContent = `The correct answer is "${question.correctAnswer}".`;
        }
        
        panel.classList.add('show');
    }
    
    nextQuestion() {
        this.elements.feedbackPanel.classList.remove('show');
        this.elements.checkBtn.style.display = 'block';
        
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.completeLesson();
        } else {
            this.loadQuestion();
        }
    }
    
    completeLesson() {
        // Update progress to 100%
        this.elements.progressFill.style.width = '100%';
        
        // Show completion stats
        const accuracy = Math.round((this.questionsCorrect / this.questionsTotal) * 100);
        this.elements.completeStats.innerHTML = `
            <div>Questions Correct: ${this.questionsCorrect}/${this.questionsTotal}</div>
            <div>Accuracy: ${accuracy}%</div>
            <div>Category: ${this.currentLesson}</div>
        `;
        
        this.showScreen('completeScreen');
    }
    
    exitLesson() {
        this.showScreen('lessonsScreen');
        this.currentLesson = null;
        this.elements.feedbackPanel.classList.remove('show');
    }
    
    backToLessons() {
        this.showScreen('lessonsScreen');
    }
    
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        
        // Show target screen
        this.elements[screenId].classList.remove('hidden');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new LearningApp();
    
    // Prevent context menu on heart emojis (better UX)
    document.addEventListener('contextmenu', (e) => {
        if (e.target.classList.contains('heart')) {
            e.preventDefault();
        }
    });
    
    // Add some demo instructions after a short delay
    setTimeout(() => {
        console.log('🎮 TuluLearn Learning App - Updated Version');
        console.log('📚 Now featuring all 13 vocabulary categories');
        console.log('❌ Pronunciation typing questions removed');
        console.log('💡 Only multiple choice questions for better learning experience');
        console.log('⏱️ Hearts regenerate every 1 minute');
    }, 1000);
});