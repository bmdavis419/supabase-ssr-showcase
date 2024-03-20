export const load = async ({ locals }) => {
	const user = await locals.supabase.auth.getUser();

	return { user: user.data.user };
};
