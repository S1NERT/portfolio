<script lang="ts">
	import * as Card from '$lib/components/project';
	export let src: string;
	export let alt: string;
	export let quickDesc: string;
	export let longDesc: string;
	export let projectTitle: string;

	export let index: number;
	let id: string = 'project-index-' + index.toString();
</script>

<Card.Root {id}>
	<Card.Content {src} {alt}><span class="font-bold">{quickDesc} </span>{longDesc}</Card.Content>
	<Card.Header>
		<Card.Title>
			{projectTitle}
		</Card.Title>
	</Card.Header>
</Card.Root>
