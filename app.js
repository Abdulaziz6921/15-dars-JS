// let instagramBase = [
//   {
//     username: "john32",
//     password: "as1d3a1sd32d",
//     bio: "lorem ipsum dolor",
//     followers: ["leomessi", "ronaldo"],
//     following: ["mamarayim", "qutbiddin"],
//     post: [
//       {
//         url: "https://asdlkajsdlkjasd.jpg",
//         likeCount: ["mamarayim"],
//         comments: [
//           {
//             username: "mamarayim shu ism chiqsin",
//             message: "olopsan 👍👍👍",
//             time: "2022.07.02 21:00",
//           },
//           {
//             username: "qutbiddin",
//             message: "qalaysan do'st",
//             time: "2022.07.02 21:00",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     username: "mike45",
//     password: "as1d3a1sd32d",
//     bio: "lorem ipsum dolor",
//     followers: ["leomessi", "ronaldo"],
//     following: ["mamarayim", "qutbiddin"],
//     post: [
//       {
//         url: "https://asdlkajsdlkjasd.jpg",
//         likeCount: ["mamarayim"],
//         comments: [
//           {
//             username: "mamarayim",
//             message: "olopsan 👍👍👍",
//             time: "2022.07.02 21:00",
//           },
//           {
//             username: "qutbiddin",
//             message: "qalaysan do'st",
//             time: "2022.07.02 21:00",
//             location: {
//               lat: ["32.123", "14.45"],
//               lut: [
//                 "54.565",
//                 "54.655",
//                 {
//                   nickname: "Final result",
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
// ];

// console.log(instagramBase[1].post[0].comments[1].location.lut[2].nickname);

let ages = [200, 400, 500, 500];
let Sort = ages.reduce((a, b) => a + b, 100);

console.log(Sort);

// OOP
let myObject = {
  Name: "Abror",
  Age: 40,
  MotherAge: 70,
  getName() {
    console.log(
      "Ismi " +
        this.Name +
        ", yoshi " +
        this.Age +
        ", onasini yoshi " +
        this.MotherAge
    );
  },
};
myObject.getName();
