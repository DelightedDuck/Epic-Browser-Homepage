function changeImage()
{
	var fileList = ['BG.png', 'BG2.jpg', 'BG3.jpg',];

	var len = fileList.length;
	var index = Math.floor(Math.random() * len);
	var filePath = 'Background/' + fileList[index];

	document.body.style.backgroundImage = 'url("'+filePath+'")';
}

$(document).ready(changeImage);
