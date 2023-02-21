import { SlackAPI } from "https://deno.land/x/deno_slack_api@0.0.8/mod.ts";
import { load } from "https://deno.land/std@0.177.0/dotenv/mod.ts";
import { MatchesType, SearchMessagesType } from "./type.ts";

// enter slack search query
const searchQuery = "has::today_i_learned: before:2023-02-01 after:2022-12-31";
const env = await load();
const token = env["TOKEN"];
console.log(token);
if (!token) {
  throw new Error("environment token is not set");
}

const getMessages = (
  token: string,
  query: string,
  page = 1,
) => {
  const client = SlackAPI(token);

  return client.apiCall("search.messages", {
    query: query,
    page: page,
    count: 100,
  }) as Promise<SearchMessagesType>;
};

const metaData = await getMessages(token, searchQuery);
const pageNumbers = [...Array(metaData.messages.pagination.page_count).keys()];
const results = await Promise.all(
  pageNumbers.map(async (page: number) =>
    await getMessages(token, searchQuery, page)
  ),
);

const textDir = "slack_log.txt";
results.forEach((searchMessage: SearchMessagesType) => {
  searchMessage.messages.matches.forEach((message: MatchesType) => {
    Deno.writeTextFileSync(
      textDir,
      `"${message.text}"\t${message.permalink}\n`,
      { append: true, create: true },
    );
  });
});
