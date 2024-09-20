var generateButton = document.getElementById('button');
var resumeOutput = document.getElementById('resume_output');
// Change event to 'click' since you're using a button
generateButton.addEventListener('click', function (event) {
    // Prevent form submission behavior
    event.preventDefault();
    // Get values from input fields and textareas
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var date = document.getElementById('date').value;
    var aboutme = document.getElementById('aboutme').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    // Corrected these lines (edu and exp are textareas, not inputs)
    var edu = document.getElementById('education').value;
    var exp = document.getElementById('experience').value;
    // Get skills from textareas
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    // Generate resume HTML
    var RESUMEHTML = "\n        <h2><b>RESUME</b></h2>\n        <h3>PERSONAL INFO</h3>\n        <p><b>NAME:</b> ".concat(name, "</p>\n        <p><b>FATHER NAME:</b> ").concat(fathername, "</p>\n        <p><b>D.O.B:</b> ").concat(date, "</p>\n        <p><b>ABOUT ME :</b> ").concat(aboutme, "</p>\n        <h3>CONTACT INFO</h3>\n        <p><b>CONTACT NO.:</b> ").concat(phone, "</p>\n        <p><b>EMAIL:</b> ").concat(email, "</p>\n        <p><b>LOCATION:</b> ").concat(location, "</p>\n        <h3>EDUCATION :</h3>\n        <p>").concat(edu, "</p>\n        <h3>EXPERIENCE :</h3>\n        <p>").concat(exp, "</p>\n        <h3>PROFESSIONAL SKILLS :</h3>\n        <ul>\n            <li>").concat(skill1, "</li>\n            <li>").concat(skill2, "</li>\n            <li>").concat(skill3, "</li>\n        </ul>\n    ");
    // Display resume HTML in the output div
    if (resumeOutput) {
        resumeOutput.innerHTML = RESUMEHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
