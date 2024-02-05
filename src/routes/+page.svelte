<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import img1 from '$lib/images/ahf1.jpg'
	import img2 from '$lib/images/ahf2.jpg'
	import img3 from '$lib/images/ahf3.jpg'
	import img4 from '$lib/images/ahf4.jpg'
	import img5 from '$lib/images/ahf5.jpg'
	import img6 from '$lib/images/ahf6.jpg'
	import img7 from '$lib/images/ahf7.jpg'
	import img8 from '$lib/images/ahf8.jpg'
	import img9 from '$lib/images/ahf9.jpg'
	import img10 from '$lib/images/ahf10.jpg'
	import img11 from '$lib/images/ahf11.jpg'
	import img12 from '$lib/images/ahf12.jpg'
	import img13 from '$lib/images/ahf13.jpg'
	import img14 from '$lib/images/ahf14.jpg'
	import img15 from '$lib/images/ahf15.jpg'
	import img16 from '$lib/images/ahf16.jpg'
	import img17 from '$lib/images/ahf17.jpg'
	import img18 from '$lib/images/ahf18.jpg'
	import img19 from '$lib/images/ahf19.jpg'
	import img20 from '$lib/images/ahf20.jpg'
	import img21 from '$lib/images/ahf21.jpg'
	import img22 from '$lib/images/ahf22.jpg'
</script>

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
			<image href="/anni6.png">
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
    <main class="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
		    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">

		    	<ul class="flex items-center  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
					<li>
						<img  src="{img1}" alt="Facebook" />
					</li>
					<li>
						<img src="{img2}" alt="Disney" />
					</li>
					<li>
						<img src="{img3}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img4}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img5}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img6}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img7}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img8}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img9}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img10}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img11}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img12}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img13}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img14}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img15}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img16}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img17}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img18}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img19}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img20}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img21}" alt="Airbnb" />
					</li>
					<li>
						<img src="{img22}" alt="Airbnb" />
					</li>
				</ul>            
			</div>
		</div>
	</main>
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
