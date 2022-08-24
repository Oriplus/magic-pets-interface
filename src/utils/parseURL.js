export default function ParseURL(url) {
  return url.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
}