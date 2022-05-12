if(thisLayer.position[1]==( thisComp.height/2) ){
	x=0;
	g=0;
	c=0;
	for(var i=1;i<thisComp.numLayers+1;i++){
		if(thisComp.layer(i).position[1] == thisComp.height/2)
		{
			g++;
			if(thisComp.layer(i).transform == thisLayer.transform){
				c=g;
			}
		}
	}

	if((thisComp.width/thisLayer.width) >g )
	{
		x=c* thisLayer.width- thisLayer.width/2;
	}else{
		a = ((thisComp.width-thisLayer.width)/(g-1));
		x=a*(c-1)+ thisLayer.width/2;
	}
	[x,value[1]]
}
else value