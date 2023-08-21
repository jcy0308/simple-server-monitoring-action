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

Background : Services that handle large-scale traffic mostly have the capability to monitor the server's status in real-time and possess their own recovery solutions. On the other hand, for services created as personal projects or those anticipating low levels of traffic, real-time server monitoring is often not implemented. However, even for small-scale services, if a user requests the service and the server doesn't respond due to issues, it can lead to a significant decrease in trust in the service.

Therefore, using GitHub Actions to periodically send requests to the server and check its status can allow small-scale services to implement a server monitoring system with minimal effort and cost.

## Points of Consideration
* In GitHub's billing policy, the free plan is limited to 2000 minutes per month. Since the intention of the action is to conduct cost-effective server monitoring, minimizing the execution time of the action is mandatory.

* Docker image optimzation
  -  To reduce the Docker image size, we choosed an ultra-light Alpine image instead of the standard Node image. While the base Node image is around 950MB for Node 18, the Alpine image weighs in at approximately 178MB. 
 
  - Additionally, we minimized dependencies to decrease installation time during execution. Here is most popular http request library in npm
   
| **library** | **weekly-download** | **bundle-size** | **avg-request-time** |
|:-----------:|:-------------------:|:---------------:|:--------------------:|
|   request   |      19,535,286     |      209KB      |         0.92         |
|     got     |      11,00,285      |      192KB      |         1.18         |
|    axios    |      9,759,583      |      346KB      |         0.84         |
|  superagent |      3,469,000      |      196KB      |         0.89         |
|  node-fetch |      2,443,184      |      62.6KB     |         0.89         |

 - We choosed the npm-fetch-api over the request library to achieve the smallest bundle size while maintaining reasonable request delay.

## Requirements

- A `SLACK_WEBHOOK` URL to send a message when something goes wrong 
  + `SLACK_WEBHOOK` using Github_Secret
  + or Raw Url string inside your action.yml
- A JSON file of URLs in your repository that uses the following structure

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

## See if you are using raw URL

If you directly upload a Slack URL to a GitHub repository, Slack might detect it as potentially compromised and invalidate the existing URL, generating a new one. Therefore, if you want to include a URL in your repository, you can encode it first and then include it in the action.yml file. The decoding process will be implemented within the action itself.

You can perform the encoding right [here](ttps://bsstayo.github.io/GitHub-Summer-Assignment/Crypto/index). Please provide the Slack URL you'd like to encode, and I'll help you with the encoding process.
