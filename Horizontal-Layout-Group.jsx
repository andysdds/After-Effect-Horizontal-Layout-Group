if(Math.abs(thisLayer.position[1]-thisComp.height/2) < (thisLayer.height/2+thisComp.height/2)){
	x=0;//init for x position
	g=0;//layer count
	c=0;//index inside layer
	f=0;//moveable layer count
	//may be we can use array to store which index going down
	for(var i=1;i<thisComp.numLayers+1;i++){
		if(Math.abs(thisComp.layer(i).position[1]-thisComp.height/2) < (thisLayer.height/2+thisComp.height/2))
		{
			g++;
			if(thisComp.layer(i).transform == thisLayer.transform){
				c=g;
			}
			f += 1-(Math.abs(thisComp.layer(i).position[1]-thisComp.height/2) /(thisLayer.height/2+thisComp.height/2));
		}
	}
	if((thisComp.width/thisLayer.width) > g)
	{
		x=c* thisLayer.width- thisLayer.width/2;
	}else{
		a = ((thisComp.width-thisLayer.width ))/(f-1);
		// change 1 to f but change it after the card move
		x = a*(c-1)+ thisLayer.width/2;
	}
	[x,value[1]]
}
else value
