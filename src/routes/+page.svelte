<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { MailOpen, FileText, Linkedin } from 'lucide-svelte';

	import projects from '$stores/projectStore';
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
	<div class="flex gap-x-8 gap-y-2">
		<a href="mailto:aksinert@gmail.com"><MailOpen class="h-10 w-10 stroke-gray-600" /></a><a
			href="src/lib/images/Ari Siner Resume.png"><FileText class="h-10 w-10 stroke-gray-600" /></a
		><a href="https://www.linkedin.com/in/ari-sinert-48597b27a/"
			><Linkedin class="h-10 w-10 stroke-gray-600" /></a
		>
	</div>
</section>

<section class="justify-items-left grid items-center gap-8">
	{#each $projects as project, index}
		<Project
			src={project.src}
			alt={project.alt}
			quickDesc={project.quickDesc}
			longDesc={project.longDesc}
			projectTitle={project.projectTitle}
			{index}
		/>
	{/each}
</section>

<!-- 
<Card.Root class="overflow-visible" id="target-element">
	<Card.Content class="p-0">
		<div class="image-overlay-container overflow-hidden rounded-lg drop-shadow-md">
			<img src={Pridefultrinkets} alt="project" />
			<div class="centered-text">
				<div
					class="text-pretty text-balance p-2 text-[clamp(0.5rem,2vw,1.5rem)] leading-loose text-gray-600 sm:p-10 md:p-12 lg:p-14 xl:p-16"
				>
					<span class="font-bold">
						A multi-sensory exhibit created for the Queer Youth Exhibition
					</span>
					co-hosted by The Design Museum Everywhere. The exhibit utilizes small take home objects that
					are collected at tables placed around the space and when put together form a unicorn. The tables
					are placed intentionally to guide people towards other events in the space. In addition when
					a user approaches the table, it lights up and plays a small audio sample through a custom designed
					audio driver, corresponding to the closest event along with showcasing a prominent LGBTQ+ figure.
				</div>
			</div>
		</div>
	</Card.Content><Card.Header>
		<Card.Title
			><div class="text-[clamp(0.5rem,2vw,1.5rem)] tracking-wide">
				-Prideful Trinkits
			</div></Card.Title
		><Card.Description></Card.Description>
	</Card.Header>
</Card.Root>

<Card.Root class="overflow-visible" id="target-element">
	<Card.Content class="p-0">
		<div class="image-overlay-container overflow-hidden rounded-lg drop-shadow-md">
			<img src={InclusiveMicro} alt="project" />
			<div class="centered-text">
				<div
					class="text-pretty text-balance p-2 text-[clamp(0.5rem,2vw,1.5rem)] leading-loose text-gray-600 sm:p-10 md:p-12 lg:p-14 xl:p-16"
				>
					<span class="font-bold">
						A multi-sensory exhibit created for the Queer Youth Exhibition
					</span>
					co-hosted by The Design Museum Everywhere. The exhibit utilizes small take home objects that
					are collected at tables placed around the space and when put together form a unicorn. The tables
					are placed intentionally to guide people towards other events in the space. In addition when
					a user approaches the table, it lights up and plays a small audio sample through a custom designed
					audio driver, corresponding to the closest event along with showcasing a prominent LGBTQ+ figure.
				</div>
			</div>
		</div>
	</Card.Content><Card.Header>
		<Card.Title
			><div class="text-[clamp(0.5rem,2vw,1.5rem)] tracking-wide">
				-Prideful Trinkits
			</div></Card.Title
		><Card.Description></Card.Description>
	</Card.Header>
</Card.Root> -->
