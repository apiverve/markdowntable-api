using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.MarkdownTableGenerator
{
    /// <summary>
    /// Query options for the Markdown Table Generator API
    /// </summary>
    public class MarkdownTableGeneratorQueryOptions
    {
        /// <summary>
        /// Array of column header names
        /// </summary>
        [JsonProperty("headers")]
        public string Headers { get; set; }

        /// <summary>
        /// Array of row arrays containing cell values
        /// </summary>
        [JsonProperty("rows")]
        public string Rows { get; set; }

        /// <summary>
        /// Column alignment: left, center, right, or array of alignments per column
        /// </summary>
        [JsonProperty("alignment")]
        public string Alignment { get; set; }
    }
}
