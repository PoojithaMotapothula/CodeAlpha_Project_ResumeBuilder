function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const objective = document.getElementById('objective').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
    const resumeContainer = document.getElementById('resume');
    const rName = document.getElementById('rName');
    const rContact = document.getElementById('rContact');
    const rObjective = document.getElementById('rObjective');
    const rExperience = document.getElementById('rExperience');
    const rEducation = document.getElementById('rEducation');
  
    rName.innerText = name;
    rContact.innerText = `${email} | ${phone} | ${address}`;
    rObjective.innerText = objective;
    rExperience.innerText = experience;
    rEducation.innerText = education;
  
    resumeContainer.style.display = 'block';
  }
  