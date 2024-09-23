const generateButton = document.getElementById('button') as HTMLButtonElement;
const resumeOutput = document.getElementById('resume_output') as HTMLDivElement;

generateButton.addEventListener('click', (event: Event) => {
    event.preventDefault();

    // Get values 
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const aboutme = (document.getElementById('aboutme') as HTMLTextAreaElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    
    const edu = (document.getElementById('education') as HTMLTextAreaElement).value;
    const exp = (document.getElementById('experience') as HTMLTextAreaElement).value;

    const skill1 = (document.getElementById('skill1') as HTMLTextAreaElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLTextAreaElement).value;
    const skill3 = (document.getElementById('skill3') as HTMLTextAreaElement).value;

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
});
