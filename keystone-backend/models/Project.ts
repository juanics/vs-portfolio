import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const Project = list({
	fields: {
		name: text({
			isRequired: true,
		}),
		description: text({
			isRequired: true,
			ui: {
				displayMode: 'textarea',
			},
		}),
      date: timestamp(),
		gallery: relationship({
			ref: 'ProjectImage.project',
			many: true,
			ui: {
				cardFields: ['image'],
				displayMode: 'cards',
            itemView: {
               fieldMode: 'edit'
            },
            inlineEdit: {
               fields: ['image']
            },
            inlineCreate: {
               fields: ['image']
            },
			},
		}),
	},
});

export default Project;
