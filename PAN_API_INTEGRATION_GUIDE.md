# PAN Verification API Integration Guide

## Overview
The PAN card auto-fill feature has been implemented in the Account Setup page. Currently, it uses mock data for demonstration. To integrate with a real PAN verification API, follow the instructions below.

## Current Implementation
- **File**: `src/pages/AccountSetup.tsx`
- **Feature**: Auto-fills PAN name when user enters a valid 10-character PAN number
- **Validation**: PAN format validation (5 letters + 4 digits + 1 letter)
- **Mock Data**: Currently uses predefined mock data for testing

## Testing the Mock Implementation
Try these sample PAN numbers to see auto-fill in action:
- `ABCDE1234F` → Returns "JOHN DOE"
- `ABCPD1234E` → Returns "ETERNAL LTD"
- `ABCPE1234F` → Returns "TECH INNOVATIONS PVT LTD"

## Popular PAN Verification API Providers

### 1. **Karza Technologies**
- Website: https://www.karza.in/
- Features: PAN verification, GST verification, Bank account verification
- Pricing: Pay-per-use model
- Integration: REST API with authentication token

### 2. **Signzy**
- Website: https://www.signzy.com/
- Features: Complete KYC verification including PAN
- Pricing: Contact for enterprise pricing
- Integration: REST API

### 3. **RapidAPI - PAN Card Verification**
- Website: https://rapidapi.com/
- Search for "PAN verification" or "India PAN card"
- Features: Various providers available
- Pricing: Varies by provider (free tiers available)

### 4. **NSDL/UTI Pan Services** (Official)
- Website: https://www.pan.utiitsl.com/
- Features: Official PAN verification
- Note: Requires business verification and approval

### 5. **AuthBridge**
- Website: https://www.authbridge.com/
- Features: Background verification including PAN
- Pricing: Enterprise pricing

## Integration Steps

### Step 1: Sign Up for API Service
Choose one of the providers above and sign up for their service. You'll receive:
- API endpoint URL
- API key or authentication credentials
- Documentation

### Step 2: Update the Code
Replace the mock implementation in `src/pages/AccountSetup.tsx`:

```typescript
// Current mock implementation (lines ~50-85)
const fetchPanName = async (pan: string) => {
    // ... existing code ...
    
    // Replace this section:
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY',
            // Add any other required headers
        },
        body: JSON.stringify({ 
            pan: pan,
            // Add other required parameters
        })
    });
    
    const data = await response.json();
    
    if (data.valid && data.name) {
        setPanName(data.name);
        toast({
            title: "PAN Verified ✓",
            description: "PAN details fetched successfully!",
        });
    } else {
        toast({
            title: "Invalid PAN",
            description: "PAN number not found or invalid.",
            variant: "destructive",
        });
    }
};
```

### Step 3: Environment Variables
Store your API credentials securely using environment variables:

1. Create a `.env` file in the project root:
```env
VITE_PAN_API_ENDPOINT=https://api.example.com/pan/verify
VITE_PAN_API_KEY=your_api_key_here
```

2. Update the code to use environment variables:
```typescript
const response = await fetch(import.meta.env.VITE_PAN_API_ENDPOINT, {
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_PAN_API_KEY}`,
    },
    // ... rest of the configuration
});
```

3. Add `.env` to `.gitignore` to keep credentials secure

### Step 4: Error Handling
Enhance error handling for production:
```typescript
try {
    const response = await fetch(apiEndpoint, config);
    
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    // Process data...
} catch (error) {
    if (error instanceof Error) {
        console.error('PAN verification error:', error.message);
    }
    toast({
        title: "Error",
        description: "Failed to verify PAN. Please try again or enter manually.",
        variant: "destructive",
    });
}
```

## Security Best Practices

1. **Never expose API keys in client-side code**: Use a backend proxy
2. **Rate limiting**: Implement rate limiting to prevent abuse
3. **Data encryption**: Ensure PAN data is transmitted over HTTPS
4. **Logging**: Log verification attempts for audit purposes
5. **Compliance**: Ensure compliance with Indian data protection laws

## Backend Proxy (Recommended)
For production, create a backend endpoint that proxies the PAN verification:

```javascript
// Example Node.js/Express endpoint
app.post('/api/verify-pan', async (req, res) => {
    const { pan } = req.body;
    
    try {
        const response = await fetch(process.env.PAN_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.PAN_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pan })
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Verification failed' });
    }
});
```

Then update the frontend to call your backend:
```typescript
const response = await fetch('/api/verify-pan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pan })
});
```

## Testing
1. Test with valid PAN numbers
2. Test with invalid formats
3. Test API failure scenarios
4. Test rate limiting
5. Test with various network conditions

## Support
For issues or questions about the implementation, refer to:
- Your chosen API provider's documentation
- This project's issue tracker
- React and TypeScript documentation

## Legal Compliance
Ensure your use of PAN verification complies with:
- Indian Income Tax Act
- Data Protection laws
- Your API provider's terms of service
