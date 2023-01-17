const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Elena Gornovoy &#169 ${thisYear}`;
footer.appendChild(copyright);

//List of skills
const skills = ['Digital Marketing', 'Web Analytics','Javascript', 'HTML', 'CSS'];
const skillsSection = document.querySelector('#Skills');
const skillsList = document.querySelector('#skills_list');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.classList.add('skill_name')
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//create "Leave a message" form
const messageForm = document.querySelector('[name = "leave_message"]');
messageForm.addEventListener("submit", (event)=> {
    event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;
        let message = event.target.message.value;
        console.log(name);
        console.log(email);
        console.log(message);

//display list of messages with hyperlinked names         
const messageSection = document.getElementById('#Messages');
const messageList = document.querySelector('#message_list');
const newMessage = document.createElement('li');
newMessage.innerHTML += `<a href = "mailto:${email}"> ${name} </a> <span> ${message} </span>`;
      
//create edit button
const editButton = document.createElement('button');
editButton.innerText = 'edit';
editButton.type = 'button';
editButton.addEventListener('click', function(event) {
newMessage.remove();
//for edit function
    const nameElement = document.querySelector('[name = name]');
    nameElement.value = name;
    const emailElement = document.querySelector('[name = email]');
    emailElement.value = email;
    const messageElement = document.querySelector('[name = message]');
    messageElement.value = message;
});

//create remove button
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';
removeButton.addEventListener("click", () => {
    let entry = removeButton.parentNode;
    entry.remove();
});

newMessage.appendChild(editButton);
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

messageForm.reset();
});