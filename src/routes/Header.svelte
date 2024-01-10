<script>
	import { onMount } from 'svelte';

	let lastScrollY = 0;
	let headerVisible = true;
	let ticking = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		});
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		const currentScrollY = window.scrollY;
		if (Math.abs(currentScrollY - lastScrollY) > 10) {
			// Threshold of 10px
			if (currentScrollY > lastScrollY) {
				// Scrolling down
				headerVisible = false;
			} else {
				// Scrolling up
				headerVisible = true;
			}
			lastScrollY = currentScrollY;
		}
	}
	function scrollToTarget() {
		const element = document.getElementById('target-element');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-transform duration-300 supports-[backdrop-filter]:bg-background/60 {!headerVisible
		? '-translate-y-full'
		: ''}"
>
	<div class="container flex h-14 items-center justify-between">
		<a class="mr-6 flex items-center space-x-2" href="/">
			<span class="hidden text-[clamp(0.5rem,2vw,1.5rem)] font-bold sm:inline-block"
				>ari sinert</span
			>
		</a>
		<nav class="flex items-center space-x-6 text-sm font-medium">
			<button
				on:click={scrollToTarget}
				class="text-md text-foreground/60 text-slate-500 transition-colors hover:text-foreground/80"
				>Works</button
			>
		</nav>
	</div>
</header>
