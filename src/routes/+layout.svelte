<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img src="/logos/ahflogos5.png" alt="logo">
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="no-underline hover:underline"
					target="_blank"
					rel="noreferrer"
				>
					HOME
				</a>
				<a
				    class="no-underline hover:underline"
					target="_blank"
					rel="noreferrer"
				>
					INDUCTEES
				</a>
				<a
					class="no-underline hover:underline"
					target="_blank"
					rel="noreferrer"
				>
					EVENTS
				</a>
				<a
				class="no-underline hover:underline"
				target="_blank"
				rel="noreferrer"
			    >
				MEDIA
			    </a>
				<a
				    class="no-underline hover:underline"
					target="_blank"
					rel="noreferrer"
				>
				DONATE
				</a>
				<a
				class="no-underline hover:underline"
				target="_blank"
				rel="noreferrer"
			    >
				IMPACT
			    </a>
				<a
				class="no-underline hover:underline"
				target="_blank"
				rel="noreferrer"
			    >
				ABOUT
			    </a>
				<img src="/logos/insta.png" alt="facebook">
				<img src="/logos/twitter-16.png" alt="facebook">
				<img src="/logos/facebook-16.png" alt="facebook">
				<img src="/logos/youtube.png" alt="facebook">
				<img src="/logos/linkedin-16.png" alt="facebook">
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
