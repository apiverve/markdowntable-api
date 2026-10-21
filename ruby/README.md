# Markdown Table Generator API - Ruby Gem

Markdown Table Generator converts structured data into properly formatted markdown tables with customizable column alignment.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_markdowntable'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_markdowntable
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_markdowntable'

# Initialize the client
client = APIVerve::Markdowntable::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  headers: Name,Age,City,
  rows: John Doe,30,New York,Jane Smith,25,Los Angeles,Bob Johnson,35,Chicago,
  alignment: "left"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ headers: Name,Age,City, rows: John Doe,30,New York,Jane Smith,25,Los Angeles,Bob Johnson,35,Chicago, alignment: "left" })
  puts response["data"]
rescue APIVerve::Markdowntable::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Markdowntable::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Markdowntable::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/markdowntable?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/markdowntable?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/markdowntable?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
