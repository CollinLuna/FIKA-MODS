# Cargo Pants for Single Player Tarkov.

This mod simply allows the user to set the vertical sizes of the pocket slots. Allowing you to, for example, put my Ammo Pouch - a 2x1 slot item - in your pocket.
I've set the default sizes to 2, 1, 1, 2 to essentially simulate wearing trousers with cargo pockets - hence the name.

## :warning: Warnings
* It only allows vertical scaling of pockets, not horizontal, as the in-game GUI can't cope with wider pockets - it starts pushing the Special slots off the right side of the screen.
* Be careful with how long you make them, I've no idea what will happen if you go mad with it. 



## :memo: Config
Config is nice and simple, described in the code block below:

```
{
	"Logging": false,       - Turns some debug logging to the console on and off.
	"PocketSizes": {
		"Pocket1": 2,         - Set the vertical size of the leftmost pocket to this number of cells.
		"Pocket2": 1,         - I believe in you.
		"Pocket3": 1,         - You've got this.
		"Pocket4": 2          - Told you!
	}
}
```
