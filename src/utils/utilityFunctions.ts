export function transformToSnakeCase(text: string) {
  if (text) {
    const words = text.split(" ");
    const transformedWords = words.map((word) => word.toLowerCase());
    return transformedWords.join("-");
  }
}
