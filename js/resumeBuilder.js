/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Define Bio

var bio = 
{
    "name": "Vaishnavi Iyer",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "0220644925",
        "email" :"iyervaishnavi26@gmail.com",
        "github":"vaishnavi-iyer",
        "location":"Wellington"
    },
    "picUrl" : "images/me.jpg",
    "welcomeMessage": "Hi! I am Vaishnavi",
    "skills":["HTML","CSS","JavaScript","Software Design"]
  }

// display bio
bio.display = function () {
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

    //$("#topContacts").append(HTMLcontactGeneric.replace("%data%",bio.contacts));
    $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%",bio.picUrl));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

    // display the skills
    if(bio.skills.length>0)
    {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills)
        {
              $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
        }
    }
}

var work = {
  "jobs":[
    {
      "title" : "Technical Analyst",
      "employer" : "Spark",
      "years": "6 months",
      "location": "Wellington",
      "dates":"Nov 2015 - future",
      "description":"xxxxx"
    },
    {
      "title" : "Teaam Lead, Software Design",
      "employer" : "Matrix",
      "years": "3.2 years",
      "location": "Vadodara",
      "dates":"Dec 2011 - Feb 2015",
      "description":"xxxxx"
    }
  ]
}
// display work function
function displayWork(){
    for(job in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);  
        var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates); 
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location); 
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description); 
        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription);
    }
}
var education = {
  "schools":[
    {
      "name":"Bhavans",
      "location":"Vadodara",
      "degree":"Secondary School",
      "major": ["Science","bio","math"],
      "dates":"2007"
      //"url":"google.com"
    },
    {
      "name":"Gujarat University",
      "location":"Vadodara",
      "degree":"Bachelors of Engineering",
      "major": ["E&C","OS"],
      "dates":"2011"
      //"url":"google.com"
    }
  ],
  "onlineCourses":[
    {
      "title":"Introduction to JS",
      "school":"Udacity",
      "dates":"2016",
      "url":"udacity.com"
    },
    {
      "title":"Introduction to HTML",
      "school":"Udacity",
      "dates":"2016",
      "url":"udacity.com"
    }
  ]
}

education.display = function () 
{
    $("#education").append(HTMLschoolStart);

     for(school in education.schools)
     {
        var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);  
        var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].dates); 
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location); 
        var formattedDescription = HTMLschoolMajor.replace("%data%",education.schools[school].major); 
        $(".education-entry:last").append(formattedSchool + formattedDegree + formattedDate + formattedLocation + formattedDescription);
      }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
      for(course in education.onlineCourses)
     {
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[school].title);  
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school); 
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[school].dates); 
        var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[school].url); 
        $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
      }
}

var projects = {
    "projects":[
        {
          "title":"inverter",
          "dates":"2009",
          "description":"inverter",
          "images":["http://placehold.it/100x10", "2"]
        },
        {
          "title":"impedance matcher",
          "dates":"2011",
          "description":"impedance matcher",
          "images":["http://placehold.it/100x10", "2"]
        }
    ]
}
// display project
projects.display = function() {
    for(var project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);   
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
        $(".project-entry:last").append(formattedTitle+formattedDates+formattedDescription+formattedImage)
    }
}

//counting clicks
$(document).click(function(loc) {
    // your code goes here
    var x =loc.pageX;
    var y = loc.pageY;
    logClicks(x,y); 
});

// changing name to International format
function inName (name)  {
    var editName = name.trim().split(" ");
    editName[1] = editName[1].toUpperCase();
    editName[0] = editName[0].slice(0,1).toUpperCase() + editName[0].slice(1).toLowerCase();
    editName = editName.join(" ");
    return editName;
}

//addming map where i have worked.
$("#mapDiv").append(googleMap);

//display page elements
bio.display();
displayWork();
education.display();
projects.display();
//display button to change name format
$("#main").append(internationalizeButton);

