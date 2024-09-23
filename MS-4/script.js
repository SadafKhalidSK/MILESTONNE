var generateButton = document.getElementById('button');
var resumeOutput = document.getElementById('resume_output');
generateButton.addEventListener('click', function (event) {
    event.preventDefault();
    // Get values 
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var date = document.getElementById('date').value;
    var aboutme = document.getElementById('aboutme').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    var edu = document.getElementById('education').value;
    var exp = document.getElementById('experience').value;
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    // Generate resume 
    var RESUMEHTML = "\n        <h2><b> EDITABLE RESUME</b></h2>\n        <h3>PERSONAL INFO</h3>\n        <p><b>NAME:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><b>FATHER NAME:</b><span contenteditable=\"true\"> ").concat(fathername, "</span></p>\n        <p><b>D.O.B:</b><span contenteditable=\"true\"> ").concat(date, "</span></p>\n        <p><b>ABOUT ME :</b> <span contenteditable=\"true\">").concat(aboutme, "</span></p>\n        <h3>CONTACT INFO</h3>\n        <p><b>CONTACT NO.:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        <p><b>EMAIL:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>LOCATION:</b> <span contenteditable=\"true\">").concat(location, "</span></p>\n        <h3>EDUCATION :</h3>\n        <p contenteditable=\"true\">").concat(edu, "</p>\n        <h3>EXPERIENCE :</h3>\n        <p contenteditable=\"true\">").concat(exp, "</p>\n        <h3>PROFESSIONAL SKILLS :</h3>\n        <ul>\n            <li contenteditable=\"true\">").concat(skill1, "</li>\n            <li contenteditable=\"true\">").concat(skill2, "</li>\n            <li contenteditable=\"true\">").concat(skill3, "</li>\n        </ul>\n    ");
    // Display resume HTML
    if (resumeOutput) {
        resumeOutput.innerHTML = RESUMEHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
