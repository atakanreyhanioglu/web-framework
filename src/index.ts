import {User} from "./models/User";

const user = new User({ name: 'newrecord', age: 0 })

user.on('change', () => {
    console.log('user changed html needs update')
})

user.set({ id: 1, age: 1, name: 'atakan html'})


