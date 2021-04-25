import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import User from './models/User';
import Project from './models/Project';
import ProjectImage from './models/ProjectImage';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';

const DB_URL = process.env.DB_URL;

const { withAuth } = createAuth({
	listKey: 'User',
	identityField: 'email',
	secretField: 'password',
	initFirstItem: {
		fields: ['name', 'email', 'password'],
	},
});

const sessionConfig = {
	maxAge: 60 * 60 * 28 * 365,
	secret: process.env.COOKIE_SECRET,
};

export default withAuth(
	config({
		server: {
			cors: {
				origin: [process.env.FRONTEND_URL],
				credentials: true,
			},
		},
		db: {
			adapter: 'mongoose',
			url: DB_URL,
			onConnect: async (keystone) => {
				console.log('database connected');
			},
		},
		lists: createSchema({
			User,
			Project,
         ProjectImage
		}),
		ui: {
			isAccessAllowed: ({ session }) => {
				return !!session?.data;
			},
		},
		session: withItemData(statelessSessions(sessionConfig), {
			User: `
            id
            name
            email
         `,
		}),
	})
);
