// Changes the color of the target.
function chooseColor(color, targetId="target")
{
	// Retrieve the target element.
	// Default ID = "target" others are possible!
	target = document.getElementById(targetId);
	// Decide on the color...
	switch (color)
	{
		case 1: {
			// Apply the correct color.
			target.style.backgroundColor = "red";
			target.style.color = "white";
			break;
		}
		case 2: {
			target.style.backgroundColor = "orange";
			target.style.color = "black";
		}
		case 3: {
			target.style.backgroundColor = "blue";
			target.style.color = "white";
		}
		case 4: {
			target.style.backgroundColor = "yellow";
			target.style.color = "black";
		}
		case 5: {
			target.style.backgroundColor = "black";
			target.style.color = "white";
		}
		case 6: {
			target.style.backgroundColor = "gray";
			target.style.color = "white";
		}
		case 7: {
			target.style.backgroundColor = "pink";
			target.style.color = "white";
		}
		case 8: {
			target.style.backgroundColor = "green";
			target.style.color = "white";
		}
		default: {
			target.style.backgroundColor = "lightgray";
			target.style.color = "darkgray";
		}

	}
}
