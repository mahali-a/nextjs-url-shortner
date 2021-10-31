export default function generateRandomString(len: number = 6): string {
  var p = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789";
  return [...Array(len)]
    .reduce((a) => a + p[~~(Math.random() * p.length)], "")
    .toLowerCase();
}
