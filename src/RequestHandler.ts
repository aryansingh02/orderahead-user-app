import config from 'react-global-configuration';

class RequestHandler {
  static HOST = null;

  static async handleResponse(response: Response) {
    if (response.ok) {
      const data = await response.text();
      let obj;
      try {
        // For backward compatibility with non-wrapped response.
        obj = JSON.parse(data);
      } catch (ex) {
        console.error(ex);
      }
      return {
        ok: true,
        data: obj,
      };
    }
    return null;
  }

  static handleUrl(url: string) {
    if (!this.HOST) {
      this.HOST = config.get('REACT_APP_BACKEND_ENDPOINT');
    }
    return `${this.HOST}/${url}`;
  }

  static async get(url: string, accessToken: string | null = null) {
    try {
      return await this.call(url, 'GET', accessToken);
    } catch (err) {
      console.error('Error', err);
      return null;
    }
  }

  static async call(
    url: string,
    method: string = 'POST',
    accessToken: string | null = null,
    body: string | null = null
  ) {
    try {
      const api = this.handleUrl(url);
      const payload: RequestInit = {
        method,
      };
      if (body) {
        payload.body = JSON.stringify(body);
      }
      if (accessToken) {
        payload.headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        };
      }
      return await this.handleResponse(await fetch(api, payload));
    } catch (err) {
      console.error('Error', err);
      return null;
    }
  }
}

export default RequestHandler;
