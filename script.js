function getFormvalue(event) {
    // 1. Prevent the default form submission which causes a page reload.
    // This is required when handling form submission via JavaScript.
    event.preventDefault();

    // 2. Access the form elements and retrieve the values.
    // We can use document.forms and the element's 'name' attribute.
    const form = document.getElementById("form1");
    
    // Retrieve values and use .trim() to handle extra leading/trailing spaces
    const firstName = form.elements.fname.value.trim();
    const lastName = form.elements.lname.value.trim();
    
    // 3. Concatenate the full name and display the alert.
    const fullName = `${firstName} ${lastName}`;
    
    // Optional: Check for empty fields (Edge Case: Empty Fields)
    if (firstName === '' && lastName === '') {
        alert("Please enter a first name and a last name.");
        return;
    }
    
    alert(fullName);
}