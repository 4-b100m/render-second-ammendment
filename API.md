# API Documentation

## Overview

The RenderOSArms API provides programmatic access to the model repository, search functionality, and 3D visualization capabilities.

## Base URL

```
Production: https://renderosarms.com/api
Development: http://localhost:3000/api
```

## Authentication

Currently, the API is read-only and does not require authentication. Future versions will support:
- API keys for rate limiting
- OAuth2 for user-specific operations
- JWT tokens for session management

## Endpoints

### Models

#### List All Models

```http
GET /api/models
```

**Query Parameters:**
- `page` (integer, optional) - Page number (default: 1)
- `limit` (integer, optional) - Items per page (default: 10, max: 100)
- `sort` (string, optional) - Sort field (datetime, location)
- `order` (string, optional) - Sort order (asc, desc)

**Response:**
```json
{
  "data": [
    {
      "location": "Pistols_and_Subs/Glock/FMDA_G17_Gen_3_DIY_V1.0",
      "datetime": "2025-10-17T22:18:20.561Z",
      "tags": ["Pistols", "Glock", "G17"],
      "readme": "path/to/README.md",
      "renders": ["path/to/render1.png", "path/to/render2.png"]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 250,
    "pages": 25
  }
}
```

#### Search Models

```http
GET /api/models/search
```

**Query Parameters:**
- `q` (string, required) - Search query
- `field` (string, optional) - Search field (location, tags, all)
- `page` (integer, optional) - Page number
- `limit` (integer, optional) - Items per page

**Response:** Same format as List All Models

#### Get Model Details

```http
GET /api/models/:location
```

**Path Parameters:**
- `location` (string) - URL-encoded model location

**Response:**
```json
{
  "location": "Pistols_and_Subs/Glock/FMDA_G17_Gen_3_DIY_V1.0",
  "datetime": "2025-10-17T22:18:20.561Z",
  "tags": ["Pistols", "Glock", "G17"],
  "readme": "Full README content...",
  "renders": ["url/to/render1.png"],
  "stl_files": ["url/to/model.stl"],
  "step_files": ["url/to/model.step"],
  "metadata": {
    "version": "1.0",
    "author": "FMDA",
    "license": "Open Source"
  }
}
```

#### Get Model Files

```http
GET /api/models/:location/files
```

**Query Parameters:**
- `type` (string, optional) - File type filter (stl, step, render, all)

**Response:**
```json
{
  "stl": ["url/to/file1.stl", "url/to/file2.stl"],
  "step": ["url/to/file1.step"],
  "renders": ["url/to/render1.png"],
  "readme": "url/to/README.md"
}
```

### 3D Viewer

#### Load Model

```http
GET /api/viewer/load/:location
```

**Query Parameters:**
- `format` (string, optional) - File format (stl, step)
- `quality` (string, optional) - Render quality (low, medium, high)

**Response:**
```json
{
  "model_url": "url/to/model.stl",
  "preview_url": "url/to/preview.png",
  "parts": [
    {
      "id": "part1",
      "name": "Frame",
      "file": "url/to/part1.stl"
    }
  ]
}
```

### Tags

#### List All Tags

```http
GET /api/tags
```

**Response:**
```json
{
  "tags": [
    {
      "name": "Pistols",
      "count": 45
    },
    {
      "name": "Glock",
      "count": 23
    }
  ]
}
```

#### Get Models by Tag

```http
GET /api/tags/:tagName/models
```

**Response:** Same format as List All Models

### Categories

#### List Categories

```http
GET /api/categories
```

**Response:**
```json
{
  "categories": [
    {
      "name": "Pistols_and_Subs",
      "count": 67,
      "subcategories": ["Glock", "Misc"]
    },
    {
      "name": "Rifles",
      "count": 34,
      "subcategories": ["AR-15", "AK-47"]
    }
  ]
}
```

### AI Agent Interface

#### Query Models

```http
POST /api/ai/query
```

**Request Body:**
```json
{
  "query": "Show me Glock models suitable for beginners",
  "context": {
    "user_level": "beginner",
    "preferences": ["compact", "9mm"]
  }
}
```

**Response:**
```json
{
  "intent": "model_recommendation",
  "results": [
    {
      "model": "Pistols_and_Subs/Glock/FMDA_G19_Gen3_DIY_V1.0",
      "relevance_score": 0.95,
      "reason": "Compact 9mm design, well-documented for beginners"
    }
  ],
  "conversation": {
    "response": "I found several Glock models that would be great for beginners...",
    "follow_up_questions": [
      "Would you like to see the assembly instructions?",
      "Are you interested in customization options?"
    ]
  }
}
```

### Validation

#### Validate Model

```http
POST /api/validate/:location
```

**Response:**
```json
{
  "status": "passed",
  "checks": {
    "structural_integrity": {
      "passed": true,
      "score": 95,
      "notes": "All stress points within acceptable ranges"
    },
    "safety": {
      "passed": true,
      "warnings": []
    },
    "quality": {
      "score": 88,
      "recommendations": ["Add more detail to trigger guard"]
    }
  }
}
```

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      "field": "Additional context"
    }
  }
}
```

### Error Codes

- `400` - Bad Request - Invalid parameters
- `404` - Not Found - Resource doesn't exist
- `429` - Too Many Requests - Rate limit exceeded
- `500` - Internal Server Error - Server error

## Rate Limiting

- Anonymous: 100 requests per hour
- Authenticated: 1000 requests per hour

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1634567890
```

## Webhooks (Future)

Subscribe to events:
- New model added
- Model updated
- Validation completed

## SDK Libraries (Future)

- JavaScript/TypeScript
- Python
- Go
- Rust

## Versioning

API version is specified in the URL:
```
/api/v1/models
/api/v2/models
```

Current version: v1 (default)

## Support

- Documentation: https://renderosarms.com/docs
- Issues: https://github.com/4-b100m/renderOSArms/issues
- Community: https://renderosarms.com/community
