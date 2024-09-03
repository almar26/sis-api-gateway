
module.exports = {
    beforeCreate: async ({ params }) => {
        //console.log("Before Create: ", params);
    },

    afterCreate: async ({ params }) => {
        console.log("After Create: ", params)
        const entry = (
            await strapi.entityService.create("plugin::users-permissions.user", {
                data: {
                    email: params.data.email,
                    username: params.data.username,
                    password: "asd123",
                    confirmed: true,
                    user_id: params.data.user_id,
                    provider: "local",
                    role: 1
                }
            })
        )
    }
}