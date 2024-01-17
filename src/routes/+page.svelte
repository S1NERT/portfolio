<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { MailOpen, FileText, Linkedin } from 'lucide-svelte';

	import projects from '$stores/projects';

	let resume = 'src/lib/Ari-Sinert-Resume.pdf';
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
			href="./Ari-Sinert-Resume.pdf"><FileText class="h-10 w-10 stroke-gray-600" /></a
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
