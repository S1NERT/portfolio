import Root from "./card.svelte";
import Content from "./card-content.svelte";
import Header from "./card-header.svelte";
import Title from "./card-title.svelte";

export {
	Root,
	Content,
	Header,
	Title,
	//
	Root as Card,
	Content as CardContent,
	Header as CardHeader,
	Title as CardTitle
};

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
