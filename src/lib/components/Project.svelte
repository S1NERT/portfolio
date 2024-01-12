<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import CardContent from './ui/card/card-content.svelte';
	export let src: string;
	export let alt: string;
	export let quickDesc: string;
	export let longDesc: string;
	export let projectTitle: string;
</script>

<Card.Root class="overflow-visible">
	<Card.Content class="p-0">
		<div class="image-overlay-container aspect-4/3 overflow-hidden rounded-lg drop-shadow-md">
			<img {src} {alt} class="object-cover" />
			<div class="centered-text">
				<div
					class="text-pretty text-balance p-2 text-[clamp(0.5rem,2vw,1.5rem)] leading-loose text-gray-600 sm:p-10 md:p-12 lg:p-14 xl:p-16"
				>
					<span class="font-bold">{quickDesc}</span>
					{longDesc}
				</div>
			</div>
		</div>
	</Card.Content>
	<Card.Header>
		<Card.Title>
			<div class="text-[clamp(0.5rem,2vw,1.5rem)] tracking-wide">
				{projectTitle}
			</div>
		</Card.Title>
	</Card.Header>
	<Card.Content />
</Card.Root>

<style>
	.image-overlay-container {
		display: grid;
		width: fit-content; /* or a specific width */
		position: relative; /* Ensures proper stacking context */
		overflow: hidden; /* Clips all overflow */
	}

	.image-overlay-container img {
		grid-area: 1 / 1 / 2 / 2;
		width: 100%;
		height: auto; /* Preserves aspect ratio */
		transition: transform 0.3s ease; /* Smooth transition for zoom effect */
	}

	.image-overlay-container .centered-text {
		grid-area: 1 / 1 / 2 / 2;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: black; /* Text color */
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0); /* Initially transparent */
		opacity: 0; /* Initially hidden */
		clip-path: circle(0% at 50% 50%); /* Starts clipped */
		transition:
			background-color 0.3s ease,
			opacity 0.3s ease,
			clip-path 0.3s ease;
	}

	.image-overlay-container:hover .centered-text {
		background-color: rgba(255, 255, 255, 0.8); /* White with some opacity */
		opacity: 1; /* Show the text */
		clip-path: circle(75% at 50% 50%); /* Expands on hover */
	}

	.image-overlay-container:hover img {
		transform: scale(1.05); /* Zooms the image slightly on hover */
	}
</style>
