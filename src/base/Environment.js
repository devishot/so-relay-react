import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import config from '../config';

function fetchQuery(
  operation,
  variables,
) {
  const cfg = config.read(),
        host = cfg.host;

  return fetch(`${host}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;