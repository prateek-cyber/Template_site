function loadCategory(category) {
  const container = document.getElementById("template-selection");
  const customizeContainer = document.getElementById("customize-container");
  container.innerHTML = "<p>Loading templates...</p>";
  customizeContainer.innerHTML = "";

  // Define templates with images and HTML file links
  const categoryTemplates = {
    ecommerce: [
      { src: "../Images/template1.png", title: "E-commerce Template 1", html: "ecommerce-template-1" },
      { src: "../Images/template2.png", title: "E-commerce Template 2", html: "ecommerce-template-2" },
      { src: "../Images/template3.png", title: "E-commerce Template 3", html: "ecommerce-template-3.html" },
      { src: "../Images/template4.jpg", title: "E-commerce Template 4", html: "ecommerce-template-2"},
      // Add more templates as needed
    ],
    gym: [
      {src: "../Images/template1.png", title: "Gym template 1", html: "gym-template-1"}
    ]
    // Define other categories if needed
  };

  if (!categoryTemplates[category]) {
    container.innerHTML = "<p>No templates available for this category.</p>";
    return;
  }

  // Clear the container and initialize with a row
  container.innerHTML = '<div class="row"></div>';
  const row = container.querySelector(".row");

  // Add each template as a column in the row
  categoryTemplates[category].forEach(template => {
    const templateHTML = `
      <div class="col-md-4 mb-4">
        <div class="card" onclick="loadTemplate('${template.html}')">
          <img src="${template.src}" class="card-img-top" alt="${template.title}">
          <div class="card-body text-center">
            <h5 class="card-title">${template.title}</h5>
          </div>
        </div>
      </div>
    `;
    row.insertAdjacentHTML("beforeend", templateHTML);
  });
}


function loadTemplate(category) {
  const customizeContainer = document.getElementById("customize-container");

  // Set the innerHTML of customizeContainer to the selected template's content
  fetch(`templates/${category}.html`)
    .then(response => response.text())
    .then(data => {
      customizeContainer.innerHTML = data;

      // Add click event to each template after loading them
      document.querySelectorAll('.template').forEach(template => {
        template.addEventListener('click', () => loadTemplate(template));
      });
    })
    .catch(error => {
      customizeContainer.innerHTML = "<p>Failed to load templates. Please try again.</p>";
      console.error("Error loading templates:", error);
    });
}
  