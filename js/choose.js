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
			target.style.color = "white";
		}
		case 3: {
			target.style.backgroundColor = "blue";
			target.style.color = "white";
		}
		case 2: {
			target.style.backgroundColor = "red";
			target.style.color = "white";
		}
		case 2: {
			target.style.backgroundColor = "red";
			target.style.color = "white";
		}
		case 2: {
			target.style.backgroundColor = "red";
			target.style.color = "white";
		}
		case 2: {
			target.style.backgroundColor = "red";
			target.style.color = "white";
		}
		case 2: {
			target.style.backgroundColor = "red";
			target.style.color = "white";
		}
		default: {
			target.style.backgroundColor = "lightgray";
			target.style.color = "darkgray";
		}

	}
}
