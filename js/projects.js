const projects = [ 
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built with HTML, CSS, and JavaScript.",
        category: "Web Development",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "../images/project1.png",
        link: "https://example.com"
    },
    {
        id: 2,
        title: "Dog Ready App",
        description: "Built a mobile application for new dog owners using Flutter framework",
        category: "Web Development",
        technologies: ["Flutter", "Dart"],
        image: "../images/project2.png",
        link: "https://example.com"
    },
    {
        id: 3,
        title: "Python Project Lunas Ball",
        description: "Built a simple round-robin dance pairing program using Python.",
        category: "Web Development",
        technologies: ["Python", "PyCharm"],
        image: "../images/project3.png",
        link: "https://example.com"
    },
     {
        id: 4,
        title: "Project dog Milla",
        description: "Created a training program for Milla the scared dog",
        category: "Dog Training",
        technologies: ["Google Docs", "Email"],
        image: "../images/project4.png",
        link: "https://example.com"
    },
     {
        id: 5,
        title: "Coffee Shop App prototype",
        description: "Created as part of a team a interactive prototype for a coffee shop app using Figma.",
        category: "Web Design",
        technologies: ["Figma"],
        image: "../images/project5.png",
        link: "https://example.com"
    },
     {
        id: 6,
        title: "Common Ground Game",
        description: "Created as part of a team wireframes for a game called Common Ground for a dating app.",
        category: "Web Design",
        technologies: ["Figma"],
        image: "../images/project6.png",
        link: "https://example.com"
    }
];

// DOM Elements
const projectContainer = document.getElementById('project-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCounter = document.getElementById('project-count');

// Function to display projects
function displayProjects(projectsList ) {
    projectContainer.innerHTML = ''; // Clear existing projects

    projectsList.forEach(project => { // Loop through each project
        const projectCard = document.createElement('div'); // Create project card element
        projectCard.classList.add('project-card'); 

        // Set project card content
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <span class="project-category">${project.category}</span>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectCard); // Add project card to container

        setTimeout(() => {
            projectCard.classList.add('visible'); // Trigger fade-in effect
        }, 100);
    });
    projectCounter.textContent = `Projects Found: ${projectsList.length}`; // Update project count
}
// Initial display of all projects
displayProjects(projects);

// Filter projects based on category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        //Active button styling
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category'); // Get selected category

        if (category === 'all') {
            displayProjects(projects); // Display all projects
        } else {
            const filteredProjects = projects.filter(project => project.category === category); // Filter projects by category
            displayProjects(filteredProjects); // Display filtered projects
        }
    });
});