export async function load({ url }) {
    const personResponse = await fetch("https://fdnd.directus.app/items/person/168");
    const personData = await personResponse.json();
    console.log(personData)

    return { person: personData.data };
}