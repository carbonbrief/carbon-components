<script>
	import { Tween } from 'svelte/motion';
	let {
		duration = 500,
		x = 0,
		y = 0,
		width = 100,
		height = 100,
		fill = 'rgba(0,0,0,0.5)',
		strokeWidth = 2,
		stroke = 'rgb(0,0,0)'
	} = $props();

	const xTween = Tween.of(() => x, { duration: duration });
	const yTween = Tween.of(() => y, { duration: duration });
	const widthTween = Tween.of(() => width, { duration: duration });
	const heightTween = Tween.of(() => height, { duration: duration });
	const strokeWidthTween = Tween.of(() => strokeWidth, { duration: duration });
</script>

<rect
	{fill}
	{stroke}
	stroke-width={strokeWidthTween.current}
	x={xTween.current}
	y={yTween.current}
	width={widthTween.current}
	height={heightTween.current}
>
</rect>
