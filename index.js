// Write your code here!

// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);



const element = document.getElementById("main")
element.remove();

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Noela is the champion"
body.append(newHeader);
