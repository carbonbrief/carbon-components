// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';


const baseDir = process.env.PROJECT_PATH ? `/${process.env.PROJECT_PATH}` : '/build';
console.log('building to >> ', baseDir);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({}),
		paths: {
			base: baseDir
		},
		prerender: {
			handleHttpError: 'ignore'
		}
	},
	env: {
		dir: './'
	}
};

export default config;
