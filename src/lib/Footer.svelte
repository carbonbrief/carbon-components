<script>
	import CarbonLogo from './Logo.svelte';
  import upChevron from '$lib/assets/up-chevron.png'
</script>

<footer class="stack">
	<div class="center">
		<div class="box top full-width">
			<a href="#top" class="up-arrow"  style="background-image:url({upChevron})"><span class="screenreader-only">Back to the top</span></a>
		</div>
		<nav class="box">
			<div class="stack">
				<CarbonLogo monochrome={true} light={true} />
				<p class="credit">
					Published under a <a
						target="_blank"
						href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode">CC license</a
					>. You are welcome to reproduce unadapted material in full for non-commercial use,
					credited &lsquo;Carbon Brief&rsquo; with a link to the article. Please contact us for
					commercial use.
				</p>
			</div>
			<div>
				<h2>Sections</h2>
				<ul>
					<li><a href="https://www.carbonbrief.org/category/science/">Science</a></li>
					<li><a href="https://www.carbonbrief.org/category/energy/">Energy</a></li>
					<li><a href="https://www.carbonbrief.org/category/policy/">Policy</a></li>
					<li><a href="https://www.carbonbrief.org/category/in-focus/">In Focus</a></li>
					<li><a href="https://www.carbonbrief.org/china-briefing/">China Briefing</a></li>
					<li><a href="https://www.carbonbrief.org/cropped/">Cropped</a></li>
				</ul>
			</div>
			<div>
				<h2>About</h2>
				<ul>
					<li><a href="https://www.carbonbrief.org/about-us/" aria-current="page">About Us</a></li>
					<li><a href="https://www.carbonbrief.org/contact-us/">Contact Us</a></li>
					<li><a href="https://www.carbonbrief.org/newsletter-sign-up/">Newsletters</a></li>
					<li><a href="https://www.carbonbrief.org/privacy/">Privacy Policy</a></li>
					<li><a href="https://www.carbonbrief.org/cookies/">Cookie Policy</a></li>
					<li><a href="https://www.carbonbrief.org/comments-policy/">Comments Policy</a></li>
				</ul>
			</div>
			<div>
				<h2>Social</h2>
				<ul>
					<li>
						<a target="_blank" rel="noopener" href="https://twitter.com/CarbonBrief">Twitter</a>
					</li>
					<li>
						<a target="_blank" rel="noopener" href="https://www.linkedin.com/company/carbon-brief/"
							>LinkedIn</a
						>
					</li>
					<li>
						<a target="_blank" rel="noopener" href="https://www.facebook.com/carbonbrief"
							>Facebook</a
						>
					</li>
					<li>
						<a target="_blank" rel="noopener" href="https://www.instagram.com/carbonbrief"
							>Instagram</a
						>
					</li>
					<li>
						<a
							target="_blank"
							rel="noopener"
							href="https://www.youtube.com/channel/UCiXgvmQ2jUgUjRpJzvga5Tg">YouTube</a
						>
					</li>
				</ul>
			</div>
		</nav>
		<hr />
		<div class="copyright box">
			Published by Carbon Brief Ltd &copy; {new Date().getFullYear()} - Company No. 07222041
		</div>
	</div>
</footer>

<style>
	hr {
		margin-top: 20px;
		margin-bottom: 20px;
		border: 0;
		border-top: var(--border-thin) solid var(--color-light-grey);
	}

	footer {
		background-color: var(--color-dark-background);
		color: var(--color-light-text);
		margin-top: var(--s4);
	}

	p.credit {
		font-family: var(--serif);
		font-size: var(--s0);
		width:75%;
		line-height: var(--s1);
	}

	p.credit a{
		color: var(--color-light-text);
	}

	.top {
		padding-top: 0;
	}

	.full-width {
		width: 100%;
		box-sizing: border-box;
		align-items: flex-start;
	}

	nav {
		display: grid;
		grid-template-columns: 6fr 2fr 2fr 2fr;
		column-gap: var(--s1);
	}

	h2 {
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: var(--s-4);
		font-size: var(--s0);
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	ul a {
		text-decoration: none;
		color: var(--color-light-text);
		font-family: var(--sans-serif-narrow);
	}

	ul a:hover {
		text-decoration: underline;
	}

	a.up-arrow {
		display: block;
		width: var(--s3);
		height: var(--s3);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.copyright{
		font-size: var(--s0);
	}
</style>
