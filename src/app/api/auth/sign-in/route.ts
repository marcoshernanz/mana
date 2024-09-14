export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.username) {
      throw new Error("Username is required");
    } else if (!response.password) {
      throw new Error("Password is required");
    }

    return new Response("");
  } catch (error) {}
}
