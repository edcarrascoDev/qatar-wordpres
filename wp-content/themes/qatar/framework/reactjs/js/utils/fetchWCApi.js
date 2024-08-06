const defaultHeaders = {
  'Content-Type': 'application/json',
  authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
};

export const fetchWCApi = async (endpoint, options = {}, method = 'GET') => {
  const url = `${wp_qatar_reactjs.wc_rest_url}/${endpoint}`;
  const headers = { ...defaultHeaders, ...options.headers };

  try {
    const response = await fetch(url, {
      method,
      ...options,
      headers,
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
