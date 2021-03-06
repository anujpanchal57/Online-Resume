var bio = {
    "name": "Anuj Panchal",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91 9920773997",
        "email": "anujpanchal57@gmail.com",
        "twitter": "@anujpanchal051295",
        "github": "anujpanchal57",
        "location": "Mumbai"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Hello and Welcome to my world of web!",
    "skills": ["Focussed", "HTML", "CSS", "JavaScript", "jQuery"],
};
var education = {
    "schools": [{
        "name": "KJSIEIT",
        "degree": "BE",
        "dates": "2013 - 2017",
        "location": "Mumbai",
        "majors": ["Computer Engineering"]
    }, {
        "name": "B.N. Bandodkar College",
        "degree": "HSC",
        "dates": "2011 - 2013",
        "location": "Thane",
        "majors": ["Science"]
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Development",
        "dates": "2017 (Still in progress)",
        "url": "https://udacity.com"
    }, ]
};
var work = {
    "jobs": [{
        "title": "System Engineer",
        "employer": "Infosys",
        "dates": "2017",
        "location": "Mysore",
        "description": "Infosys hardware expertise delivers continuous productivity improvement from system design services – including training and knowledge management – to verification-task-level enhancement, simulation-time improvement, guidelines / documentation and port test cases, to other designs, cross-training, and utilization."
    }, {
        "title": "Intern - JAVA",
        "employer": "iText",
        "dates": "2016 - 2017",
        "location": "Mumbai",
        "description": "Building an interactive API for the firm to make the iText PDF Library more universal."
    }]
};
var projects = {
    "projects": [{
        "title": "Attendance Monitoring System for Educational Institutes using Face Recognition Technique",
        "dates": "2016 - 2017",
        "description": "It will be a two step mechanism. First, prior to face recognition we have to do face detection. Once, face detection has been performed successfully then only face recognition will be performed by using Principal Component Analysis.",
        "images": ["images/SS1.png","images/SS2.png"]
    }, {
        "title": "Deploying a WebApp on Kubernetes",
        "dates": "2017",
        "description": "Our aim was to deploy a static webapp on the Google Cloud Platform Kubernetes and we did it succesffully.",
        "images": ["images/kubernetes.png", "images/docker.png"]
    }]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};
education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
            var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedschoolNameDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor);
        });
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(online) {
            $("#education").append(HTMLschoolStart);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;
            var formattedonlineDates = HTMLonlineDates.replace("%data%", online.dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", online.url);
            $(".education-entry:last").append(formattedTitleSchool, formattedonlineDates, formattedonlineURL);
        });
    }
};
work.display = function() {
    if (work.jobs.length > 0) {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("#", job.url).replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
        });
    }
};
projects.display = function() {
    if (projects.projects.length > 0) {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("#", project.url).replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};
bio.display();
education.display();
work.display();
projects.display();
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
