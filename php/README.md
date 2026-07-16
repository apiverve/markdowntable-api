# Markdown Table Generator API - PHP Package

Markdown Table Generator converts structured data into properly formatted markdown tables with customizable column alignment.

## Installation

Install via Composer:

```bash
composer require apiverve/markdowntable
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Markdowntable\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'headers' => Name,Age,City,
    'rows' => John Doe,30,New York,Jane Smith,25,Los Angeles,Bob Johnson,35,Chicago,
    'alignment' => 'left'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Markdowntable\Client;
use APIVerve\Markdowntable\Exceptions\APIException;
use APIVerve\Markdowntable\Exceptions\ValidationException;

try {
    $response = $client->execute(['headers' => Name,Age,City, 'rows' => John Doe,30,New York,Jane Smith,25,Los Angeles,Bob Johnson,35,Chicago, 'alignment' => 'left']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "markdown": "| Name | Age | City |\n| --- | --- | --- |\n| John Doe | 30 | New York |\n| Jane Smith | 25 | Los Angeles |\n| Bob Johnson | 35 | Chicago |",
    "columnCount": 3,
    "rowCount": 3,
    "cellCount": 12,
    "headers": [
      "Name",
      "Age",
      "City"
    ],
    "alignments": [
      "left",
      "left",
      "left"
    ]
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/markdowntable?utm_source=packagist&utm_medium=readme).

## Support

- Website: [https://apiverve.com/marketplace/markdowntable?utm_source=php&utm_medium=readme](https://apiverve.com/marketplace/markdowntable?utm_source=php&utm_medium=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
