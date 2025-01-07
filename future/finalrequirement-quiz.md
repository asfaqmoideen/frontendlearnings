### **Overview**

The quiz application allows administrators to manage the platform and users to register, log in, and participate in quizzes. It provides functionality for quiz management, quiz-taking, and result tracking.

---

### **Roles and Responsibilities**

#### 1. **Admin**

* **Bulk MCQ Upload (CSV):**
  * Ability to upload a CSV file containing multiple-choice questions (MCQs).
  * Validate the format and content of the uploaded file.
  * Store the MCQs in the database categorized by quiz type.
* **Manage Users (CRUD):**
  * Create, read, update, and delete user profiles.
  * Assign roles (e.g., Admin or User).
  * *Deactivate or reactivate user accounts.*
* **Generate Quiz Results:**
  * View a summary of all user performances by quiz type.
  * Generate individual user result reports.
  * Export results as CSV or PDF.

---

#### 2. **User**

* **Register:**
  * Sign up with basic details (Name, Email, Password).
  * Receive email verification (optional).
* **Login:**
  * Authenticate using email and password.
  * Maintain session with a token-based authentication system.
* **Quiz Type Selection:**
  * Browse available quiz types.
  * Select a quiz type to attend.
* **Attend Quiz:**
  * Start a quiz with a pre-set number of questions.
  * Each question has a timer (optional).
  * Submit answers interactively.
* **View Quiz History:**
  * Access past quiz results, categorized by date and quiz type.
  * Review correct and incorrect answers (optional).

---

### **Detailed Functional Requirements**

#### **1. Admin Features**

* **Bulk Upload:**
  * CSV Format:
    ```
    Question, Option A, Option B, Option C, Option D, Correct Option, Quiz Type
    ```
  * Validate:
    * Check for empty fields or incorrect formats.
    * Reject invalid rows and notify the admin.
  * Store questions with metadata (difficulty level, quiz type, etc.).
* **Manage Users:**
  * List all users with search and filter options.
  * Edit user details like name, email, and role.
  * Delete users and mark accounts as inactive/active.
* **Generate Results:**
  * Summary:
    * Total quizzes taken.
    * Average scores by quiz type.
  * Individual:
    * Detailed performance for each user.
    * Exportable in various formats.

---

#### **2. User Features**

* **Register:**
  * Fields: Name, Email, Password, Confirm Password.
  * Password validation (length, special characters, etc.).
  * Option to upload a profile picture.
* **Login:**
  * Input: Email and Password.
  * Feedback on invalid credentials.
  * Password reset option.
* **Quiz Type Selection:**
  * Display quiz types in a list or grid view.
  * Show quiz details (e.g., duration, difficulty level).
  * Filter or search for quizzes by name or category.
* **Attend Quiz:**
  * Interactive UI:
    * Show one question at a time.
    * Options for skipping or marking a question.
  * Timer for the entire quiz or each question.
  * Submit functionality to calculate and store results.
* **Quiz History:**
  * Display past quizzes with:
    * Date and time of quiz.
    * Score and status (Pass/Fail).
  * Option to review answers with explanations (if enabled).

---

### **Workflow**

#### **User Workflow:**

1. **Register/Login** :

* Register or log in to access the quiz dashboard.

1. **Select Quiz Type** :

* Choose a category (e.g., General Knowledge, Science).
* Begin the quiz.

1. **Attend Quiz** :

* Questions displayed one by one.
* Submit answers and complete the quiz.

1. **View Results** :

* Results displayed immediately or in the quiz history section.

---

### **Non-Functional Requirements**

* **Scalability** : Support multiple users concurrently.
* **Security** : Protect user data with encryption.
* **Usability** : Intuitive interface for all users.
* **Performance** : Ensure quizzes load under 2 seconds.
