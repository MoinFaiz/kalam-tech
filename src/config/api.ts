// Get the Azure Function URL from environment variables
export const getAzureFunctionUrl = (): string => {
  const url = import.meta.env.VITE_AZURE_FUNCTION_URL;
  
  if (!url) {
    throw new Error('VITE_AZURE_FUNCTION_URL environment variable is not configured');
  }
  
  return url;
};
