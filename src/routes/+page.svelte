<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">TRANSFORM</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<svg
				class="fill-token -scale-x-[100%]"
				xmlns="http://www.w3.org/2000/svg"
			>
			<image href="src/lib/assets/anni6.png">
			</svg>
		</figure>
		<!-- / -->
		<div class=" justify-center space-x-2">
			<p>Cultural, educational, and humanitarian charity that
			transforms public perception of Asian and Indigenous
			legacy with $1.7 million in community and
			philanthropic impact since 2020.</p>
		</div>
	</div>
	<div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">

		<ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
			<li>
				<img src="/ahf1.jpg" alt="Facebook" />
			</li>
			<li>
				<img src="/ahf2.jpg" alt="Disney" />
			</li>
			<li>
				<img src="/ahf3.jpg" alt="Airbnb" />
			</li>
			<li>
				<img src="/ahf4.jpg" alt="Apple" />
			</li>
			<li>
				<img src="/ahf5.jpg" alt="Apple" />
			</li>
			<li>
				<img src="/ahf6.jpg" alt="Spark" />
			</li>
			<li>
				<img src="/ahf7.jpg" alt="Samsung" />
			</li>
			<li>
				<img src="/ahf8.jpg" alt="Quora" />
			</li>
			<li>
				<img src="/ahf9.jpg" alt="Sass" />
			</li>
			<li>
				<img src="/ahf10.jpg" alt="Facebook" />
			</li>
			<li>
				<img src="/ahf11.jpg" alt="Facebook" />
			</li>
			<li>
				<img src="/ahf12.jpg" alt="Disney" />
			</li>
			<li>
				<img src="/ahf13.jpg" alt="Airbnb" />
			</li>
			<li>
				<img src="/ahf14.jpg" alt="Apple" />
			</li>
			<li>
				<img src="/ahf15.jpg" alt="Spark" />
			</li>
			<li>
				<img src="/ahf16.jpg" alt="Samsung" />
			</li>
			<li>
				<img src="/ahf17.jpg" alt="Quora" />
			</li>
			<li>
				<img src="/ahf18.jpg" alt="Sass" />
			</li>
			<li>
				<img src="/ahf19.jpg" alt="Facebook" />
			</li>
			<li>
				<img src="/ahf20.jpg" alt="Facebook" />
			</li>
			<li>
				<img src="/ahf21.jpg" alt="Disney" />
			</li>
			<li>
				<img src="/ahf22.jpg" alt="Airbnb" />
			</li>
		</ul>            
	</div>
</div>


<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
