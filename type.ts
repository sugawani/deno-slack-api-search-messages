export type SearchMessagesType = {
  ok: boolean;
  query: string;
  messages: MessagesType;
};
export type PaginationType = {
  total_count: number;
  page: number;
  per_page: number;
  page_count: number;
  first: number;
  last: number;
};

export type PagingType = {
  count: number;
  total: number;
  page: number;
  pages: number;
};

export type MatchesType = {
  iid: number;
  team: string;
  score: number;
  channel: object;
  type: string;
  user: string;
  username: string;
  ts: string;
  attachments: any[];
  blocks: any[];
  text: string;
  permalink: string;
};
export type MessagesType = {
  total: number;
  pagination: PaginationType;
  paging: PagingType;
  matches: MatchesType[];
};
