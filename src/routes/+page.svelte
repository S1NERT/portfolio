<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { MailOpen, FileText, Linkedin } from 'lucide-svelte';
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
		<a href="mailto:aksinert@gmail.com"><MailOpen /></a><a><FileText /></a><a><Linkedin /></a>
	</div>
</section>

<Card.Root>
	<Card.Content
		><img
			src="https://d20kqt4x4odakd.cloudfront.net/unsafe/720x405/filters:quality(90):rotate(0)/717wbpb5tnxifon1spngu6xg4xuj"
			alt="img"
		/></Card.Content
	><Card.Header>
		<Card.Title>Test</Card.Title><Card.Description>Test</Card.Description>
	</Card.Header>
</Card.Root>
