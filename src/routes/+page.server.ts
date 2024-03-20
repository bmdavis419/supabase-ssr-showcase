export const load = async ({ locals: { supabase } }) => {
	const userFetch = await supabase.auth.getUser();

	return {
		user: userFetch.data.user
	};
};
