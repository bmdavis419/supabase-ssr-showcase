<script lang="ts">
	const { data } = $props();

	$effect(() => {
		data.supabase.auth.getSession().then((res) => {
			console.log(res);
		});
	});
</script>

<h2>welcome to site</h2>
<a href="/">home</a>

{#if data.user}
	<div>WELCOME: {data.user.email}</div>
{/if}
