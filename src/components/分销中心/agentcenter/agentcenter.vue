<template>
	<section class="g-flexview">
		<!-- <topheader />
		<bonus />
		<redcolumn /> -->
		<bonusdetail />
	</section>
</template>

<script>
import bonus from '@/components/分销中心/agentcenter/bonus'
import topheader from '@/components/分销中心/agentcenter/topheader'
import redcolumn from '@/components/分销中心/agentcenter/redcolumn'
import bonusdetail from '@/components/分销中心/agentcenter/bonusdetail'
export default{
	data (){
		return {

		}
	},

	components: {
		bonus,
		redcolumn,
		topheader,
		bonusdetail
	}
} 
</script>

<style>

</style>