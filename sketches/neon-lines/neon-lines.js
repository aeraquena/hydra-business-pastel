
osc(() => cc[getKnob(1, 1)] * 1000, -xZ.1, () => cc[getKnob(1, 2)] * 1)
	.kaleid(99)
	.repeat(2,2)
	.saturate(() => cc[getKnob(1, 5)] * 10)
	.luma(() => cc[getKnob(1, 3)], () => cc[getKnob(1, 4)]  * .1)
	.scale(5)
	.out(o0);

speed = 1.2