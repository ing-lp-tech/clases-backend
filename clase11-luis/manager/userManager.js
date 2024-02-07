const usuarios = [
  {
    name: "cosme",
    email: "cosme@gmail.com",
    password: "cosme123",
  },
  {
    name: "cosme1",
    email: "cosme1@gmail.com",
    password: "cosme1234",
  },
  {
    name: "cosme2",
    email: "cosme2@gmail.com",
    password: "cosme12345",
  },
];

module.exports = { usuarios };

/* 
class UserManager {
    constructor(){
        users = []
    }
    eliminarUsuario (emailToDelete){
        this.users = this.users.filter((user) => user.email !== emailToDelete)
    }
}

const userManager = new UserManager()


module.exports = userManager
 */
