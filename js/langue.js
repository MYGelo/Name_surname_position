
const developer = document.querySelector(".developer");
const contacts = document.querySelector(".contact__title");
const teachSkills = document.querySelector(".skills__title");
const softSkills = document.querySelector(".soft__title");
const softSkillText = document.querySelector(".softSkills__text"); 
const langs = document.querySelector(".lang__container");
const education = document.querySelector(".education_title");
const projects = document.querySelector(".projects__title");

const UA = document.querySelector(".UA").addEventListener("click" , changeUA);
const ENG = document.querySelector(".ENG").addEventListener("click" , changeENG);


let lang = "";



function changeUA () {
    // clear();
    lang = "UA";
    console.log(lang);
   
    developer.innerHTML = uaText;
    contacts.innerHTML = uaTitles;
    teachSkills.innerHTML = uaTeachSkills;
    softSkills.innerHTML = uaSoft;
    softSkillText.innerHTML = uaSoftskillText;
    langs.innerHTML = uaLangs;
    education.innerHTML = uaEducation;
    projects.innerHTML = uaProject;
}


function changeENG () {

    lang = "ENG";
    console.log(lang);

    developer.innerHTML = engText;
    contacts.innerHTML = engTitles;
    teachSkills.innerHTML = engTeachSkills;
    softSkills.innerHTML = engSoft;
    softSkillText.innerHTML = engSoftskillText;
    langs.innerHTML = engLangs;
    education.innerHTML = engEducation;
    projects.innerHTML = engProject;

    
}

const uaProject = "Проекты";
const engProject ="Project Experience";

const uaEducation = "Образование";
const engEducation = "Education";

const uaLangs = `
<h3>ЯЗЫКИ</h3>
<p>Английский — продвинутый </p>
<p>Украинский - родной</p>`;
const engLangs = `
<h3>LANGUAGES</h3>
<p>English - advanced</p>
<p>Ukrainian - native</p>`;

const uaSoftskillText = `
<p>Командная работа</p>
<p>Решение проблем</p>
<p>Хорошие навыки адаптации</p>
<p>Высокие навыки аналитики</p>
<p>Коммуникабельность</p>`;
const engSoftskillText = `
<p>Team Work</p>
<p>Problem Solving</p>
<p>Strong Adaptation Skills</p>
<p>High Analytics Skills</p>
<p>Communicative</p>`;

const uaSoft = "Качества";
const engSoft = "Soft Skills";

const uaTeachSkills = 'Изучал';
const engTeachSkills = 'Teach Skills';

const uaTitles = `Свяжитесь со мной `;
const engTitles = `Contact Me`;


const engText = `<h1>Miholap Oleg</h1>
                <h2>Junior  Developer</h2>
                <p>I am a Junior  developer. I focus on HTML5, CSS3, JS, React, English. Development,practice and work for the result are important for me. I am skillful in analyzing problems and thinking of solutions to accurately troubleshoot and solve technical problems.</p>`;

const uaText = `<h1>Михолап Олег</h1>
                <h2>Младший  Разработчик</h2>
                <p>Я младший  разработчик. я изучал HTML, CSS, JS, React, английский. Разработка, практика и работа на результат важны для меня. Я умею анализировать проблемы и думать о решениях для точного устранения неполадок и решать технические проблемы.</p>
`