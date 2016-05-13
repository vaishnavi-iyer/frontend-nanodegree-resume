/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var name = "Vaishnavi Iyer";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%" , name);
var formattedRole = HTMLheaderRole.replace("%data%" , role);
$("#header").append(formattedName);
$("#header").append(formattedRole);*/

var bio = {
  "name": "Vaishnavi Iyer",
  "role" : "Web Developer",
  "contactInfo" : {
    "mobileNum" : "0220644925",
    "email" :"iyervaishnavi26@gmail.com",
    "github":"vaishnavi-iyer"
  },
  "picUrl" : "https://en-gravatar.com/iyervaishnavi26",
  "welcomeMessage": "Hi! I am Vaishnavi",
  "skills":["0","1","2","3"]
}
var work = {
  "jobs":[
    {
      "title" : "Technical Analyst",
      "employer" : "Spark",
      "years": "6 months",
      "city": "Wellington",
      "descrption":"xxxxx"
    },
    {
      "title" : "Teaam Lead, Software Design",
      "employer" : "Matric",
      "years": "3.2 years",
      "city": "Vadodara",
      "descrption":"xxxxx"
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
;
if(bio.skills!=="")
{
  $("#header").append(HTMLskillsStart);
  for(var i=0;i<(bio["skills"]).length; i++)
    {
     $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    } 
}
