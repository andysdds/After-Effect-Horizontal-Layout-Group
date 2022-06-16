if(Math.abs(thisLayer.position[1]-thisComp.height/2) < (thisLayer.height/2+thisComp.height/2)){
	stack=0;
	//may be we can use array to store which index going down
	for(var i=1;i<thisComp.numLayers+1;i++){
		if(thisComp.width/thisComp.numLayers > thisComp.layer(i).width)
		{
			if(i==1)
			{
				stack+=thisComp.layer(i).width/2;
			}
			else
			{
				stack+=thisComp.layer(i).width;
			}
		}
		else{
			if(i==1)
			{
				stack+=thisComp.layer(i).width/2;
			}else{
				//TODO 1 should be change
				cardDistance = ((thisComp.width-thisLayer.width)/(thisComp.numLayers-1));
				verticalNormal =Math.abs(thisComp.layer(i-1).position[1]-thisComp.height/2) /(thisLayer.height/2+thisComp.height/2);
				stack+=cardDistance - (verticalNormal *cardDistance);
			}
		}
		if(thisComp.layer(i).transform == thisLayer.transform){
			break;
		}
	}
	
	[stack,value[1]]
}
else value
