
# Airtable Property Fetcher

This project is an Airtable API integration designed to fetch property data and render it as a carousel. It takes user inputs (API keys, table ID, etc.) and returns a carousel of properties that includes details like images, bedrooms, location, and budget. 

## Features
- Fetches data from an Airtable base using the Airtable API.
- Displays property information like bedrooms, location, budget, and type.
- Returns a user-friendly carousel with image, title, and description for each property.
- Gracefully handles errors during API fetch and input validation.

## Setup Instructions

### Prerequisites
- **Airtable API Key**: You must have an Airtable account and API key.
- **Table ID**: The ID of the table you want to fetch data from.

### Input Variables
To use the script, you'll need to provide the following:
- **airtablekey**: Your Airtable API key.
- **tableid**: The ID of the table that contains property data.

### Example Input:
```json
{
  "inputVars": {
    "airtablekey": "your_airtable_api_key",
    "tableid": "your_table_id"
  }
}
```

### Output Format:
- On success, a carousel of properties is returned.
- Each carousel card includes:
  - **Image**: URL to an image (or a placeholder if no image is available).
  - **Title**: Property bedrooms and location.
  - **Description**: Budget and type of the property.

### Error Handling:
- Missing input variables (`airtablekey` or `tableid`) will result in an error response.
- Fetch errors from Airtable, such as invalid API key or table ID, will be caught and returned with a relevant message.

### Example Error Response:
```json
{
  "next": {
    "path": "error"
  },
  "trace": [
    {
      "type": "debug",
      "payload": {
        "message": "Error fetching data: HTTP error! Status: 404"
      }
    }
  ]
}
```

### Success Response:
On successful data fetch, the response includes a carousel with property cards:
```json
{
  "next": {
    "path": "success"
  },
  "trace": [
    {
      "type": "carousel",
      "payload": {
        "cards": [
          {
            "imageUrl": "https://via.placeholder.com/150",
            "title": "2 Bedroom - Downtown",
            "description": {
              "text": "Budget: AED 2000 - Type: Apartment"
            }
          },
        ]
      }
    }
  ]
}
```

## How It Works

1. The script accepts the user's Airtable API key and table ID.
2. It constructs a URL to fetch records from the provided Airtable base.
3. The records are fetched, validated, and parsed.
4. The script filters and formats the property data into carousel items.
5. The result is a JSON response with carousel cards.

## Error Handling
The script captures and returns specific error messages in case:
- Missing input variables like `airtablekey` or `tableid`.
- API errors such as invalid credentials or unavailable resources.

## Contributing
Contributions to this project are welcome. Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
