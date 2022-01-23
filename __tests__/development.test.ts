import MobiApi from "../src/MobiApi";
import "dotenv/config";

test("Development", async () => {
  const mobiApi = new MobiApi(process.env.TEST_API_URL ?? "");
  await mobiApi.signIn(
    process.env.TEST_EMAIL ?? "",
    process.env.TEST_PASSWORD ?? ""
  );

  const messages = await mobiApi.getRecievedMessages();
  console.log(messages);

  expect(true).toBe(true);
});
