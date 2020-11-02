// type alias 
type Uid = number | string | undefined;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
};

function logInfo(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
};

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform("Mac Os")

logDetails(123, "sapato");
logDetails("123", "sapato");

logDetails(123, "Willian");
logDetails("123", "Willian");