import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';

export const cloudinary = {
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'portfolio',
};

const ProjectImage = list({
	fields: {
		image: cloudinaryImage({
			cloudinary,
			label: 'Source',
		}),
		project: relationship({
			ref: 'Project.gallery',
		}),
		altText: text(),
	},
	ui: {
		listView: {
			initialColumns: ['image', 'project'],
		},
	},
});

export default ProjectImage;
