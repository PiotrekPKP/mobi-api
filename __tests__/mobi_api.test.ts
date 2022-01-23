import MobiApi from "../src/MobiApi";
import "dotenv/config";

test("Developement", async () => {
  const mobiApi = new MobiApi(process.env.TEST_API_URL ?? "");
  await mobiApi.signIn(
    process.env.TEST_EMAIL ?? "",
    process.env.TEST_PASSWORD ?? ""
  );

  expect(true).toBe(true);
});
