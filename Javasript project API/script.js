document.getElementById('images');
// document.getElementById('list');
// document.getElementTagName("tr");
const url = 'https://some-random-apis.herokuapp.com/images/';

function random(event) {

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.data.map(element => {
        console.log(element)
        var image = `${element.imagePath}`
        console.log(image)
        // var text = `${element.name}`
        var imagesData = images.innerHTML = `<img src="${url}${image}"/>`
        console.log(imagesData)
        // list.innerHTML = text;

      });
    });

}


function refresh() {
  document.getElementById('images').innerHTML = "";
}



fetch(url)
  .then(response => response.json())
  .then((data) => {
    var temp = "";
    data.data.forEach(element => {
      // console.log(element);

      // temp +=`<td>${element.index}</td>`;
      temp += `<li onclick="random()">${element.name}</li>`;

    });
    document.getElementById('dataTable').innerHTML = temp;

  });
