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
        /// Example: ["Name", "Age", "City"]
        /// </summary>
        [JsonProperty("headers")]
        public string Headers { get; set; }

        /// <summary>
        /// Array of row arrays containing cell values
        /// Example: [["John", 30, "NYC"], ["Jane", 25, "LA"]]
        /// </summary>
        [JsonProperty("rows")]
        public string Rows { get; set; }

        /// <summary>
        /// Column alignment: left, center, right, or array of alignments per column
        /// Example: left
        /// </summary>
        [JsonProperty("alignment")]
        public string Alignment { get; set; }
    }
}
