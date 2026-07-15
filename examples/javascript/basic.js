/**
 * Markdown Table Generator API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the Markdown Table Generator API.
 * API Documentation: https://docs.apiverve.com/ref/markdowntable
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/markdowntable';

/**
 * Make a POST request to the Markdown Table Generator API
 */
async function callMarkdownTableGeneratorAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;headers&quot;: [
        &quot;Name&quot;,
        &quot;Age&quot;,
        &quot;City&quot;
    ],
    &quot;rows&quot;: [
        [
            &quot;John Doe&quot;,
            30,
            &quot;New York&quot;
        ],
        [
            &quot;Jane Smith&quot;,
            25,
            &quot;Los Angeles&quot;
        ],
        [
            &quot;Bob Johnson&quot;,
            35,
            &quot;Chicago&quot;
        ]
    ],
    &quot;alignment&quot;: &quot;left&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callMarkdownTableGeneratorAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
