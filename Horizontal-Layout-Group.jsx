if (Math.abs(thisLayer.position[1] - thisComp.height / 2) < (thisLayer.height / 2 + thisComp.height / 2)) {
	stack = 0;
	floatingCount = 0;
	count = 0;
	previousHeight = 0;
	cardDistance = 0;
	verticalNormal = 0;
	for (var i = 1; i < thisComp.numLayers + 1; i++) {
		if (Math.abs(thisComp.layer(i).position[1] - thisComp.height / 2) <= (thisLayer.height / 2 + thisComp.height / 2)) {
			floatingCount += 1 - Math.abs(thisComp.layer(i).position[1] - thisComp.height / 2) / (thisLayer.height / 2 + thisComp.height / 2);
			count++;
		}
	}
	for (var i = 1; i < thisComp.numLayers + 1 + 1; i++) {
		if (Math.abs(thisComp.layer(i).position[1] - thisComp.height / 2) <= (thisLayer.height / 2 + thisComp.height / 2)) {
			if (i == 1) {
				stack += thisComp.layer(i).width / 2;
			} else {
				if (((thisComp.width - thisLayer.width) / (floatingCount - 1)) >= thisLayer.width) {
					cardDistance = thisLayer.width;
				} else {
					cardDistance = ((thisComp.width - thisLayer.width) / (floatingCount - 1));
				}
				verticalNormal = Math.abs(previousHeight - thisComp.height / 2) / (thisLayer.height / 2 + thisComp.height / 2);
				stack += cardDistance - (verticalNormal * cardDistance);
			}
			if (thisComp.layer(i).transform == thisLayer.transform) {
				break;
			}
			previousHeight = thisComp.layer(i).position[1];
		}
	}
	[stack, value[1]]
}
else value
