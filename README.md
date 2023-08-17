# simple-server-monitoring-action

Below is an example YAML file for this action

```yaml
name: simple-server-monitoring

on:
  schedule:
    - cron: "0 * * * *"  # trigger this action every 1 hour

env:
  SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }} 

jobs:
  server-monitoring:
    runs-on: ubuntu-latest
    name: server-monitoring using http request
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Check request
        uses: jcy0308/simple-server-monitoring-action
        with:
          filename: './urls.json'
          protocol: 'https'
          slack: ${{ env.SLACK_WEBHOOK }}
```

## Description

This GitHub Action parses a JSON file, send requests to hosts in JSON file, alert using slack api if host's response status code is not what expected.

## Requirements

* A `SLACK_WEBHOOK` URL to send a message when something goes wrong
* A JSON file of URLs in your repository that uses the following structure

## JSON File

```json
[
    {
        "host": "google.com",
        "method": "GET",
        "status": 200
    },
    {
        "host": "somehost.api.login",
        "method": "POST",
        "status": 201,
        "body": {
            "id":"admin",
            "password":"1234"
        }
    }
]
```

## Environment Variables

This Action uses these environment variables

* `SLACK_WEBHOOK` is one you need to provide