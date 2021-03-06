import axios from "axios";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserForm } from "./views/UserForm";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    const userList = new UserList(root, users);
    userList.render();
  }
});
users.fetch();

// const user = User.buildUser({ name: "NAME", age: 20 });
// const root = document.getElementById("root");
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
// } else {
//   throw new Error("root element not found");
// }

// const user = User.buildUser({ name: "NAME", age: 20 });
// const root = document.getElementById("root");
// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render();
// } else {
//   throw new Error("root element not found");
// }

// const collection = User.buildUserCollection();
// collection.on("change", () => console.log(collection));
// collection.fetch();

// const collection = new Collection<User, UserProps>(
//   "http://localhost:3000/users",
//   (json: UserProps) => User.buildUser(json)
// );
// collection.on("change", () => console.log(collection));
// collection.fetch();

// const user = User.buildUser({ id: 1 });
// user.on("change", () => {
//   console.log(user);
// });
// user.fetch();

// const user = new User({ id: 1, name: "newer name", age: 0 });
// user.on("save", () => {
//   console.log(user);
// });
// user.save();

// const user = new User({ id: 1 });
// user.on("change", () => {
//   console.log(user);
// });
// user.fetch();

// const user = new User({ name: "new record", age: 0 });
// user.on("change", () => {
//   console.log("user was changed");
// });
// user.set({ name: "new name" });
// console.log(user.get("name"));

// const user = new User({ name: "MAGIC SHOW", age: 1000 });
// user.events.on("change", () => {
//   console.log("change!");
// });
// user.events.trigger("change");

// const user = new User({ name: "MAGIC SHOW", age: 1000 });
// user.attributes.get('id')
// user.attributes.get('name')
// user.attributes.get('age')
// user.sync.save()
// // Before...
// user.save()

// const user = new User({ name: "MAGIC SHOW", age: 1000 });
// user.events.on("change", () => {
//   console.log("change!");
// });
// user.events.trigger("change");

// const user = new User({ name: "MAGIC SHOW", age: 1000 });
// user.save();
// const user = new User({ id: 1 });
// user.set({ name: "aaa", age: bbb });
// user.save();

// const user = new User({ id: 1 });
// user.fetch();
// setTimeout(() => {
//   console.log(user);
// }, 1000 * 4);

// axios.post("http://localhost:3000/users", {
//   name: "myname",
//   age: 20,
// });
// axios.get("http://localhost:3000/users");

// const user = new User({
//   name: "khc",
//   age: 32,
// });
// user.on("change", () => {
//   console.log("Change #1");
// });
// user.on("change", () => {
//   console.log("Change #2");
// });
// user.on("save", () => {
//   console.log("Save was triggered");
// });
// user.trigger("save");
