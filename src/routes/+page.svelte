<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	const { data } = $props();

	$effect(() => {
		console.log(data.session?.user.email);
	});

	async function signInWithEmail() {
		const res = await data.supabase.auth.signInWithOtp({
			email: 'TESTING@gmail.com',
			options: {
				// set this to false if you do not want the user to be automatically signed up
				shouldCreateUser: true,
				emailRedirectTo: 'http://localhost:5173/auth/callback'
			}
		});
	}

	async function signInWithGithub() {
		await data.supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: 'http://localhost:5173/auth/callback'
			}
		});
	}

	async function signOut() {
		await data.supabase.auth.signOut();

		invalidateAll();
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => signInWithEmail()}>TESTING SIGN IN EMAIL</button>
<button on:click={() => signInWithGithub()}>TESTING GITHUB</button>
<button on:click={() => signOut()}>SIGN OUT</button>

{#if data.user}
	<h2>Welcome {data.user.email}</h2>
{/if}
