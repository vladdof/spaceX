<template>
	<main class="main">
		<div class="container">
			<hgroup class="title">
				<h1>
					<img class="logo-title" src="/logo.svg" alt="Space X" />
				</h1>
				<h2 class="subtitle">
					{{ company.summary }}
				</h2>
			</hgroup>


			<div class="row">
				<table class="home_table home_table-manager">
					<caption class="home_table-title">
						Manager
					</caption>
					<thead>
						<tr>
							<td class="home_table-column table-column-left">CEO</td>
							<td class="home_table-column">{{ company.ceo }}</td>
						</tr>
						<tr>
							<td class="home_table-column table-column-left">COO</td>
							<td class="home_table-column">{{ company.coo }}</td>
						</tr>
						<tr>
							<td class="home_table-column table-column-left">CTO</td>
							<td class="home_table-column">{{ company.cto }}</td>
						</tr>
						<tr>
							<td class="home_table-column table-column-left">CTO PROPULSION</td>
							<td class="home_table-column">{{ company.cto_propulsion }}</td>
						</tr>


					</thead>
				</table>

				<table class="home_table home_table-location">
					<caption class="home_table-title">
						Location
					</caption>
					<thead>
						<tr>
							<td class="home_table-column table-column-left">State</td>
							<td class="home_table-column">{{ company.headquarters.state }}</td>
						</tr>
						<tr>
							<td class="home_table-column table-column-left">City</td>
							<td class="home_table-column">{{ company.headquarters.city }}</td>
						</tr>
						<tr>
							<td class="home_table-column table-column-left">Address</td>
							<td class="home_table-column">{{ company.headquarters.address }}</td>
						</tr>

					</thead>
				</table>

				<rockets-video />
			</div>

		</div>
	</main>
</template>

<script setup>
	import RocketsVideo from './rockets-video.vue';

	defineProps({
		company: {
			type: Object,
			default: () => ({}),
		},
	});
</script>

<style>
	@import 'home-content';
</style>
