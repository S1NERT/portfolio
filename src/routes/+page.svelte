<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { MailOpen, FileText, Linkedin } from 'lucide-svelte';
	import coverImage from '$lib/images/img1.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="my-32 flex flex-col gap-y-4">
	<h1 class="text-2xl font-semibold text-gray-800">
		Hello! I am a high school student at NuVu Innovation School
	</h1>
	<p>lorum ipsum</p>
	<div class="flex gap-x-4">
		<a href="mailto:aksinert@gmail.com"><MailOpen /></a><a
			href="src/lib/images/Ari Siner Resume.png"><FileText /></a
		><a href="https://www.linkedin.com/in/ari-sinert-48597b27a/"><Linkedin /></a>
	</div>
</section>

<Card.Root>
	<Card.Content>
		<div class="image-overlay-container">
			<img src={coverImage} alt="project" />
			<div class="centered-text">Your Text Here</div>
		</div>
	</Card.Content><Card.Header>
		<Card.Title>Test</Card.Title><Card.Description>Test</Card.Description>
	</Card.Header>
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
