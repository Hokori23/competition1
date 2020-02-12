<template>
	<section id="home">
		<router-view></router-view>
	</section>
</template>

<script>
	import Post from '@/views/secondViews/Post.vue'
	import DetailPost from '@/views/thirdViews/detailPost.vue'
	export default {
		name: 'Home',
		components: {
			Post,
			DetailPost
		}
	}
</script>
