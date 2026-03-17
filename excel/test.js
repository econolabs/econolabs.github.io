let { getFirebaseNode } =
    basicfirebasecrudauthservices;

console.log("Ha Ha")

async function getIt() {
    try {
        let userPosts = await getFirebaseNode({ url: "usersCraft/" + 'nick_golovenkin_yandex_ru' + "/posts", type: "array" });
        console.log(userPosts);
        return { data: Array.isArray(userPosts) ? userPosts : [] }
    } catch (error) {
        return error
    }
}




getIt().then(res => console.log(res));
