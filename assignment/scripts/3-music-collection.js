
const collection=[];
function addToCollection (title, artist, yearPublished){
    const obj = {title, artist, yearPublished}
    collection.push(obj);
    return obj
}
console.log ('ok');

const albumOne = addToCollection('Mariah Carey', 'Mariah Carey', 1991);
console.log('new album', albumOne);

const albumTwo = addToCollection('The Bodyguard', 'Whitney Houston', 1993);
console.log('new album', albumTwo);

const albumThree = addToCollection('The Lion King', ' Elton John', 1994);
console.log('new album', albumThree);

const albumFour = addToCollection(' Cracked Rearview', 'Hootie & the Blowfish', 1995);
console.log('new album', albumFour);

const albumFive = addToCollection(' Some Brave All', 'Billy Ray Cyrus', 1992);
console.log('new album', albumFive);

const albumSix = addToCollection('Jagged Little Pill', 'Alanis Morissette', 1996);
console.log('new album', albumSix)

console.log( [collection] )

function showCollection (array){
    for (let index = 0; index < array.length; index++){
        const title = array [index];
        const artist = array [index];
        const yearPublished = array [index];
    console.log( title, artist, yearPublished);
    }
}
showCollection(collection);

function findByArtist (string){
    let results = [];
    for (let index = 0; index < string.length; index++){
        const title = string [index];
        const artist = string [index];
        const yearPublished = string [index];
        return results
    }
}
console.log(findByArtist['offspring']);




