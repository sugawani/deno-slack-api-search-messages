# 使い方

1. Deno をインストールする(Docker でもよい)
1. `cp .env.example .env`
1. スコープに `search:read` を設定した Slack App を作成し、トークンを控えておく
1. `.env` にトークンを設定
1. `slack.ts` の `seachQuery` にお好みの検索条件を設定(slack で検索する時と同じクエリ)
1. `deno run --allow-net --allow-write --allow-read --allow-env slack.ts` を実行🚀
1. `slack_log.txt` に結果が出力されますお🐔

# その他

出力される値は `${message}\t${permalink}` になってるので、使い方に応じて変更するヨロシ🍜
