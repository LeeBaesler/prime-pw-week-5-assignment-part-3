
const collection=[];
function addToCollection (title, artist, yearPublished){
    let obj = (title, artist, yearPubished)
    obj.push(title, artist, yearPublished);
    return obj;
}
console.log ('ok');

let artistOne = {
    title: 'Mariah Carey',
    artist: 'Mariah Carey',
    yearPublished: 1991

}
collection.push(artistOne);
console.log (artistOne);

let artistTwo = {
    title: 'The Bodyguard',
    artist: 'Whitney Houston',
    yearPublished: 1992
}
collection.push(artistTwo);
console.log(artistTwo);

let artistThree = {
    title: 'The Lion King',
    artist: 'Elton John',
    yearPubsished: 1993
}
collection.push(artistThree);
console.log(artistThree);

let artistFour = {
    title: 'Some Gave All',
    artist: 'Billy Ray Cyrus',
    yearPublished: 1994
}
collection.push(artistFour);
console.log(artistFour);

let artistFive = {
    title: 'Cracked Rearview',
    artist: 'Hootie & the Blowfish',
    yearPublished: 1995
}
collection.push(artistFive);
console.log(artistFive);

let artistSix = {
    title: 'Jagged Little Pill',
    artist: 'Alanis Morissette',
    yearPublished: 1996
}
collection.push(artistFive);
console.log(artistSix);

console.log(collection)