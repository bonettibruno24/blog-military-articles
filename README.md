# Recovery Military Blog

A responsive front-end project focused on a military-themed blog layout. This application was created with the goal of rebuilding a blog previously developed in WordPress, now restructured using modern technologies. It features clean, component-based HTML and styling with **Tailwind CSS v4**, while JavaScript handles dynamic content rendering and component logic.

## 📄 Project Pages

The application consists of 4 main routes:

- `index.html` – Homepage of the blog  
- `article.html` – Individual article page  
- `categories.html` – Category filter/search  
- `search-result.html` – Search results display  

## 🛠️ Technologies Used

- **HTML5**  
- **JavaScript (Vanilla JS)**  
- **Tailwind CSS v4**  
- **PostCSS**

## 📁 Project Structure

```plaintext
blog-military-responsive-two-pages-main-article/
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── styles.css
│
├── src/
│   ├── article.html
│   ├── categories.html
│   ├── search-result.html
│   └── assets/
│       ├── css/
│       ├── output.css
│       └── js/
│           ├── articles-data.js
│           ├── category-articles.js
│           ├── footer-component.js
│           ├── header-component.js
│           ├── main.js
│           ├── recent-articles.js
│           └── sidebar.js

## 🧩 Components

- **Header / Footer Components:** Reusable UI elements for consistent layout  
- **Sidebar:** Lists categories and navigation items  
- **Article Data:** Mock data structure powering dynamic article rendering  
- **Search Functionality:** Filters articles based on keywords or categories

## 🚀 Getting Started

To run the project locally using **Live Server**:

1. Clone the repository:
   ```bash
   git clone https://github.com/bonettibruno24/blog-military-articles.git
   cd blog-military-articles

2. Install dependencies (for Tailwind/PostCSS build if needed):

    bash
    npm install

3. Open the project folder in VS Code and run the Live Server extension on index.html.

⚠️ Make sure you have the Live Server extension installed in VS Code.
You can install it from the Extensions tab by searching for "Live Server".