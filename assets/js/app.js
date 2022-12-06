var chemArray =
  [
    { name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { name: 'Helium', weight: 4.0026, symbol: 'He' },
    { name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { name: 'Boron', weight: 10.811, symbol: 'B' },
    { name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

var res = '';
chemArray.forEach(function (chem, i) {
  res += `
      <tr class='bg-info'>
      <td> ${(i + 1)} </td>
      <td> ${chem.name}</td>
      <td> ${chem.weight}</td>
      <td> ${chem.symbol}</td>
      </tr>
    `;
})
var chemData = document.getElementById("chemData");

chemData.innerHTML = res;


var book = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

var res1 = '';
book.forEach(function (bk, i) {
  res1 += `
    <tr class='bg-success'>
    <td>${(i + 1)} </td>
    <td>${bk.author}</td>
    <td>${bk.title}</td>
    <td>${bk.libraryID}</td>
    </tr>
  `;
})

var bookInfo = document.getElementById("bookInfo");
bookInfo.innerHTML = res1;


var country = [
  {
    name: "USA",
    population: 331002651,
    area: 9833520,
    capital: "Washington, D.C.",
    language: "English"
  },
  {
    name: "Canada",
    population: 37411047,
    area: 9984670,
    capital: "Ottawa",
    language: "English and French"
  },
  {
    name: "Mexico",
    population: 127575529,
    area: 1964375,
    capital: "Mexico City",
    language: "Spanish"
  },
  {
    name: "France",
    population: 66710000,
    area: 640679,
    capital: "Paris",
    language: "French"
  },
  {
    name: "Germany",
    population: 82790000,
    area: 357114,
    capital: "Berlin",
    language: "German"
  }
];
var cntryinfo = '';
country.forEach(function (countryData, i) {
  cntryinfo += `<tr class="bg-warning">
         <td> ${(i + 1)}</td>
         <td> ${countryData.name}</td>
        <td> ${countryData.population}</td>
         <td> ${countryData.area}</td>
         <td> ${countryData.capital}</td>
         <td> ${countryData.language}</td>
         </tr>
    `;
});   

var countryInfo = document.getElementById('countryInfo');
countryInfo.innerHTML = cntryinfo;

var mobInfo = [
  { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
  { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
  { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
  { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
  { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
];

var phn = "";
mobInfo.forEach(function(brands,i){
  phn += `
      <tr class="bg-success">
      <td> ${(i+1)}</td>
      <td> ${brands.name}</td>
      <td> ${brands.price}</td>
      <td> ${brands.color}</td>
      <td> ${brands.storage}</td>
      <td> ${brands.camera}</td>
      </tr>
  `;
})

var mobData = document.getElementById("mobData");
mobData.innerHTML = phn;
