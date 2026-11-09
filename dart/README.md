# Markdown Table Generator API - Dart/Flutter Client

Markdown Table Generator converts structured data into properly formatted markdown tables with customizable column alignment.

[![pub package](https://img.shields.io/pub/v/apiverve_markdowntable.svg)](https://pub.dev/packages/apiverve_markdowntable)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Markdown Table Generator API](https://apiverve.com/marketplace/markdowntable?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_markdowntable: ^1.2.5
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_markdowntable/apiverve_markdowntable.dart';

void main() async {
  final client = MarkdowntableClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'headers': Name,Age,City,
      'rows': John Doe,30,New York,Jane Smith,25,Los Angeles,Bob Johnson,35,Chicago,
      'alignment': 'left'
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Markdown Table Generator API](https://apiverve.com/marketplace/markdowntable?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/markdowntable](https://docs.apiverve.com/ref/markdowntable?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
