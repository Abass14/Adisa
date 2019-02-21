function changeColor(){
	var square = document.getElementById("square");
	square.style.backgroundColor = "blue";
}
 changeColor();

 function reverseColor(){
 	var square = document.getElementById("square");
 	square.style.backgroundColor = "yellow";
 }
  reverseColor();

  function popbutton(){
  	var square = document.getElementById("square");
  	square.style.backgroundColor = "red";
  }

  var inputTag = document.getElementsByTagName("input");

  alert(inputTag[0].value);

  function validatePassword(){
  	if (inputTag[0].value == ""){
  		alert("Please eneter a Name");
  	}

  	else if (inputTag[1].value == ""){
  		alert("Please eneter a Name");
  	}

  	else if (inputTag[1].value != "123456"){
  		alert("wrong password");
  	}

  	else{
  		alert("Logged in");
  	}
  }

// var timer = 0;

// function countDown(){
// 	document.write(timer + "<br>");
// 	if (timer === 5){
// 		clearInterval((timer));
// 	}
// 	timer++;
// }

// setInterval(countDown, 1000);

	// var currentTime = document.getElementById("displayTime");

	// function showDate(){
	// 	var date = new Date();
	// 	currentTime.innerHTML = date;
	// }

	// setInterval(showDate, 1000);

// clearInterval(countDown());

//   function showName(){
//   	document.write("Adisa" + "<br>")
//   }

//   function showName1(){
//   	document.write("Abass" + "<br>")
//   }

// setTimeout(showName, 5000);
// setTimeout(showName1, 10000);
  	
// function reverseColor(){
// 	var square
// }

// function changeColor()

// var enter_Name = document.getElementById("enterName",).innerHTML;
// var enter_Mail = document.getElementById("story").style.backgroundColor = "red";
// var enter_Password = document.getElementById("story").style.color = "white";

// var enter_Name = document.getElementById("enterName").value = "ola";
// var enter_Mail = document.getElementById("enterEmail").value = "abass@gmail.com";
// var enter_Password = document.getElementById("enterPassword").value = "abassagggggggggggg";

// if (enter_Password != "abassagggggggggggg"){
// 	alert("Wrong password");
// }

// else{
// 	alert("Valid password");
// }

// var inputTag = document.getElementsByTagName("input");

// inputTag[0].value = "Shearer";
// inputTag[1].value = "Born";

// alert(text);
// alert(story);


// var student = [
// 	{'name': 'Abass', 'level': 100, 'course': 'IT', 'firstSemester': 50, 'secondSemester': 60},
// 	{'name': 'Adisa', 'level': 200, 'course': 'Tech', 'firstSemester': 30, 'secondSemester': 70},
// 	{'name': 'Richard', 'level': 300, 'course': 'Computer', 'firstSemester': 70, 'secondSemester': 60}
// ];

// student[3] = {'name': 'Toyin', 'level': 400, 'course': 'PE', 'firstSemester': 50, 'secondSemester': 90};

// console.log(student);


// function average(firstSemester, secondSemester){
// 	document.write((firstSemester+secondSemester)/2);
// }

// average(student[3].firstSemester, student[3].secondSemester);