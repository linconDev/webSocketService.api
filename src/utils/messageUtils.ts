export function parseMessage(data: string): any {
  try {
      return JSON.parse(data);
  } catch (err) {
      return null;
  }
}
