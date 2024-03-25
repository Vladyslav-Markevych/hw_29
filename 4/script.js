function User(username, email, admin = false) {
  this.username = username;
  this.email = email;
  this.admin = admin;
  this.logIn = function () {
    if (system.registration.some((obj) => obj.username == this.username)) {
      system.online.push(this.username);
      console.log(`Пользователь ${this.username} теперь онлайн`);
    } else {
      console.log(`Пользователь ${this.username} не зарегистрирован`);
    }
  };
  this.logOut = function () {
    let toDelete = system.online.findIndex((obj) => obj == this.username);
    system.online.splice(toDelete, 1);
    console.log(`Пользователь ${this.username} вышел из системы`);
  };
  this.removeUser = function (user) {
    if (this.admin && system.online.some((obj) => obj == this.username)) {
      system.removeUser(user);
      console.log(`Пользователь ${user.username} удален из системы`);
    } else {
      console.log("Вы не администратор или не онлайн");
    }
  };
}

const system = {
  addUser: function (user) {
    if (system.registration.some((obj) => obj.username == user.username)) {
      console.log(`Пользователь ${user.username} уже зарегистрирован`);
    } else {
      system.registration.push(user);
      console.log(`Пользователь ${user.username} зарегистрирован`);
    }
  },
  removeUser: function (user) {
    let toDelete = system.registration.findIndex(
      (id) => id.username == user.username
    );
    let toDeleteOnline = system.online.findIndex((id) => id == user.username);
    system.registration.splice(toDelete, 1);
    system.online.splice(toDeleteOnline, 1);
  },
  getOnlineUsers: function () {
    if (system.online.length == 0) {
      console.log("Нет пользователей онлайн.");
    } else {
      console.log("Пользователи онлайн:", system.online);
    }
  },
  online: [],
  registration: [],
};

let user1 = new User("User1", "first@gmail.com");
let user2 = new User("User2", "second@gmail.com");
let admin = new User("admin", "admin@gmail.com", true);

system.addUser(user1);
system.addUser(user2);
system.addUser(admin);
user1.logIn();
user2.logIn();
admin.logIn();
system.getOnlineUsers();
user1.logOut();
admin.removeUser(user2);
// getUser - не понял для чего.
