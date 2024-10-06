export default async function main(args) {
    const { airtablekey, tableid } = args.inputVars;

    // Check if required input variables are provided
    if (!airtablekey || !tableid) {
        return {
            next: { path: 'error' },
            trace: [
                {
                    type: "debug",
                    payload: { message: "Missing required input variable: airtablekey or tableid" }
                }
            ]
        };
    }

    // Construct the Airtable API URL
    const url = "https://api.airtable.com/v0/" + tableid;

    // Configuration for the API request
    const config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + airtablekey,
        }
    };

    try {
        // Fetch data from the Airtable API
        const response = await fetch(url, config);

        // Handle unsuccessful response
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response body
        const responseBody = await response.json;

        // Validate the response body
        if (!responseBody || typeof responseBody !== 'object') {
            throw new Error("Invalid or missing response body from the API");
        }

        // Extract the records from the response body
        const records = responseBody.records;

        // Create an array to hold the properties for each record
        let properties = [];
        for (const record of records) {
            properties.push(record.fields);
        }

        // Generate carousel items
        const carouselItems = properties.map(property => ({
            imageUrl: property.image || 'https://via.placeholder.com/150', // Use placeholder if no image is provided
            title: `${property.bedrooms || 'Unknown'} Bedroom - ${property.location || 'Unknown Location'}`,
            description: {
                text: `Budget: ${property.budget || 'N/A'} - Type: ${property.type || 'N/A'}` // Use object for description
            }
        }));

        // Return the generated carousel items
        return {
            next: { path: 'success' },
            trace: [
                {
                    type: "carousel",
                    payload: {
                        cards: carouselItems
                    }
                }
            ]
        };

    } catch (error) {
        // Handle any errors during API fetch
        return {
            next: { path: 'error' },
            trace: [
                {
                    type: "debug",
                    payload: { message: `Error fetching data: ${error.message}` }
                }
            ]
        };
    }
}
