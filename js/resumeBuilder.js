var name = "Julien Feuvrier", role = "C++ developper";

var bio = {	"name" : name, 
			"role" : role, 
			"contactInfo" : {	"mobile" : "0619164348",
								"email" : "feuvrier-julien@orange.fr",
								"location" : "Nancy (France)",
								"github" : "Julien-Feuvrier",
								"bitbucket" : "Julien-Feuvrier"
							}, 
			"pictureUrl" : "", 
			"welcomeMassage" : "welcome!", 
			"skills" : ["C", "C++", "Java", "C#", "HTML", "PL/SQL"]
		};

var work = {	
				"jobs" : 
				[
					{
						"employer" : "No one",
						"title" : "Student",
						"location" : "Nancy",
						"description" : "Study computer science in an engineering school.",
						"dates" : "September 2014 - Today",
						"years" : 2
					},
					{
						"employer" : "Mondelez",
						"title" : "Machine worker",
						"location" : "Besançon",
						"description" : "Maintain and assuring the well functionning of some machines on one production line",
						"dates" : "June 2015 - July 2015",
						"years" : 0.1
					}
				]
			};

var education = 
	{
		"schools" : 
			[
				{
					"name" : "TELECOM Nancy",
					"years" : 2,
					"graduation" : 2017,
					"city" : "Nancy"
				},
				{
					"name" : "Lycée Victor Hugo",
					"years" : 2,
					"graduation" : 2014,
					"city" : "Besançon"
				}
			]
	};

var projects = {};
projects.projects = [
						{
							"title" : "TyrantAssault",
							"description" : "A tactical RPG made in C language",
							"dates" : "january-june 2015"
						}
					];
projects.display = function()
{
	for (project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
	}
};

// main
$("#main").append(internationalizeButton);

// header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedTel = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedBitbucket = HTMLbitbucket.replace("%data%", bio.contactInfo.bitbucket);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedTel);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedBitbucket);

// skills
var skills = bio.skills;

if (skills)
{
	$("#header").append(HTMLskillsStart);
	var i;

	for (i = 0 ; i < skills.length ; i++)
	{
		$("#header").append(HTMLskills.replace("%data%", skills[i]));
	}
}

function displayWork()
{
	// work experience
	for (w in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[w].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[w].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[w].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[w].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedDescription);
	}
}

displayWork();

$(document).click(function (loc) { var x = loc.pageX; var y = loc.pageY; logClicks(x, y);})

function inName(name)
{
	var s = name.split(" ");

	return s[0][0].toUpperCase() + s[0].slice(1).toLowerCase() + " " + s[1].toUpperCase();
}	

projects.display();

$("#mapDiv").append(googleMap);