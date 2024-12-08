function loadTemplate(category) {
  const customizeContainer = document.getElementById("customize-container");

  // Set the innerHTML of customizeContainer to the selected template's content
  fetch(`../templates/${category}.html`)
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

// Call the function on page load
window.onload = () => {
  // Get the query parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('template'); // Retrieve the 'template' parameter

  if (category) {
    loadTemplate(category); // Pass the retrieved category to the loadTemplate function
  } else {
    console.error("No template category provided in the URL.");
    document.getElementById("customize-container").innerHTML = "<p>No template selected! Please go back and select a template.</p>";
  }
};

// Manually call loadTemplate with a specific templateId
//loadTemplate('e-commerce-template-1');

// Add customization options
function addText() {
  const templateContainer = document.getElementById('template-container');
  const newText = document.createElement('div');
  newText.contentEditable = "true";
  newText.textContent = "Editable Text";
  newText.style.border = "1px dashed #ccc";
  newText.style.padding = "10px";
  newText.style.margin = "10px 0";
  templateContainer.appendChild(newText);
}

function addImage() {
  const templateContainer = document.getElementById('template-container');
  const newImage = document.createElement('img');
  newImage.src = "placeholder-image.jpg"; // Replace with your placeholder image
  newImage.alt = "Custom Image";
  newImage.style.width = "200px";
  newImage.style.height = "auto";
  newImage.style.margin = "10px 0";
  templateContainer.appendChild(newImage);
}
