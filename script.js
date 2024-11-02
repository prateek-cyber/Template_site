// function loadTemplate(templateName, imageUrl) {
//     const templateContainer = document.getElementById("template-container");
//     templateContainer.innerHTML = ""; // Clear previous content
  
//     // Create image element for the selected template
//     const img = document.createElement("img");
//     img.src = imageUrl;
//     img.alt = `Selected ${templateName}`;
//     img.style.width = "100%";
//     img.style.borderRadius = "8px";
    
//     // Insert the selected template image
//     templateContainer.appendChild(img);
  
//     // // Optionally add additional customizable content below the image
//     // const content = ["Header", "Image", "Text", "Footer"];
//     // content.forEach((item) => {
//     //   const div = document.createElement("div");
//     //   div.className = "draggable-item";
//     //   div.textContent = item;
//     //   templateContainer.appendChild(div);
//     // });
  
//     // Initialize SortableJS for drag-and-drop
//     new Sortable(templateContainer, {
//       animation: 150,
//       ghostClass: 'sortable-ghost'
//     });
//   }

// function loadTemplate(templateName) {
//   const templateContainer = document.getElementById("template-container");
//   templateContainer.innerHTML = templates[templateName] || "<p>Template not found.</p>";

//   // Initialize SortableJS on editable blocks
//   new Sortable(templateContainer, {
//     animation: 150,
//     ghostClass: 'sortable-ghost'
//   });
// }

// // Optional: Image uploader function for image editing (placeholder example)
// function openImageUploader(imgElement) {
//   const newImageUrl = prompt("Enter the URL of the new image:");
//   if (newImageUrl) {
//     imgElement.src = newImageUrl;
//   }
// }

function loadCategory(category) {
  const container = document.getElementById("template-selection");
  container.innerHTML = "<p>Loading templates...</p>";

  // Fetch the HTML file for the selected category
  fetch(`templates/${category}.html`)
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;

      // Add click event to each template after loading them
      document.querySelectorAll('.template').forEach(template => {
        template.addEventListener('click', () => loadTemplate(template));
      });
    })
    .catch(error => {
      container.innerHTML = "<p>Failed to load templates. Please try again.</p>";
      console.error("Error loading templates:", error);
    });
}

const templates = {
  "ecommerce-template-1": `
    <div class="template-container">
      <div class="header" contenteditable="true">Welcome to Our Store!</div>
      <div class="content" contenteditable="true">Exclusive deals on our products!</div>
      <div class="footer" contenteditable="true">Thank you for shopping with us!</div>
    </div>
  `,
  "ecommerce-template-2": `
    <div class="template-container">
      <div class="header" contenteditable="true">Big Sale Event</div>
      <div class="content" contenteditable="true">Don't miss out on discounts!</div>
      <div class="footer" contenteditable="true">Shop now and save!</div>
    </div>
  `
};

function loadTemplate(templateId) {
  const customizeContainer = document.getElementById("customize-container");

  // Set the innerHTML of customizeContainer to the selected template's content
  customizeContainer.innerHTML = templates[templateId] || "<p>Template not found.</p>";

  // Initialize SortableJS for drag-and-drop
  new Sortable(customizeContainer, {
    animation: 150,
    ghostClass: 'sortable-ghost'
  });
}




//   const templates = {
//     template1: `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Email Template</title>
//     <style>
//       body {
//         margin: 0;
//         padding: 0;
//         font-family: Arial, sans-serif;
//         background-color: #f4f4f4;
//         color: #333;
//     }
//       .email-body {
//         display: flex;
//       }
//     </style>
//     </head>
//     <body>
//     <h1>Template 2</h1>
//     <div class = "email-body">
//     <div>Body of template 2</div>
//     </div>
//     <footer>
//     <h3>Footer of template 2</h3>
//     </footer>
//     </body>
//     `,
//     template2: `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Email Template</title>
//   <style>
//     /* Basic email reset and layout */
//     body, html {
//       margin: 0;
//       padding: 0;
//       font-family: Arial, sans-serif;
//       background-color: #f4f4f4;
//       color: #333;
//     }
//     .email-container {
//       max-width: 600px;
//       margin: 20px auto;
//       background-color: #ffffff;
//       border-radius: 8px;
//       overflow: hidden;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     }
//     .header {
//       background-color: #4CAF50;
//       padding: 20px;
//       text-align: center;
//       color: #ffffff;
//     }
//     .header h1 {
//       margin: 0;
//       font-size: 24px;
//     }
//     .content {
//       padding: 20px;
//     }
//     .content h2 {
//       font-size: 20px;
//       color: #4CAF50;
//     }
//     .content p {
//       line-height: 1.6;
//       margin: 15px 0;
//     }
//     .image-placeholder {
//       background-color: #e0e0e0;
//       width: 100%;
//       height: 200px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       color: #999;
//       font-size: 16px;
//       margin: 20px 0;
//       border-radius: 8px;
//     }
//     .footer {
//       background-color: #f4f4f4;
//       padding: 15px;
//       text-align: center;
//       font-size: 14px;
//       color: #777;
//     }
//     .footer a {
//       color: #4CAF50;
//       text-decoration: none;
//     }
//   </style>
// </head>
// <body>
//   <div class="email-container">
//     <!-- Header Section -->
//     <div class="header" contenteditable="true">
//       <h1>Welcome to Our Newsletter!</h1>
//     </div>

//     <!-- Main Content Section -->
//     <div class="content">
//       <h2 contenteditable="true">Hello, [User's Name]</h2>
//       <p contenteditable="true">
//         We are excited to bring you the latest updates and insights from our company. Here’s what’s happening this month!
//       </p>

//       <!-- Image Placeholder -->
//       <div class="image-placeholder" contenteditable="true">
//         Image Placeholder
//       </div>

//       <p contenteditable="true">
//         This section could include a brief description or summary of a key topic, announcement, or recent accomplishment. Keep it short and sweet!
//       </p>

//       <h2 contenteditable="true">Upcoming Events</h2>
//       <p contenteditable="true">
//         Don’t miss out on our upcoming events and webinars! Join us for exclusive insights, tips, and networking opportunities.
//       </p>
//     </div>

//     <!-- Footer Section -->
//     <div class="footer">
//       <p contenteditable="true">
//         You are receiving this email because you subscribed to our newsletter. If you’d like to unsubscribe, click <a href="#">here</a>.
//       </p>
//       <p contenteditable="true">
//         &copy; 2024 Company Name, All rights reserved.
//       </p>
//     </div>
//   </div>
// </body>
// </html>

//     `,
//     // Add more templates as needed
//   };
  
  