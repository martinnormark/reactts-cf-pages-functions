import { jsonResponse } from '../util/jsonResponse';

export const onRequestGet: PagesFunction<{}> = async ({ request, env }) => {
	return jsonResponse({
		time: new Date(),
	});
};
