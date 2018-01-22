//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)
//credit also goes to Lauren Norsini, who wrote the tutorial that I read before customizing her example of Steven’s code (https://github.com/laurenorsini/caaaaarbs)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;


	v = v.replace(/(The )?(Cooper) (?:Union)(for the Advancement of Science and Art)?/gi, 'New York University')

	textNode.nodeValue = v;
}

