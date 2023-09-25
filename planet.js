const planets =
 [{id:1, name:'Mercury'},
{id:2, name:'Venus'},
{id:3, name:'Earth'},
{id:4, name:'Mars'}];
function getPlanetIdByName(planetName) 
{
    const planet = planets.find(planet => planet.name === planetName);
    return planet ? planet.id : 'Planet not found';
}
const planetNameToFind = 'Mars';
const planetId = getPlanetIdByName(planetNameToFind);
console.log(`The ID of ${planetNameToFind} is ${planetId}`);
