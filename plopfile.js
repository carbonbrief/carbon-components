export default function (plop) {
	// controller generator
	plop.setGenerator('controller', {
		description: 'application controller logic',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'choose a component name '
		}],
		actions: [{
			type: 'add',
			path: 'src/lib/{{name}}.svelte',
			templateFile: 'component-templates/component.hbs'
		},{
			type: 'add',
			path: 'src/routes/{{name}}/+page.svelte',
			templateFile: 'component-templates/example-page.hbs'
		},{
      path: 'src/lib/index.js',
      pattern: /(\/\/ COMPONENT IMPORTS)/g,
      template: 'import {{name}} from "./{{name}}.svelte";\n$1',
      type: 'modify',
    },{
      path: 'src/lib/index.js',
      pattern: /(\/\/ COMPONENT EXPORTS)/g,
      template: '\t{{name}},\n$1',
      type: 'modify',
    },{
      path: 'src/routes/+page.svelte',
      pattern: /(<!-- NEW COMPONENTS -->)/g,
      template: '\t<li><a href="{{name}}">{{name}}</a></li>\n$1',
      type: 'modify',
    },]
	});
};