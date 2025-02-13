console.log('Happy developing ✨');

let jobListing = [
    {
        title: "Senior Frontend Developer",
        employmentType: "Full Time",
        location: "USA Only",
        badges: ["Photosnap", "NEW!", "FEATURED"],
        color: "logo-black",
        requiredSkills: ["Frontend", "HTML", "CSS", "Javascript"],
    },
    {
        title: "Fullstack Developer",
        employmentType: "Part Time",
        location: "Remote",
        badges: ["Manage", "NEW!", "FEATURED"],
        color: "logo-orange",
        requiredSkills: ["Fullstack", "Midweight", "Python", "React"],
    },
    {
        title: "Junior Frontend Developer",
        employmentType: "Part Time",
        location: "USA Only",
        badges: ["Account", "NEW!"],
        color: "logo-purple",
        requiredSkills: ["Frontend", "Junior", "Javascript", "React", "Sass"],
        postDate: "2 days ago",
    },
    {
        title: "Junior Frontend Developer",
        employmentType: "Part Time",
        location: "USA Only",
        badges: ["Myhome"],
        color: "logo-gray",
        requiredSkills: ["Frontend", "Junior", "CSS", "Javascript"],
        postDate: "5 days ago",
    },
    {
        title: "Software Engineer",
        employmentType: "Full Time",
        location: "UK Only",
        badges: ["Loop Studies"],
        color: "logo-blue",
        requiredSkills: ["Frontend", "Midweight", "Javascript", "Ruby", "Sass"],
        postDate: "1 week ago",
    },
    {
        title: "Junior Backend Developer",
        employmentType: "Part Time",
        location: "UK Only",
        badges: ["Facelt"],
        logo: "img.png",
        requiredSkills: ["Backend", "Junior", "Ruby", "RoR"],
        postDate: "2d ago",
    },
    {
        title: "Junior Developer",
        employmentType: "Full Time",
        location: "Worldwide",
        badges: ["Shortly"],
        logo: "img_1.png",
        requiredSkills: ["Frontend", "Junior", "HTML", "Javascript", "SASS"],
        postDate: "2w ago",
    },
    {
        title: "Junior Frontend Developer",
        employmentType: "Full Time",
        location: "USA Only",
        badges: ["Insure"],
        logo: "img_2.png",
        requiredSkills: ["Frontend", "Junior", "HTML", "Javascript", "SASS"],
        postDate: "2w ago",
    },
    {
        title: "Full Stack Engineer",
        employmentType: "Full Time",
        location: "Worldwide",
        badges: ["Eyecam Co."],
        logo: "img_3.png",
        requiredSkills: ["Fullstack", "Midweight", "Javascript", "Python", "Django"],
        postDate: "3w ago",
    }
];

let jobContainer = document.getElementById("job-list");

// Function to render jobs
function renderJobs(jobs) {
    jobContainer.innerHTML = ""; // Clear previous jobs before rendering

    jobs.forEach((job) => {
        let jobRow = document.createElement("div");
        jobRow.classList.add("job-row");

        jobRow.innerHTML = `
            <div class="job-card">
                <div class="logo ${job.color}" style="display: flex; align-items: center; justify-content: center;">
                    ${job.logo ? `<img src="${job.logo}" alt="${job.title} logo" style="width: 50px; height: 50px;">` : ""}
                </div>
                <div class="job-info">
                    <div class="badges">
                        ${job.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                    </div>
                    <h3>${job.title}</h3>
                    <p>${job.employmentType} • ${job.location}</p>
                </div>
                <div class="tags">
                    ${job.requiredSkills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;

        jobContainer.appendChild(jobRow);
    });
}

function filterJobs() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();

    const filteredJobs = jobListing.filter((job) => {
        return (
            job.title.toLowerCase().includes(searchQuery) ||
            job.location.toLowerCase().includes(searchQuery) ||
            job.requiredSkills.some(skill => skill.toLowerCase().includes(searchQuery))
        );
    });

    renderJobs(filteredJobs);
}

renderJobs(jobListing);

document.getElementById("search-bar").addEventListener("input", filterJobs);










