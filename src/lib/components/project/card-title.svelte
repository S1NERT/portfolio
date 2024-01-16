<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import type { HeadingLevel } from '.';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props['class'] = undefined;
	export let tag: $$Props['tag'] = 'h3';
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn('text-lg font-semibold leading-none tracking-tight', className)}
	{...$$restProps}
	><div class="text-[clamp(0.5rem,2vw,1.5rem)] tracking-wide">
		<slot />
	</div>
</svelte:element>
