
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