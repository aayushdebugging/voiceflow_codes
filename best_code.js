export default async function main(args) {
    // Extract input variables
    const { inputVars } = args;

    // Validate if the necessary input variables exist
    if (!inputVars || !inputVars.housetype || !inputVars.proptype || !inputVars.intent) {
        return {
            next: { path: 'error' },
            trace: [
                {
                    type: "text",
                    payload: { message: "Missing required inputs: housetype, proptype, or intent." }
                }
            ]
        };
    }

    // Sample property data with the new structure
    const properties = {
        rows: [
            {
                Intent: "Rent",
                PropType: "Apartment",
                HouseType: "1BHK",
                R_Budget: "60k",
                B_Budget: "50 Lac",
                Prop_Specs: "Furnished, 600 sq ft, 1 car parking, 2nd floor, Garden view",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/W4PMmRpC3KDRYzZo0SzLmbuQZBxiDpY3mjl-z-aeugWhatsApp%2520Image%25202024-10-01%2520at%252001.25.38.jpeg"
            },
            {
                Intent: "Buy",
                PropType: "Apartment",
                HouseType: "3BHK",
                R_Budget: "1 Lac",
                B_Budget: "4 Crores",
                Prop_Specs: "Fully furnished, 1400 sq ft, 2 car parking, 2nd floor, Prime area",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/W4PMmRpC3KDRYzZo0SzLmbuQZBxiDpY3mjl-z-aeugWhatsApp%2520Image%25202024-10-01%2520at%252001.25.38.jpeg"
            },
            {
                Intent: "Rent",
                PropType: "Penthouse",
                HouseType: "4BHK",
                R_Budget: "2.5 Lac",
                B_Budget: "6 Crores",
                Prop_Specs: "Furnished, 2400 sq ft, 2 car parking, Penthouse level, Rooftop terrace",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/W4PMmRpC3KDRYzZo0SzLmbuQZBxiDpY3mjl-z-aeugWhatsApp%2520Image%25202024-10-01%2520at%252001.25.38.jpeg"
            },
            {
                Intent: "Buy",
                PropType: "Townhouse",
                HouseType: "2 Rooms",
                R_Budget: "1.5 Lac",
                B_Budget: "4 Crores",
                Prop_Specs: "Unfurnished, 1400 sq ft, 1 car parking, Ground floor, Private terrace",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/cgxziDf5FUCj3CeJG07mHIjdx3cYhgBWNL1zKiUO6yWhatsApp%2520Image%25202024-10-01%2520at%252001.26.32.jpeg"
            },
            {
                Intent: "Buy",
                PropType: "Penthouse",
                HouseType: "4BHK",
                R_Budget: "2.5 Lac",
                B_Budget: "6 Crores",
                Prop_Specs: "Semi-furnished, 2200 sq ft, 2 car garage, Rooftop access, Luxury interior",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/y32luly_gOUC1NTw_CCnOwL09eSShrpD57nvKa8T0LWhatsApp%2520Image%25202024-10-01%2520at%252001.27.48.jpeg"
            },
            {
                Intent: "Rent",
                PropType: "Apartment",
                HouseType: "1BHK",
                R_Budget: "40k",
                B_Budget: "50 Lac",
                Prop_Specs: "Furnished, 600 sq ft, 1 car parking, 1st floor, City center",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/cgxziDf5FUCj3CeJG07mHIjdx3cYhgBWNL1zKiUO6yWhatsApp%2520Image%25202024-10-01%2520at%252001.26.32.jpeg"
            },
            {
                Intent: "Buy",
                PropType: "Penthouse",
                HouseType: "3BHK",
                R_Budget: "1 Lac",
                B_Budget: "6 Crores",
                Prop_Specs: "Semi-furnished, 1800 sq ft, 2 car parking, Penthouse level, Rooftop access",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/cgxziDf5FUCj3CeJG07mHIjdx3cYhgBWNL1zKiUO6yWhatsApp%2520Image%25202024-10-01%2520at%252001.26.32.jpeg"
            },
            {
                Intent: "Rent",
                PropType: "Villa",
                HouseType: "2 Rooms",
                R_Budget: "40k",
                B_Budget: "4 Crores",
                Prop_Specs: "Semi-furnished, 900 sq ft, 1 car parking, Ground floor, Garden view",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/y32luly_gOUC1NTw_CCnOwL09eSShrpD57nvKa8T0LWhatsApp%2520Image%25202024-10-01%2520at%252001.27.48.jpeg"
            },
            {
                Intent: "Buy",
                PropType: "Villa",
                HouseType: "4 Rooms",
                R_Budget: "2.5 Lac",
                B_Budget: "15 Crores",
                Prop_Specs: "Fully furnished, 2500 sq ft, 3 car garage, Gated community, Pool access",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/cgxziDf5FUCj3CeJG07mHIjdx3cYhgBWNL1zKiUO6yWhatsApp%2520Image%25202024-10-01%2520at%252001.26.32.jpeg"
            },
            {
                Intent: "Rent",
                PropType: "Mansion",
                HouseType: "4 Rooms",
                R_Budget: "5 Lac",
                B_Budget: "15 Crores",
                Prop_Specs: "Fully furnished, 3000 sq ft, 2 car garage, Beachfront, Private security",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/W4PMmRpC3KDRYzZo0SzLmbuQZBxiDpY3mjl-z-aeugWhatsApp%2520Image%25202024-10-01%2520at%252001.25.38.jpeg"
            },
            {
                Intent: "Buy",
                PropType: "Apartment",
                HouseType: "2BHK",
                R_Budget: "40k",
                B_Budget: "2 Crores",
                Prop_Specs: "Semi-furnished, 1200 sq ft, 1 car parking, 1st floor, Suburban area",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/cgxziDf5FUCj3CeJG07mHIjdx3cYhgBWNL1zKiUO6yWhatsApp%2520Image%25202024-10-01%2520at%252001.26.32.jpeg"
            },
            {
                Intent: "Buy",
                PropType: "Mansion",
                HouseType: "3 Rooms",
                R_Budget: "5 Lac",
                B_Budget: "6 Crores",
                Prop_Specs: "Furnished, 3200 sq ft, 3 car garage, Gated community, Private pool",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/y32luly_gOUC1NTw_CCnOwL09eSShrpD57nvKa8T0LWhatsApp%2520Image%25202024-10-01%2520at%252001.27.48.jpeg"
            },
            {
                Intent: "Rent",
                PropType: "Townhouse",
                HouseType: "3 Rooms",
                R_Budget: "1.5 Lac",
                B_Budget: "4 Crores",
                Prop_Specs: "Unfurnished, 1500 sq ft, No parking, Ground floor, Private garden",
                Image: "https://heltar-chat-s3.s3.ap-south-1.amazonaws.com/cgxziDf5FUCj3CeJG07mHIjdx3cYhgBWNL1zKiUO6yWhatsApp%2520Image%25202024-10-01%2520at%252001.26.32.jpeg"
            },
        ]
    };

    // Filter properties that match the input variables (case-insensitive)
    const matchedProperties = properties.rows.filter(property =>
        property.HouseType.toLowerCase() === inputVars.housetype.toLowerCase() &&
        property.PropType.toLowerCase() === inputVars.proptype.toLowerCase() &&
        property.Intent.toLowerCase() === inputVars.intent.toLowerCase()
    );

    // If no properties match, return a 'not found' response
    if (matchedProperties.length === 0) {
        return {
            next: { path: 'not_found' },
            trace: [
                {
                    type: "text",
                    payload: {
                        message: `No properties found matching the criteria: HouseType: "${inputVars.housetype}", PropType: "${inputVars.proptype}", Intent: "${inputVars.intent}".`
                    }
                }
            ]
        };
    }

    // Generate carousel items only for the matched properties
    const carouselItems = matchedProperties.map(property => ({
        title: `${property.PropType} (${property.HouseType})`,
        description: {
            text: `Specs: ${property.Prop_Specs} - Rent: ${property.R_Budget} - Buy: ${property.B_Budget}`
        },
        imageUrl: property.Image
      
    }));

    // Returning the carousel trace with matched items
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
}
