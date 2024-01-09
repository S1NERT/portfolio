<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { MailOpen, FileText, Linkedin } from 'lucide-svelte';
	import coverImage from '$lib/images/img1.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="my-32 flex flex-col gap-y-8">
	<h1 class="text-2xl font-semibold leading-loose tracking-wider text-gray-600">
		Hello! I am a high school student at <a
			href="https://cambridge.nuvustudio.com/"
			class="text-blue-500">NuVu Innovation School</a
		> in Cambridge, Massachusetts. I enjoy crafting design experiences that empower others.
	</h1>
	<!-- Add my job experiance and education here when i get those <p></p> -->
	<div class="flex gap-x-8">
		<a href="mailto:aksinert@gmail.com"><MailOpen class="h-10 w-10 stroke-gray-600" /></a><a
			href="src/lib/images/Ari Siner Resume.png"><FileText class="h-10 w-10 stroke-gray-600" /></a
		><a href="https://www.linkedin.com/in/ari-sinert-48597b27a/"
			><Linkedin class="h-10 w-10 stroke-gray-600" /></a
		>
	</div>
</section>

<Card.Root class="overflow-hidden rounded">
	<Card.Content class="p-0">
		<div class="image-overlay-container">
			<img src={coverImage} alt="project" />
			<div class="centered-text">
				<div class="p-16 text-2xl leading-loose text-gray-600">
					<div class="font-bold">
						A multi-sensory exhibit created for the Queer Youth Exhibition
					</div>
					co hosted by The Design Museum Everywhere. The exhibit utilizes small take home objects that
					are collected at tables placed around the space and when put together form a unicorn. The tables
					are placed intentionally to guide people towards other events in the space. In addition when
					a user approaches the table, it lights up and plays a small audio sample through a custom designed
					audio driver, corresponding to the closest event along with showcasing a prominent LGBTQ+ figure.
				</div>
			</div>
		</div>
	</Card.Content><Card.Header>
		<Card.Title><div class="text-xl tracking-wide">-Prideful Trinkits</div></Card.Title
		><Card.Description></Card.Description>
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
