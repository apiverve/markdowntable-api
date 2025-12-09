declare module '@apiverve/markdowntable' {
  export interface markdowntableOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface markdowntableResponse {
    status: string;
    error: string | null;
    data: MarkdownTableGeneratorData;
    code?: number;
  }


  interface MarkdownTableGeneratorData {
      markdown:    string;
      columnCount: number;
      rowCount:    number;
      cellCount:   number;
      headers:     string[];
      alignments:  string[];
  }

  export default class markdowntableWrapper {
    constructor(options: markdowntableOptions);

    execute(callback: (error: any, data: markdowntableResponse | null) => void): Promise<markdowntableResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: markdowntableResponse | null) => void): Promise<markdowntableResponse>;
    execute(query?: Record<string, any>): Promise<markdowntableResponse>;
  }
}
