const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Elena Gornovoy &#169 ${thisYear}`;
footer.appendChild(copyright);

//Adding Skills
const skills = ['Digital Marketing', 'Account Management', 'Web Analytics','Javascript', 'HTML', 'CSS'];
const skillsSection = document.querySelector('#Skills');
const skillsList = document.querySelector('#skills_list');
    for (let i = 0; i < skills.length; i++) {
      const skill = document.createElement('li');
      skill.classList.add('skill_name')
      skill.innerText = skills[i];
      skillsList.appendChild(skill);
}

//Projects section. Adding my Github repos list using AJAX//
/*let githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/ElenaGor8/repos');
githubRequest.send();

githubRequest.addEventListener('load', function() {
  let repositories = [];
  repositories = JSON.parse(this.response);
  console.log(repositories);

  const projectSection = document.querySelector('#projects')
  const projectList = projectSection.querySelector('ul')
      for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement('li')
        project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
        projectList.appendChild(project);
}    
})*/

// Projects section. Adding my Github repos list with Fetch API
fetch('https://api.github.com/users/ElenaGor8/repos')
.then((repositories) => {
    return repositories.json();
})
.catch(error => console.log ('Looks like there was a problem', error))
.then((repositories) => {
const projectSection = document.querySelector('#projects')
const projectList = document.querySelector('#projects ul')

  for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement('li')
    project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
    projectList.appendChild(project);
} 
  return projectList;
})

//Create "Leave a message" form
const messageForm = document.querySelector('[name = "leave_message"]');
messageForm.addEventListener("submit", (event)=> {
    event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;
        let message = event.target.message.value;
    
//Display list of messages with hyperlinked names         
const messageSection = document.querySelector('#messages');
const messageList = document.querySelector('#message_list');

//Show the "messages" section
  if (messageSection.style.display === 'none') {
    messageSection.style.display = 'block'
  }

const newMessage = document.createElement('li');
newMessage.innerHTML += `<a href = "mailto:${email}"> ${name} </a> <span> ${message} </span>`;
      
//Create Edit button
const editButton = document.createElement('button');
editButton.innerText = 'edit';
editButton.type = 'button';
editButton.addEventListener('click', function(event) {
newMessage.remove();

//Edit function
    const nameElement = document.querySelector('[name = name]');
    nameElement.value = name;
    const emailElement = document.querySelector('[name = email]');
    emailElement.value = email;
    const messageElement = document.querySelector('[name = message]');
    messageElement.value = message;
});

//Create Remove button
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';
removeButton.addEventListener("click", () => {
    let entry = removeButton.parentNode;
    entry.remove();
    const messageList = messageSection.querySelector('#message_list');
    if (messageList.childElementCount == 0) {
        const messageSection = document.querySelector('#messages');
        messageSection.style.display = "none"    
    } //hide "messages" section if there are no more messages
});

messageList.appendChild(newMessage);
newMessage.appendChild(editButton);
newMessage.appendChild(removeButton);
messageForm.reset();
});
