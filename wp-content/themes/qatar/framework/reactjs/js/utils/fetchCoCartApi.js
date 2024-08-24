const defaultHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
};
export const fetchCoCartApi = async (endpoint, options = {}, method = 'POST') => {
  console.log(options);
  const url = `${wp_qatar_reactjs.cocart_rest_url}/${endpoint}`;
  const headers = { ...defaultHeaders, ...options.headers };

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.message || response.statusText}`);
    }

    // Handle successful response
    return response.json();
  } catch (error) {
    // Handle network or other errors
    console.error('Fetch error:', error);
    throw error;
  }
};
