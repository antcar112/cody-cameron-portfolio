exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
	{
	    allContentfulMotionGraphics {
	        nodes {
	            slug
	        }
		}
		allContentfulGraphicDesign {
	        nodes {
	            slug
	        }
	    }
	}
	`);

	if (result.errors) {
		reporter.panic('Error loading lessons', JSON.stringify(result.errors));
	}

	result.data.allContentfulMotionGraphics.nodes.forEach(motion => {
		actions.createPage({
			path      : `/motion-graphics/${motion.slug}/`,
			component : require.resolve('./src/templates/motion-template.js'),
			context   : {
				slug : motion.slug
			}
		});
	});
	result.data.allContentfulGraphicDesign.nodes.forEach(graphic => {
		actions.createPage({
			path      : `/graphic-design/${graphic.slug}/`,
			component : require.resolve(
				'./src/templates/graphic-design-template.js'
			),
			context   : {
				slug : graphic.slug
			}
		});
	});
};
