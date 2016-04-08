// draft of the JS code of the Unit 0 and 1
var education1 = {};
education1["name"] = "TELECOM Nancy";
education1["years"] = 2;

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

var work = 	{};
work.position = "student";
work.years = 0;

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

var project = 	{
					"title" : "TyrantAssault",
					"description" : "A tactical RPG made in C language",
					"dates" : "january-june 2015"
				};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedTel = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedBitbucket = HTMLbitbucket.replace("%data%", bio.contactInfo.bitbucket);

// add data in the begin of the resume
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedTel);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedBitbucket);

$("#header").append(work["position"]);
$("#header").append(education1.name);