import MD5 from "crypto-js/md5";

const privateKey = process.env.PRIVATE_API_KEY;
const publicKey = "3b3e4103b52f7ba8dc299c831d4b55d6";
const hash = MD5(`1${privateKey}${publicKey}`);
const MARVEL_URI = "https://gateway.marvel.com/v1/public/characters";

export async function getCharacters() {
  try {
    const params = new URLSearchParams({
      ts: 1,
      apikey: publicKey,
      hash: hash.toString(),
      limit: 50,
      orderBy: "name",
    });
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?${params.toString()}`
    );
    const { data } = await response.json();
    return data.results;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

export async function getCharacterById(id) {
  try {
    const params = new URLSearchParams({
      ts: 1,
      apikey: publicKey,
      hash: hash.toString(),
    });
    if (id) {
      const response = await fetch(`${MARVEL_URI}/${id}?${params}`);
      const jsonResponse = await response.json();
      return jsonResponse.data
    } else {
      throw new Error("No ID provided");
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}
export async function getComicsOfCharacterById(id) {
  try {
    const params = new URLSearchParams({
      ts: 1,
      apikey: publicKey,
      hash: hash.toString(),
      limit: 20,
      orderBy: "onsaleDate",
    });
    if (id) {
      const response = await fetch(`${MARVEL_URI}/${id}/comics?${params}`);
      const jsonResponse = await response.json();
      return jsonResponse.data.results;
    } else {
      throw new Error("No ID provided");
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}
