<script>
	import { base } from '$app/paths';
	import { GlobalStyle } from '$lib';
</script>

<svelte:head>
	<!-- <link
		rel="stylesheet"
		href="https://www.carbonbrief.org/wp-content/themes/carbon-brief/assets/main.eb952d330d36958c1b97.css"
	/> -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=PT+Sans+Narrow:wght@400;700&family=PT+Serif:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<GlobalStyle />

<article>
	<nav class="sticky-nav"><a href={base}>Carbon component system</a></nav>
	<section>
		<slot />
	</section>
</article>
<div class="page-footer" />

<style>
	/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
	:global(html) {
		line-height: 1.15; /* 1 */
		-webkit-text-size-adjust: 100%; /* 2 */
	}

	:global(body) {
		margin: 0;
	}

	:global(main) {
		display: block;
	}

	:global(h1) {
		font-size: 2em;
		margin: 0.67em 0;
	}

	:global(hr) {
		box-sizing: content-box; /* 1 */
		height: 0; /* 1 */
		overflow: visible; /* 2 */
	}

	:global(pre) {
		font-family: monospace, monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	:global(a) {
		background-color: transparent;
	}

	:global(abbr[title]) {
		border-bottom: none; /* 1 */
		text-decoration: underline; /* 2 */
		text-decoration: underline dotted; /* 2 */
	}

	:global(b, strong) {
		font-weight: bolder;
	}

	:global(code, kbd, samp) {
		font-family: monospace, monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	:global(small) {
		font-size: 80%;
	}

	:global(sub, sup) {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	:global(sub) {
		bottom: -0.25em;
	}

	:global(sup) {
		top: -0.5em;
	}

	:global(img) {
		border-style: none;
	}

	:global(button, input, optgroup, select, textarea) {
		font-family: inherit; /* 1 */
		font-size: 100%; /* 1 */
		line-height: 1.15; /* 1 */
		margin: 0; /* 2 */
	}

	:global(button, input) {
		/* 1 */
		overflow: visible;
	}

	:global(button, select) {
		/* 1 */
		text-transform: none;
	}

	:global(
		button::-moz-focus-inner,
		[type='button']::-moz-focus-inner,
		[type='reset']::-moz-focus-inner,
		[type='submit']::-moz-focus-inner
	) {
		border-style: none;
		padding: 0;
	}

	:global(
		button:-moz-focusring,
		[type='button']:-moz-focusring,
		[type='reset']:-moz-focusring,
		[type='submit']:-moz-focusring
	) {
		outline: 1px dotted ButtonText;
	}

	:global(fieldset) {
		padding: 0.35em 0.75em 0.625em;
	}

	:global(legend) {
		box-sizing: border-box; /* 1 */
		color: inherit; /* 2 */
		display: table; /* 1 */
		max-width: 100%; /* 1 */
		padding: 0; /* 3 */
		white-space: normal; /* 1 */
	}

	:global(progres) {
		vertical-align: baseline;
	}

	:global(textarea) {
		overflow: auto;
	}

	:global([type='checkbox'], [type='radio']) {
		box-sizing: border-box; /* 1 */
		padding: 0; /* 2 */
	}

	:global([type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button) {
		height: auto;
	}

	:global([type='search']) {
		outline-offset: -2px; /* 2 */
	}

	:global([type='search']::-webkit-search-decoration) {
		-webkit-appearance: none;
	}

	:global(::-webkit-file-upload-button) {
		-webkit-appearance: button; /* 1 */
		font: inherit; /* 2 */
	}

	:global(details) {
		display: block;
	}

	:global(summary) {
		display: list-item;
	}

	:global(template) {
		display: none;
	}

	:global([hidden]) {
		display: none;
	}

	/*end normalize.css */

	/*! global tokens */
	:global(:root) {
		--site--scroll-padding-top: var(--site-header--bottom);
		--border-radius--s: 4px;
		--border-radius--m: 12px;
		--border-width--s: 2px;
		--border-width--m: 4px;
		--border-width--l: 6px;
		--border--1: var(--border-width--s) solid var(--color--brand-1);
		--focus--color: var(--color--brand-1);
		--focus--1--offset: 5px;
		--focus--1--width: 3px;
		--selection-color: var(--color--background);
		--selection-background: var(--color--foreground);
		--text-underline-offset: 0.14em;
		--box-shadow--1: 0 3px 9px hsla(var(--color--brand-1--hsl), 0.15);
		--box-shadow--1--hover: 0 3px 20px 3px hsla(var(--color--brand-1--hsl), 0.15);
		--box-shadow--2: 0 2px 7px hsla(var(--color--black--hsl), 0.1);
		--transition--duration: 200ms;
		--transition--ease: cubic-bezier(0.165, 0.84, 0.44, 1);
		--grid--column-gap: var(--space--responsive--m);
		--grid--row-gap: var(--grid--column-gap);
		--grid--columns: 1;
		--grid--auto-fit--min: 18.75rem;
		--hr--color: var(--color--brand-1);
		--hr--thickness: 2px;
		--blocks--margin-top: var(--space--responsive--2xl);
		--blocks--margin-bottom: var(--space--responsive--2xl);
		--block--margin-top: var(--space--layout);
		--block--margin-bottom: var(--space--layout);
		--block--padding-y: var(--space--l);
		--block--padding-x: var(--space--container-padding);
		--block--max-width: var(--width--responsive--s);
		--block--header--margin-bottom: var(--space--base);
		--block--footer--margin-top: var(--space--base);
		--width--responsive--container: calc(100% - (var(--space--container-padding) * 2));
		--width--xxs: 560px;
		--width--responsive--xxs: min(var(--width--xxs), var(--width--responsive--container));
		--width--xs: 720px;
		--width--responsive--xs: min(var(--width--xs), var(--width--responsive--container));
		--width--s: 765px;
		--width--responsive--s: min(var(--width--s), var(--width--responsive--container));
		--width--m: 1200px;
		--width--responsive--m: min(var(--width--m), var(--width--responsive--container));
		--width--l: 1400px;
		--width--responsive--l: min(var(--width--l), var(--width--responsive--container));
		--space--5xs: 0.25rem;
		--space--4xs: 0.5rem;
		--space--3xs: 0.75rem;
		--space--2xs: 1rem;
		--space--xs: 1.25rem;
		--space--s: 1.5rem;
		--space--m: 2rem;
		--space--l: 2.5rem;
		--space--xl: 3rem;
		--space--2xl: 3.5rem;
		--space--3xl: 4rem;
		--space--4xl: 6rem;
		--space--5xl: 8rem;
		--space--container-padding: var(--space--xs);
		--space--base: var(--space--s);
		--space--layout: var(--space--xl);
		--space--responsive--5xs: var(--space--5xs);
		--space--responsive--4xs: var(--space--4xs);
		--space--responsive--3xs: var(--space--3xs);
		--space--responsive--2xs: var(--space--2xs);
		--space--responsive--xs: var(--space--xs);
		--space--responsive--s: var(--space--s);
		--space--responsive--m: 1.75rem;
		--space--responsive--l: var(--space--m);
		--space--responsive--xl: var(--space--l);
		--space--responsive--2xl: var(--space--xl);
		--space--responsive--3xl: var(--space--2xl);
		--space--responsive--4xl: var(--space--3xl);
		--space--responsive--5xl: var(--space--4xl);
		--space--vertical--s: var(--space--xs);
		--space--vertical--m: var(--space--s);
		--space--vertical--l: 1.75rem;
		--type--font-size--base: calc(18 / 16 * 1rem + (20 - 18) * var(--fluid-bp));
		--type--1--font-family: 'PT Serif', serif;
		--type--1--font-weight: 400;
		--type--1--font-weight--bold: 700;
		--type--1--line-height: 1.6;
		--type--2--font-family: 'PT Sans Narrow', sans-serif;
		--type--2--color: inherit;
		--type--2--font-weight: 700;
		--type--2--line-height: 1.32;
		--type--3--font-family: 'PT Sans', sans-serif;
		--type--3--color: inherit;
		--type--3--font-weight: 400;
		--type--3--font-weight--bold: 700;
		--type--3--line-height: 1.4;
		--heading--max-width: 17em;
		--heading--margin-top: var(--space--l);
		--heading--margin-bottom: var(--space--xs);
		--fluid-min-width: 320;
		--fluid-max-width: 1200;
		--fluid-screen: 100vw;
		--fluid-bp: calc(
			(var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
				(var(--fluid-max-width) - var(--fluid-min-width))
		);
		--link--color: var(--color--brand-1);
		--link--color--hover: var(--color--brand-1);
		--link--text-decoration-color: var(--color--blue-4);
		--link--text-decoration-color--hover: var(--color--blue-2);
		--link--text-decoration: underline;
		--link--text-decoration--hover: underline;
		--link--text-decoration-thickness: 2px;
		--list--item--spacing: 0;
		--list--marker-color: var(--color--blue-3);
		--list--indent: 1.35rem;
		--button--padding-y: 1rem;
		--button--padding-x: 1.5rem;
		--button--border-radius: var(--border-radius--s);
		--button--background-color: var(--color--brand-4);
		--button--color: var(--color--foreground);
		--button--background-color--hover: var(--color--brand-1);
		--button--color--hover: #f6f7f8;
		--button--gap: 0.5em;
		--button--small--padding-y: 0;
		--button--small--padding-x: 0.7em;
	}
	@media (max-width: 61.99em) {
		:global(root) {
			--button--padding-y: 0.5rem;
			--button--padding-x: 1rem;
		}
	}
	:global(root) {
		--input--background-color: var(--color--off-white);
		--input--background-color--focus: var(--color--white);
		--input--background-color--highlight: hsl(
			var(--color--brand-2--h),
			var(--color--brand-2--s),
			90%
		);
		--input--border-width: 2px;
		--input--border-color: var(--color--grey-1);
		--input--border-color--hover: var(--color--brand-3);
		--input--border-radius: var(--border-radius--s);
		--input--color: var(--color--brand-1);
		--input--color--focus: var(--color--brand-1);
		--input--outline-color--focus: var(--color--brand-3);
		--input--outline-width--focus: 1px;
		--input--gap: var(--space--s);
		--input--padding-y: var(--space--2xs);
		--input--padding-x: var(--space--xs);
		--input--padding: var(--input--padding-y) var(--input--padding-x);
		--input--placeholder-color: hsla(var(--color--brand-1--hsl), 0.8);
		--form--label-spacing: var(--space--s);
		--form--textarea-height: 100px;
		--checkbox--size: 1.25em;
		--checkbox--padding: calc(var(--checkbox--size) / 4);
		--checkbox--border-width: 2px;
		--checkbox--check-size: calc(var(--checkbox--size) - (var(--checkbox--padding) * 2));
		--checkbox--check-stroke: 0.15em;
		--checkbox--border-radius: 0.125em;
		--radio--size: 1.25em;
		--radio--padding: calc(var(--radio--size) / 4);
		--radio--border-width: 2px;
		--z-index--theme-editor: 100;
		--z-index--backdrop: 200;
		--z-index--cookies-notice: 300;
		--z-index--site-header: 400;
		--z-index--modal: 500;
		--z-index--visually-hidden: 600;
	}
	@media (min-width: 48em) {
		:global(root) {
			--grid--columns: 2;
		}
	}
	@media (min-width: 62em) {
		:global(root) {
			--grid--columns: 4;
		}
	}
	@media (min-width: 36em) {
		:global(root) {
			--block--padding-y: var(--space--responsive--2xl);
		}
	}
	@media (min-width: 48em) {
		:global(root) {
			--block--padding-x: var(--space--responsive--xl);
		}
	}
	@media screen and (min-width: 1200px) {
		:global(root) {
			--fluid-screen: calc(var(--fluid-max-width) * 1px);
		}
	}
	:global(root) {
		--list--nested-indent: 1.5em;
	}
	@media (min-width: 36em) {
		:global(root) {
			--list--nested-indent: 2em;
		}
	}
	@media (min-width: 36em) {
		:global(root) {
			--space--container-padding: var(--space--m);
			--space--layout: var(--space--3xl);
			--space--responsive--m: var(--space--m);
			--space--responsive--l: var(--space--l);
			--space--responsive--xl: var(--space--xl);
			--space--responsive--2xl: var(--space--2xl);
			--space--responsive--3xl: var(--space--3xl);
			--space--responsive--4xl: var(--space--4xl);
			--space--responsive--5xl: var(--space--5xl);
			--space--vertical--s: var(--space--s);
			--space--vertical--m: var(--space--m);
			--space--vertical--l: var(--space--l);
		}
	}
	:global(root) {
		--color--blue-1: #152d42;
		--color--blue-1--hsl: 208deg, 51.724137931%, 17.0588235294%;
		--color--blue-1--h: 208deg;
		--color--blue-1--s: 51.724137931%;
		--color--blue-1--l: 17.0588235294%;
		--color--blue-2: #0b4572;
		--color--blue-2--hsl: 206.213592233deg, 82.4%, 24.5098039216%;
		--color--blue-2--h: 206.213592233deg;
		--color--blue-2--s: 82.4%;
		--color--blue-2--l: 24.5098039216%;
		--color--blue-3: #5a96d1;
		--color--blue-3--hsl: 209.7478991597deg, 56.3981042654%, 58.6274509804%;
		--color--blue-3--h: 209.7478991597deg;
		--color--blue-3--s: 56.3981042654%;
		--color--blue-3--l: 58.6274509804%;
		--color--blue-4: #88dbff;
		--color--blue-4--hsl: 198.1512605042deg, 100%, 76.6666666667%;
		--color--blue-4--h: 198.1512605042deg;
		--color--blue-4--s: 100%;
		--color--blue-4--l: 76.6666666667%;
		--color--blue-5: #d3edf4;
		--color--blue-5--hsl: 192.7272727273deg, 60%, 89.2156862745%;
		--color--blue-5--h: 192.7272727273deg;
		--color--blue-5--s: 60%;
		--color--blue-5--l: 89.2156862745%;
		--color--grey-1: #141414;
		--color--grey-1--hsl: 0deg, 0%, 7.8431372549%;
		--color--grey-1--h: 0deg;
		--color--grey-1--s: 0%;
		--color--grey-1--l: 7.8431372549%;
		--color--grey-2: #444444;
		--color--grey-2--hsl: 0deg, 0%, 26.6666666667%;
		--color--grey-2--h: 0deg;
		--color--grey-2--s: 0%;
		--color--grey-2--l: 26.6666666667%;
		--color--grey-3: #999999;
		--color--grey-3--hsl: 0deg, 0%, 60%;
		--color--grey-3--h: 0deg;
		--color--grey-3--s: 0%;
		--color--grey-3--l: 60%;
		--color--grey-4: #cccccc;
		--color--grey-4--hsl: 0deg, 0%, 80%;
		--color--grey-4--h: 0deg;
		--color--grey-4--s: 0%;
		--color--grey-4--l: 80%;
		--color--grey-5: #efefef;
		--color--grey-5--hsl: 0deg, 0%, 93.7254901961%;
		--color--grey-5--h: 0deg;
		--color--grey-5--s: 0%;
		--color--grey-5--l: 93.7254901961%;
		--color--red-1: #720800;
		--color--red-1--hsl: 4.2105263158deg, 100%, 22.3529411765%;
		--color--red-1--h: 4.2105263158deg;
		--color--red-1--s: 100%;
		--color--red-1--l: 22.3529411765%;
		--color--off-white: #f6f7f8;
		--color--off-white--hsl: 210deg, 12.5%, 96.862745098%;
		--color--off-white--h: 210deg;
		--color--off-white--s: 12.5%;
		--color--off-white--l: 96.862745098%;
		--color--white: #ffffff;
		--color--white--hsl: 0deg, 0%, 100%;
		--color--white--h: 0deg;
		--color--white--s: 0%;
		--color--white--l: 100%;
		--color--black: #141414;
		--color--black--hsl: 0deg, 0%, 7.8431372549%;
		--color--black--h: 0deg;
		--color--black--s: 0%;
		--color--black--l: 7.8431372549%;
		--color--brand-1: #152d42;
		--color--brand-1--hsl: 208deg, 51.724137931%, 17.0588235294%;
		--color--brand-1--h: 208deg;
		--color--brand-1--s: 51.724137931%;
		--color--brand-1--l: 17.0588235294%;
		--color--brand-2: #0b4572;
		--color--brand-2--hsl: 206.213592233deg, 82.4%, 24.5098039216%;
		--color--brand-2--h: 206.213592233deg;
		--color--brand-2--s: 82.4%;
		--color--brand-2--l: 24.5098039216%;
		--color--brand-3: #5a96d1;
		--color--brand-3--hsl: 209.7478991597deg, 56.3981042654%, 58.6274509804%;
		--color--brand-3--h: 209.7478991597deg;
		--color--brand-3--s: 56.3981042654%;
		--color--brand-3--l: 58.6274509804%;
		--color--brand-4: #88dbff;
		--color--brand-4--hsl: 198.1512605042deg, 100%, 76.6666666667%;
		--color--brand-4--h: 198.1512605042deg;
		--color--brand-4--s: 100%;
		--color--brand-4--l: 76.6666666667%;
		--color--brand-5: #d3edf4;
		--color--brand-5--hsl: 192.7272727273deg, 60%, 89.2156862745%;
		--color--brand-5--h: 192.7272727273deg;
		--color--brand-5--s: 60%;
		--color--brand-5--l: 89.2156862745%;
		--color--foreground: #152d42;
		--color--foreground--hsl: 208deg, 51.724137931%, 17.0588235294%;
		--color--foreground--h: 208deg;
		--color--foreground--s: 51.724137931%;
		--color--foreground--l: 17.0588235294%;
		--color--background: #f6f7f8;
		--color--background--hsl: 210deg, 12.5%, 96.862745098%;
		--color--background--h: 210deg;
		--color--background--s: 12.5%;
		--color--background--l: 96.862745098%;
		--color--contrast: #88dbff;
		--color--contrast--hsl: 198.1512605042deg, 100%, 76.6666666667%;
		--color--contrast--h: 198.1512605042deg;
		--color--contrast--s: 100%;
		--color--contrast--l: 76.6666666667%;
		--color--error: #720800;
		--color--error--hsl: 4.2105263158deg, 100%, 22.3529411765%;
		--color--error--h: 4.2105263158deg;
		--color--error--s: 100%;
		--color--error--l: 22.3529411765%;
		--color--valid: #5a96d1;
		--color--valid--hsl: 209.7478991597deg, 56.3981042654%, 58.6274509804%;
		--color--valid--h: 209.7478991597deg;
		--color--valid--s: 56.3981042654%;
		--color--valid--l: 58.6274509804%;
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Sans Narrow';
		font-style: normal;
		font-weight: normal;
		src: url('./static/pt-sans-narrow-v19-latin-regular.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Sans Narrow';
		font-style: normal;
		font-weight: bold;
		src: url('./static/pt-sans-narrow-v19-latin-700.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Serif';
		font-style: normal;
		font-weight: normal;
		src: url('./static/pt-serif-v19-latin-regular.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Serif';
		font-style: italic;
		font-weight: normal;
		src: url('./static/pt-serif-v19-latin-italic.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Serif';
		font-style: normal;
		font-weight: bold;
		src: url('./static/pt-serif-v19-latin-700.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Serif';
		font-style: italic;
		font-weight: bold;
		src: url('./static/pt-serif-v19-latin-700-italic.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Sans';
		font-style: normal;
		font-weight: normal;
		src: url('./static/pt-sans-v18-latin-regular.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Sans';
		font-style: italic;
		font-weight: normal;
		src: url('./static/pt-sans-v18-latin-italic.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Sans';
		font-style: normal;
		font-weight: bold;
		src: url('./static/pt-sans-v18-latin-700.woff2') format('woff2');
	}
	@font-face {
		font-display: swap;
		font-family: 'PT Sans';
		font-style: italic;
		font-weight: bold;
		src: url('./static/pt-sans-v18-latin-700italic.woff2') format('woff2');
	}
	/* end global tokens */

	/*! accessibility nicities */
	@media (prefers-reduced-motion: reduce) {
		:global(html:focus-within) {
			scroll-behavior: auto;
		}

		:global(*, *::before, *::after) {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	:global(.screenreader-only) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	/* end nicities */
</style>
