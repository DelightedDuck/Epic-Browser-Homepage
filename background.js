function changeImage()
{
	var fileList = ['1.png', '2.jpg', '3.jpg',];

	var len = fileList.length;
	var index = Math.floor(Math.random() * len);
	var filePath = 'Background/' + fileList[index];

	document.body.style.backgroundImage = 'url("'+filePath+'")';
}

$(document).ready(changeImage);
