# Mania de Sonho Website

## Project Overview
The "Mania de Sonho" website is designed to showcase and facilitate orders for artisanal sweets. It includes sections for introducing the brand, displaying products, taking orders, and collecting user feedback.

---

## File Structure
```
site_test
├── index.html             # Main page of the website
├── estilos.css            # CSS file for styling the website
├── imagens                # Directory containing product images
│   ├── img1.jpeg
│   ├── img2.jpeg
│   ├── img3.jpeg
│   ├── img4.jpeg
│   ├── img5.jpeg
├── scripts                # Directory containing JavaScript files
│   ├── carrossel.js       # Script for managing the product carousel
│   ├── formularios.js     # Script for handling the Orders and Feedback forms
├── package.json           # Node.js package configuration file
├── README.md              # Project documentation
└── server.js              # Backend server for handling form submissions (future implementation)
```

---

## Features
### **Home Section**
- Welcomes users to the world of artisanal sweets with a brief introduction.
- Includes a carousel showcasing product images, displaying one image at a time in a loop.

### **Who We Are Section**
- Provides information about the brand's mission, values, and dedication to creating artisanal sweets.

### **Products Section**
- Displays a carousel at the top with product images.
- Below the carousel, products are displayed in rows with images, descriptions, and a "Faça seu pedido" button that redirects to the Orders section.

### **Orders Section**
- Allows users to place orders for desired products.
- Includes a form with fields for name, email, product, quantity, and an optional message.

### **Feedback Section**
- Users can submit feedback about their experience.
- Includes a form with fields for name, email, and a message.

---

## Setup Instructions
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-repo/mania-de-sonho.git
   ```
2. Navigate to the project directory:
   ```bash
   cd site_test
   ```
3. Install dependencies (if applicable):
   ```bash
   npm install
   ```
4. Open `index.html` in a web browser to view the website.

---

## Package Management
The project uses **Node.js** for package management. Below is an example of the `package.json` file:

```json
{
  "name": "mania-de-sonho",
  "version": "1.0.0",
  "description": "Website for Mania de Sonho, showcasing artisanal sweets.",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "body-parser": "^1.19.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

---

## Feedback Functionality
The feedback form allows users to submit their thoughts and experiences. Upon submission:
1. The form data is sent to the server (future implementation).
2. A confirmation and thank-you email will be sent to the user (future implementation).

---

## Future Improvements
- Implement a backend service to handle form submissions and email notifications.
- Enhance the styling of the website for better user experience.
- Add more product images and detailed descriptions to the Products section.
- Optimize the carousel for better performance and responsiveness.
- Add animations and transitions to improve visual appeal.

---

## Technologies Used
- **HTML5**: For structuring the website.
- **CSS3**: For styling and responsiveness.
- **JavaScript**: For interactivity (carousel, form handling).
- **Node.js**: For backend functionality (future implementation).
- **Express.js**: For handling server-side logic (future implementation).
- **Google Fonts**: For typography.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.