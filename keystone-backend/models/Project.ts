import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const Project = list({
   fields: {
      name: text({
         isRequired: true
      }),
      description: text({
         isRequired: true,
         ui: {
            displayMode: "textarea"
         }
      }),
      // gallery: relationship({
      //    ref: 'Image.project',
      //    many: true,

      // })
   }
});

export default Project;