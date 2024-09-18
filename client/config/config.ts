export const config = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    environment: process.env.NODE_ENV,
    // jwtSecret: process.env.JWT_SECRET,
    // Add other configuration variables here
  };
  
  // Validate the configuration
  Object.entries(config).forEach(([key, value]) => {
    if (value === undefined) {
      throw new Error(`Configuration error: ${key} is undefined`);
    }
  });