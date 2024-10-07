var generateButton = document.getElementById('button');
var resumeOutput = document.getElementById('resume_output');
var shareableLinkContainer = document.getElementById('shareable_link');
var shareableLinkElement = document.getElementById('shareable');
var downloadPdfButton = document.getElementById('download_pdf');
generateButton.addEventListener('click', function (event) {
    event.preventDefault();
    // Get values 
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var date = document.getElementById('date').value;
    var aboutme = document.getElementById('aboutme').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    var edu = document.getElementById('edu').value;
    var exp = document.getElementById('exp').value;
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        fathername: fathername,
        date: date,
        aboutme: aboutme,
        email: email,
        phone: phone,
        location: location,
        edu: edu,
        exp: exp,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the
    // data locally
    // Generate resume 
    var RESUMEHTML = "\n        <h2><b> EDITABLE RESUME</b></h2>\n        <h3>PERSONAL INFO</h3>\n        <p><b>NAME:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><b>FATHER NAME:</b><span contenteditable=\"true\"> ").concat(fathername, "</span></p>\n        <p><b>D.O.B:</b><span contenteditable=\"true\"> ").concat(date, "</span></p>\n        <p><b>ABOUT ME :</b> <span contenteditable=\"true\">").concat(aboutme, "</span></p>\n        <h3>CONTACT INFO</h3>\n        <p><b>CONTACT NO.:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        <p><b>EMAIL:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>LOCATION:</b> <span contenteditable=\"true\">").concat(location, "</span></p>\n        <h3>EDUCATION :</h3>\n        <p contenteditable=\"true\">").concat(edu, "</p>\n        <h3>EXPERIENCE :</h3>\n        <p contenteditable=\"true\">").concat(exp, "</p>\n        <h3>PROFESSIONAL SKILLS :</h3>\n        <ul>\n            <li contenteditable=\"true\">").concat(skill1, "</li>\n            <li contenteditable=\"true\">").concat(skill2, "</li>\n            <li contenteditable=\"true\">").concat(skill3, "</li>\n        </ul>\n    ");
    // Display resume HTML
    if (resumeOutput) {
        resumeOutput.innerHTML = RESUMEHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
    // Show the shareable section
    if (shareableLinkContainer) {
        shareableLinkContainer.style.display = 'block'; // Make it visible
    }
    // Optionally, set the href of the shareable link (replace '#' with the actual shareable URL if needed)
    if (shareableLinkElement) {
        shareableLinkElement.href = "#"; // Placeholder URL, can be replaced with a dynamically generated link
        shareableLinkElement.textContent = "Share your resume: ".concat(username, "'s Resume");
    }
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the
    // data locally
    // Handle PDF download
    downloadPdfButton.addEventListener('click', function () {
        window.print(); // This will open the print dialog and allow the user to save
        // as PDF
    });
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('fathername').value =
                resumeData.fathername;
            document.getElementById('date').value =
                resumeData.date;
            document.getElementById('aboutme').value =
                resumeData.aboutme;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('location').value =
                resumeData.location;
            document.getElementById('edu').value =
                resumeData.edu;
            document.getElementById('exp').value
                = resumeData.exp;
            document.getElementById('skill1').value =
                resumeData.skill1;
            document.getElementById('skill2').value =
                resumeData.skill2;
            document.getElementById('skill3').value =
                resumeData.skill3;
        }
    }
});
