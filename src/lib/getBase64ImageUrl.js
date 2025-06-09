export async function getBase64ImageUrl(imageUrl) {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  
  const mime = imageUrl.endsWith(".png")
    ? "image/png"
    : imageUrl.endsWith(".webp")
    ? "image/webp"
    : "image/jpeg"; // default

  return `data:${mime};base64,${base64}`;
}
