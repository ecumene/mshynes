import { Client } from "@notionhq/client";

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

const pages = await notion.databases.query({
  database_id: import.meta.env.NOTION_DB,
});

export default notion;
