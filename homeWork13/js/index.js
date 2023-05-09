"use strick";

//практическое занятие с урока

// // fetch("https://jsonplaceholder.typicode.com/comments")
// //   .then((Response) => Response.json())
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err))
// //   .finally(() => console.log("finnaly block"));

// const GetInfoAboutUser = async (name) => {
//   try {
//     const result = await fetch(`https://api.github.com/users/${name}`);
//     if (!result.ok) {
//       throw result;
//     }
//     const data = await result.json();
//     console.log(data);
//   } catch (error) {
//     if (error.status === 404) {
//       console.error("User not found");
//     } else {
//       console.log("Uwu");
//     }
//   }
// };

// GetInfoAboutUser("MyroslavKop");
// GetInfoAboutUser("sergei97k");
// GetInfoAboutUser("RakMikhail");
// GetInfoAboutUser("RakMikhai1l");

//Домашнее задание

function find(nameOfCOmpany, array) {
  array.forEach((element) => {
    if (element.company.name === nameOfCOmpany) {
      console.log(element);
    }
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    find("Johns Group", data);

    // data.forEach((element) => {
    //   if (element.company.name === "Johns Group") {
    //     console.log(element);
    //   }
    //});
  })
  .catch((err) => console.error(err));
