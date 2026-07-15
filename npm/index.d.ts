declare module '@apiverve/markdowntable' {
  export interface markdowntableOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface markdowntableResponse {
    status: string;
    error: string | null;
    data: MarkdownTableGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface MarkdownTableGeneratorData {
      markdown:    null | string;
      columnCount: number | null;
      rowCount:    number | null;
      cellCount:   number | null;
      headers:     (null | string)[];
      alignments:  (null | string)[];
  }

  export default class markdowntableWrapper {
    constructor(options: markdowntableOptions);

    execute(callback: (error: any, data: markdowntableResponse | null) => void): Promise<markdowntableResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: markdowntableResponse | null) => void): Promise<markdowntableResponse>;
    execute(query?: Record<string, any>): Promise<markdowntableResponse>;
  }
}
