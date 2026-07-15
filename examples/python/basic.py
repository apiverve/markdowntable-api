"""
Markdown Table Generator API - Basic Usage Example

This example demonstrates the basic usage of the Markdown Table Generator API.
API Documentation: https://docs.apiverve.com/ref/markdowntable
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/markdowntable'

def call_markdowntable_api():
    """
    Make a POST request to the Markdown Table Generator API
    """
    try:
        # Request body
        request_body &#x3D; {
    &#x27;headers&#x27;: [
        &#x27;Name&#x27;,
        &#x27;Age&#x27;,
        &#x27;City&#x27;
    ],
    &#x27;rows&#x27;: [
        [
            &#x27;John Doe&#x27;,
            30,
            &#x27;New York&#x27;
        ],
        [
            &#x27;Jane Smith&#x27;,
            25,
            &#x27;Los Angeles&#x27;
        ],
        [
            &#x27;Bob Johnson&#x27;,
            35,
            &#x27;Chicago&#x27;
        ]
    ],
    &#x27;alignment&#x27;: &#x27;left&#x27;
}

        headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }

        response = requests.post(API_URL, headers=headers, json=request_body)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Markdown Table Generator API...\n')

    result = call_markdowntable_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
