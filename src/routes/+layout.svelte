<script>
	import '../app.pcss';
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main,
	footer {
		width: min(100% - 3rem, 960px);
		margin-inline: auto;
	}
</style>
