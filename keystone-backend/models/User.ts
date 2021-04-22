import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

const User = list({
	fields: {
      name: text({
         isRequired: true
      }),
      email: text({
         isRequired: true,
         isUnique: true,
      }),
      password: password({
         isRequired: true,
         minLength: 8,
      })
   },
});

export default User;
