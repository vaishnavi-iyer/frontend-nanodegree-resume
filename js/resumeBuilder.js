/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Define Bio
var bio = {
  "name": "Vaishnavi Iyer",
  "role" : "Web Developer",
  "contacts" : {
    "mobileNum" : "0220644925",
    "email" :"iyervaishnavi26@gmail.com",
    "github":"vaishnavi-iyer"
  },
  "picUrl" : "../images/me.jpg",
  "welcomeMessage": "Hi! I am Vaishnavi",
  "skills":["HTML","CSS","JavaScript","Software Design"]
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
var education = {
  "school":[
    {
      "name":"Bhavans",
      "location":"Vadodara",
      "degree":"Secondary School",
      "majors": ["Science","bio","math"],
      "dates":"2007",
      "url":"bhavans.com"
    },
    {
      "name":"Babaria",
      "location":"Vadodara",
      "degree":"Engineering",
      "majors": ["E&C","OS"],
      "dates":"2011",
      "url":"bitseducamp.com"
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
var projects = {
  "projects":[
    {
      "title":"inverter",
      "dates":"2009",
      "description":"inverter",
      "images":["bhavans.com" , "2"]
    },
    {
      "title":"impedance matcher",
      "dates":"2011",
      "description":"impedance matcher",
      "images":["bitseducamp.com" , "2"]
    }
  ]
}
if(bio.skills.length>0)
{
  $("#header").append(HTMLskillsStart);
  for (var i in bio.skills)
  {
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  }
}
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

$(document).click(function(loc) {
  // your code goes here
  var x =loc.pageX;
  var y = loc.pageY;
  logClicks(x,y); 
});

function inName (name)  {
  var editName = name.trim().split(" ");
  editName[1] = editName[1].toUpperCase();
  editName[0] = editName[0].slice(0,1).toUpperCase() + editName[0].slice(1).toLowerCase();
  editName = editName.join(" ");
  return editName;
}
var x ="vaisHNAvi iYEr";
console.log(inName(x));

$("#main").append(internationalizeButton);

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

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
displayWork();
projects.display();

//addming map where i have worked.
$("#mapDiv").append(googleMap);
