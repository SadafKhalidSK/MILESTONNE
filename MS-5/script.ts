const generateButton = document.getElementById('button') as HTMLButtonElement;
const resumeOutput = document.getElementById('resume_output') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable_link') as HTMLDivElement;
    
    const shareableLinkElement = document.getElementById('shareable') as
    HTMLAnchorElement;
    const downloadPdfButton = document.getElementById('download_pdf') as
    HTMLButtonElement;
generateButton.addEventListener('click', (event: Event) => {
    event.preventDefault();

    // Get values 
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const aboutme = (document.getElementById('aboutme') as HTMLTextAreaElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    
    const edu = (document.getElementById('edu') as HTMLTextAreaElement).value;
    const exp = (document.getElementById('exp') as HTMLTextAreaElement).value;

    const skill1 = (document.getElementById('skill1') as HTMLTextAreaElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLTextAreaElement).value;
    const skill3 = (document.getElementById('skill3') as HTMLTextAreaElement).value;

    // Save form data in localStorage with the username as the key
const resumeData = {
    name,
    fathername,
    date,
    aboutme,
    email,
    phone,
    location,
    edu,
    exp,
    skill1,
    skill2,
    skill3,

    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the
    // data locally
    // Generate resume 
    const RESUMEHTML = `
        <h2><b> EDITABLE RESUME</b></h2>
        <h3>PERSONAL INFO</h3>
        <p><b>NAME:</b><span contenteditable="true"> ${name}</span></p>
        <p><b>FATHER NAME:</b><span contenteditable="true"> ${fathername}</span></p>
        <p><b>D.O.B:</b><span contenteditable="true"> ${date}</span></p>
        <p><b>ABOUT ME :</b> <span contenteditable="true">${aboutme}</span></p>
        <h3>CONTACT INFO</h3>
        <p><b>CONTACT NO.:</b><span contenteditable="true"> ${phone}</span></p>
        <p><b>EMAIL:</b> <span contenteditable="true">${email}</span></p>
        <p><b>LOCATION:</b> <span contenteditable="true">${location}</span></p>
        <h3>EDUCATION :</h3>
        <p contenteditable="true">${edu}</p>
        <h3>EXPERIENCE :</h3>
        <p contenteditable="true">${exp}</p>
        <h3>PROFESSIONAL SKILLS :</h3>
        <ul>
            <li contenteditable="true">${skill1}</li>
            <li contenteditable="true">${skill2}</li>
            <li contenteditable="true">${skill3}</li>
        </ul>
    `;

    // Display resume HTML
    if (resumeOutput) {
        resumeOutput.innerHTML = RESUMEHTML;
    } else {
        console.error("The resume display element is missing");
    }
        // Show the shareable section
        if (shareableLinkContainer) {
            shareableLinkContainer.style.display = 'block'; // Make it visible
        }
    
        // Optionally, set the href of the shareable link (replace '#' with the actual shareable URL if needed)
        if (shareableLinkElement) {
            shareableLinkElement.href = `#`; // Placeholder URL, can be replaced with a dynamically generated link
            shareableLinkElement.textContent = `Share your resume: ${username}'s Resume`;
        }
        localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the
// data locally

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save
// as PDF
});
})
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('fathername') as HTMLInputElement).value =
resumeData.fathername;
(document.getElementById('date') as HTMLInputElement).value =
resumeData.date;
(document.getElementById('aboutme') as HTMLInputElement).value =
resumeData.aboutme;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('location') as HTMLInputElement).value =
resumeData.location;
(document.getElementById('edu') as HTMLTextAreaElement).value =
resumeData.edu;
(document.getElementById('exp') as HTMLTextAreaElement).value
= resumeData.exp;
(document.getElementById('skill1') as HTMLTextAreaElement).value =
resumeData.skill1;
(document.getElementById('skill2') as HTMLTextAreaElement).value =
resumeData.skill2;
(document.getElementById('skill3') as HTMLTextAreaElement).value =
resumeData.skill3;
}
}
});

