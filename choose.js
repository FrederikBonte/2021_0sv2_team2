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
			// Continue for all other colors...
			// At least: yellow, green, blue, purple, black and white
			// Let the other team know which color goes with each number!!!
		}
		default: {
			target.style.backgroundColor = "lightgray";
			target.style.color = "darkgray";
		}
		
	}
}
