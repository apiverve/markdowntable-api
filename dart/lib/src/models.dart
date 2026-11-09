/// Response models for the Markdown Table Generator API.

/// API Response wrapper.
class MarkdowntableResponse {
  final String status;
  final dynamic error;
  final MarkdowntableData? data;

  /// Set only when the current plan locks one or more fields; null otherwise.
  final PremiumInfo? premium;

  MarkdowntableResponse({
    required this.status,
    this.error,
    this.data,
    this.premium,
  });

  factory MarkdowntableResponse.fromJson(Map<String, dynamic> json) => MarkdowntableResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? MarkdowntableData.fromJson(json['data']) : null,
    premium: json['premium'] != null ? PremiumInfo.fromJson(json['premium']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
    if (premium != null) 'premium': premium!.toJson(),
  };
}

/// Describes fields the current plan does not unlock. Locked fields arrive as null
/// in [data], and [lockedFields] names them (nested ones use dot paths).
class PremiumInfo {
  final String? message;
  final String? upgradeUrl;
  final List<String>? lockedFields;

  PremiumInfo({this.message, this.upgradeUrl, this.lockedFields});

  factory PremiumInfo.fromJson(Map<String, dynamic> json) => PremiumInfo(
    message: json['message'] as String?,
    upgradeUrl: json['upgrade_url'] as String?,
    lockedFields: (json['locked_fields'] as List?)?.map((e) => e.toString()).toList(),
  );

  Map<String, dynamic> toJson() => {
    if (message != null) 'message': message,
    if (upgradeUrl != null) 'upgrade_url': upgradeUrl,
    if (lockedFields != null) 'locked_fields': lockedFields,
  };
}

/// Response data for the Markdown Table Generator API.

class MarkdowntableData {
  String? markdown;
  num? columnCount;
  num? rowCount;
  num? cellCount;
  List<String>? headers;
  List<String>? alignments;

  MarkdowntableData({
    this.markdown,
    this.columnCount,
    this.rowCount,
    this.cellCount,
    this.headers,
    this.alignments,
  });

  factory MarkdowntableData.fromJson(Map<String, dynamic> json) => MarkdowntableData(
      markdown: json['markdown'],
      columnCount: json['columnCount'],
      rowCount: json['rowCount'],
      cellCount: json['cellCount'],
      headers: (json['headers'] as List?)?.cast<String>(),
      alignments: (json['alignments'] as List?)?.cast<String>(),
    );
}

class MarkdowntableRequest {
  List<String> headers;
  List<List<String>> rows;
  String? alignment;

  MarkdowntableRequest({
    required this.headers,
    required this.rows,
    this.alignment,
  });

  Map<String, dynamic> toJson() => {
      'headers': headers,
      'rows': rows,
      if (alignment != null) 'alignment': alignment,
    };
}
