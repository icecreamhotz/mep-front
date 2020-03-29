import React, { useState } from "react";
// import "./App.scss";
// import Input from "./components/Input";
// import { List } from "antd";
// import { connect } from "react-redux";
// import { ApplicationState } from "./store";
// import { ADD, REMOVE } from "./store/todo-lists/actions";
// import { TodoLists } from "./store/todo-lists/types";

// import "antd/dist/antd.css";

// // Separate state props + dispatch props to their own interfaces.
// interface PropsFromState {
//   lists: TodoLists[];
// }

// // We can use `typeof` here to map our dispatch types to the props, like so.
// interface PropsFromDispatch {
//   addTodoList: typeof ADD;
//   removeTodoList: typeof REMOVE;
// }

// // Combine both state + dispatch props - as well as any props we want to pass - in a union type.
// type AllProps = PropsFromState & PropsFromDispatch;

// const App: React.FC<AllProps> = (props: AllProps) => {
//   const [value, setValue] = useState<string>("");

//   return (
//     <>
//       <div className="mep-container">
//         <Input
//           value={value}
//           onChange={e => setValue(e.target.value)}
//           onKeyDown={e => {
//             if (e.key === "Enter") {
//               props.addTodoList(value);
//             }
//           }}
//         />
//         <List
//           size="large"
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={props.lists}
//           renderItem={(item, index) => (
//             <List.Item>
//               {item}
//               <div
//                 onClick={() =>
//                   props.removeTodoList(
//                     props.lists.filter((_, idx) => idx !== index)
//                   )
//                 }
//               >
//                 Remove
//               </div>
//             </List.Item>
//           )}
//         />
//       </div>
//     </>
//   );
// };

// const mapStateToProps = (state: ApplicationState) => ({
//   lists: state.todolists.list
// });

// const mapDispatchToProps = {
//   addTodoList: ADD,
//   removeTodoList: REMOVE
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
