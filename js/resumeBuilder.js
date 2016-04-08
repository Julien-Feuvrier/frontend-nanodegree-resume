var formattedName = HTMLheaderName.replace("%data%", "Julien Feuvrier");
var formattedRole = HTMLheaderRole.replace("%data%", "C++ developper");

// add data in the begin of the resume
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
