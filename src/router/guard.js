let pass = ['login', 'home'];

let toPass = v => { return pass.some(el => el == v) }

export default (vueRouter, to, from, next) => {
    let login = true;
    if (to.name) {
        if (toPass(to.name)) {
            next();
        } else {
            if (login) {
                next();
            } else {
                vueRouter.push('/login');
            }
        }
    } else {
        // vueRouter.push('/');
        next();

    }
};