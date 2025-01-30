---
title: Case Study
description: Telegraph Case Study
toc_min_heading_level: 2
toc_max_heading_level: 3
className: "test"
---

# Case Study

## Introduction

Telegraph is a self-hosted, serverless Notification as a Service (NaaS) designed to simplify the complexities of implementing and managing real-time notifications for web applications.

<figure className="image-container">
   <img src="/case-study/videos/overview.gif" className="diagram" alt="architectural-overview" />
</figure>

Notifications may seem simple on the surface. They’re just a way to keep users informed on things like a shipped package, an upcoming meeting, or a flash sale. Whenever one of these events happens, you send a message to your user. But when you start digging into what it takes to build a notification system of your own, it becomes apparent that there’s a lot more going on under the hood. It’s not just about delivering a message. How do you make sure it works without bogging down the rest of your application? How do you make sure it works for every user, every time? These challenges are not always obvious until you’re deep in the development process.

This case study explores the technical foundation of Telegraph, focusing on the challenges of building a scalable and reliable notification service, the architectural trade-offs made during its development, and the benefits of adopting a serverless approach.

## Building Notifications is Not Trivial

The first step in building a notification system is deciding what should trigger a notification. What events matter to you or your users? From there, you need to build a logic diagram to determine if a notification should actually be sent. Maybe the user has unsubscribed from this event type, or they’ve enabled do-not-disturb. Is the event critical enough to override those settings? It’s not just a few decisions, either. Just look at Slack's notification logic diagram – figuring out when to send a notification can quickly become a maze of decision-making.

<figure className="image-container">
   <img src="/case-study/images/slack-workflow.webp" className="diagram" alt="slack-workflow" width="80%"/>
</figure>

Once you’ve decided **when** to notify, the next challenge is **how** to deliver the message. Traditional HTTP request/response cycles aren’t designed for proactively pushing data to users. If you want to send messages without waiting for users to request them, you’ll need to make some architectural changes. And that’s only the beginning.

Adding a notification system means utilizing some of your infrastructure’s capacity. On a normal day, this might not be a big deal – your app and notifications run side by side just fine. But what happens when there’s a spike in traffic? Maybe your app needs more resources because of a big sale or an influx of new users. Or maybe it’s the notification system itself that’s under pressure, sending out thousands of messages all at once. Either way, both the app and the notification system are competing for the same resources, and that can quickly strain your infrastructure. So, when you add notifications, you’re also adding to your scaling concerns – and it’s something you’ll need to plan for.

Finally, users expect notifications to "just work," but there’s a lot that goes into making that happen. For developers, it’s not just about sending a message. It’s about making sure it actually gets delivered, keeping track of any failures, and knowing the status of each notification as it traverses through the system. What happens if something goes wrong during delivery? How do you know if the message reached its destination? These are things you’ll need to consider, and building the systems to track them adds a whole new layer of complexity. It’s easy to overlook this when you're focused on getting messages out the door, but without it, you’re left in the dark about whether things are actually working.

When you step back and think about all of this, it quickly becomes apparent that building a notification system isn’t just a quick add-on. It’s a whole project that can take a lot more time and effort than you might have expected.

## Third-Party Solutions

The good news is that you don't have to reinvent the wheel. There are plenty of services out there that specialize in notifications. Of course, third-party solutions come with their own set of trade-offs. You’re giving up some control over how things work, and you might be tied to their pricing model. Open-source solutions may not have a recurring fee, but they’re not entirely “free” either. The real cost comes in the time it takes to get up and running with them. You could end up spending a lot of time just trying to integrate something open-source. However, in exchange, you get a system that’s already built to handle all of the complexities mentioned above.

Services like MagicBell, NotificationAPI, Novu, and Knock all bring something to the table. Knock and Novu are feature-rich, but they can be time-consuming to integrate. MagicBell and NotificationAPI are more straightforward, but their pricing starts at $100-$250/month and the free tiers come with mandatory branding. Another point of consideration is that using these services means storing user data on external systems, which may raise data privacy concerns.

<figure className="image-container">
   ![Third-party comparison table](//case-study/images/comparison-chart.png)
   <figcaption align="center">Comparing Telegraph with other Third-party providers</figcaption>
</figure>

Telegraph stands out in four key areas against the existing solutions:

- Open-source and self-hosted.
- Auto-deployment of all required AWS services with a CLI.
- Complete data ownership.
- Minimizes costs with the on-demand features of AWS. [[1]](#footnotes)

## Introducing Telegraph

For developers choosing Telegraph, the service has pre-configured delivery channels and an observability dashboard for overseeing the service instance. Developers can then implement in-app, email, and Slack notifications into their applications with minimal structural changes to their existing infrastructure.

**image**

Telegraph is deployed to AWS via a CLI available as an npm package. Once deployed the backend SDK can be integrated in the customer’s backend to send notification requests and the `TelegraphInbox` React component can be added to the customer’s frontend, enabling in-app notifications and notification preference management for users.

**image**

### Architecture

Telegraph has a serverless architecture on AWS and uses services like API Gateway, Lambda, and DynamoDB to implement its service with minimal operational overhead.

<figure className="image-container">
   <img src="/case-study/videos/architecture.gif" className="diagram" alt="Telegraph's architecture" width="63%"/>
   <figcaption align="center">Telegraph's Architecture</figcaption>
</figure>

## Engineering Challenges and Decisions

### Real-time Communication with Clients

<figure className="image-container">
   <img src="/case-study/images/architecture_ws_gateway.png" className="diagram" alt="architecture-websocket"/>
</figure>

One of the first decisions we had to make was how we were going to send in-app notifications to the client. In the traditional HTTP request-response cycle, clients communicate with servers by sending HTTP requests when they need specific data; the server then responds with the requested data. However, in-app notification delivery deviates from this model. Instead of waiting for client requests, the server must send data to the client as events occur in real time.

There are three primary mechanisms that can be used to achieve this: polling, Server-Sent Events (SSE), and WebSockets.

#### Polling

<figure className="image-container">
   <img src="/case-study/images/HTTP-Polling.png" className="diagram" alt="polling"/>
</figure>

Polling is a mechanism in which a client periodically sends HTTP requests to a server to check for new data. However, frequent polling can strain both the server and the network. While increasing the interval between requests can alleviate that strain, it reduces the application's ability to deliver real-time updates. Additionally, as the user base grows, the number of unnecessary polling requests – those that return no new data – can result in a substantial waste of resources. Due to these inefficiencies, especially at scale, we opted not to use polling.

#### Server-Sent Events & WebSockets

Both SSEs and WebSockets establish a persistent connection between client and server and allow data to be pushed on-demand from the server to the client.

<figure className="image-container">
   <img src="/case-study/images/SSE.png" className="diagram" alt="sse"/>
</figure>

SSEs establish a long-lived HTTP connection between the client and server, enabling the server to push updates to the client as they occur and only terminate when requested by either party. Compared with WebSockets, SSE is simpler to implement, as it relies solely on standard HTTP without requiring additional libraries or protocols. This simplicity makes it easy to set up and debug. Furthermore, SSE provides built-in features like automatic reconnection and message ordering.

<figure className="image-container">
   <img src="/case-study/images/WebSockets.png" className="diagram" alt="polling" />
</figure>

WebSocket is a communication protocol that establishes a long-lived, bidirectional connection between a client and server over a single TCP connection. Following the initial HTTP handshake, the client sends an upgrade request that transitions the connection to the WebSocket protocol. This protocol establishes a dedicated channel for two-way real-time communication, making WebSocket particularly well-suited for interactive use cases, such as real-time chat applications or collaborative tools.

#### Why WebSockets?

We initially used SSEs to implement the sending of in-app notifications. The browser received these events from an Express backend server and then updated a user-facing frontend component to notify the user of this new event. This mechanism fulfilled our requirement to send in-app notifications in real-time. However, when we considered the scaling implications of using SSEs, and compared this with a serverless WebSocket architecture, we found WebSockets would serve Telegraph’s use case better in the long term, particularly when considering the availability of AWS API Gateway for WebSockets.

<figure className="image-container">
   <img src="/case-study/videos/ScalingEC2.gif" className="diagram" alt="scaling-instances"/>
</figure>

To keep building Telegraph as a drop-in Notification as a Service using SSEs, we would set up an EC2 instance or similar compute resources. This solution provides fine-grained control over scaling logic, connection management, and database infrastructure but was found to lead to higher costs and complexity. For example, scaling an EC2-based setup would involve managing load balancers and provisioning distributed database systems or sharded architectures to handle the growth in notification data. These resources will incur costs even when idle. We estimated that in a hypothetical use case of delivering 100,000 notifications for 2,000 users, the monthly cost of the serverless architecture was about 1/3 of that of using EC2 instances.

In addition to architectural components needing to scale up, as traffic drops and the number of connections reduces, they also need to scale down while maintaining the remaining connections. Although a single EC2 instance may be able to service all active SSE connections, we would not be able to consolidate the scattered connections without disconnecting them first. This would result in multiple EC2 instances running in underutilized states.

<figure className="image-container">
   <img src="/case-study/videos/ScalingWS.gif" className="diagram" alt="scaling-websockets"/>
</figure>

In contrast, AWS’s managed WebSocket service via API Gateway automatically handles scaling and connection persistence. The API Gateway and the attached lambdas scale up and down with demand, ensuring no redundant resources are left running that would drive up costs. This built-in scaling behavior of the API Gateway allowed us to focus on building the core functionality of Telegraph while minimizing the operational burden of managing infrastructure, making WebSockets the better choice for our notification system.

### Persistent Data Storage

<figure className="image-container">
   <img src="/case-study/images/architecture_databases.png" className="diagram" alt="websockets"/>
</figure>

#### Storage for high reads and writes

Telegraph required storage solutions for WebSocket connection IDs, user preferences and attributes, and in-app notifications. These databases would need to handle a high frequency of both reads and writes. The big question, then, was SQL or NoSQL.

SQL databases are the obvious choice when you have structured data across multiple tables and need to perform complex queries. They favor consistency over availability but struggle to scale horizontally. NoSQL databases are optimized for fast access and horizontal scaling. The lack of a schema allows for the retrieval of data of different types from the same place without having to go through relationships between tables.

Though the shape of our data is fixed and consistent, we did not require any complex relational querying. Our use case primarily involved simple look-ups based on user ID, making a NoSQL approach a natural fit. By this point, we had already committed to using the WebSocket API Gateway, which influenced the rest of our architecture. This decision led us to avoid adding a provisioned server unless necessary. Among NoSQL databases, we chose DynamoDB for its integration with AWS's serverless ecosystem and its ability to scale horizontally to handle high read and write throughput.

#### Storage for high writes and large volume

Another type of storage solution we needed to consider was for the tracing logs of notification requests. This storage solution would need to handle a high volume of writes and store a large number of small files.

Initially, when considering storage for logs, Amazon’s S3 bucket seemed like the best choice. S3 is a scalable object storage solution known for being particularly cost-effective for storing large amounts of data. However, after implementation, we quickly found that the number of reads to the S3 Bucket would not be insignificant and, with about a 10x difference in read costs compared to DynamoDB, it could quickly become an expensive solution. We also found the query time of S3 to be a significant concern for our use case, as retrieving 20 objects, each about 30 bytes, resulted in a timeout due to Lambda's default 3-second execution limit.

Given that we needed to query the logs database for viewing and error handling on the dashboard, the lag in retrievals and the cost difference for reads outweighed the cheap storage benefits of S3. As a result, we opted to use DynamoDB for our notification logs.

Once our data was stored away, it was time to keep it safe.

### Authentication

<figure className="image-container">
   <img src="/case-study/images/architecture_authorizers.png" className="diagram" alt="authorizors"/>
</figure>

Telegraph uses two authentication methods: key-based authentication for server-side connections and Hash-Based Message Authentication Codes (HMAC) for client-side connections.

#### Key-based Authentication

<figure className="image-container">
   <img src="/case-study/videos/Key-Based-Authentication.gif" className="diagram" alt="key based authentication"/>
</figure>

Telegraph uses key-based authentication for API requests. During setup, users generate a secret key, which is included in the `Authorization` header of each request and then verified by the HTTP Gateway authorizer.

#### Hash-based Authentication

<figure className="image-container">
   <img src="/case-study/videos/HMAC-Authentication.gif" className="diagram" alt="key based authentication"/>
</figure>

Authenticating a client between two servers with a shared secret key is more challenging, since the credentials in the Authorization header are visible to the client. If the secret key is intercepted by a third party, they gain access to all Telegraph API functions.

Our solution uses hash-based message authentication codes (HMAC) to authenticate clients connecting to the WebSocket Gateway. The application server generates a unique hash for each client by combining the secret key and user ID using SHA256. When connecting to the WebSocket Gateway, the user ID and hash are passed to the WebSocket authorizer, which verifies it using the same algorithm as the application server.

You might be wondering why we didn’t use JWTs or OAuth. After all, they’re widely adopted across the industry for authentication. The choice came down to what Telegraph is optimized for. HMAC avoids the need for additional infrastructure like token servers or complex validation workflows. You only have to manage a shared secret key.

JWTs and OAuth are powerful tools, but they’re designed for different needs. JWTs are great in distributed systems where multiple services need to independently validate tokens without checking back with a central server. That flexibility is great if you need it, but it adds unnecessary complexity for Telegraph’s needs. OAuth, on the other hand, is great for scenarios involving delegated access, like when users need to log in through a third-party provider. However, we designed Telegraph to be a single-tenant, self-hosted environment where your server already authenticates clients before Telegraph comes into the picture.

That said, we did recognize that the secret key used in the HMAC process doesn’t have a native expiration or rotation mechanism. We added a way for you to change the secret key whenever needed through the CLI – whether it’s in response to a security breach or simply because the key has been in use for a while and you want to rotate it out.

### Observability

An integral part of our system is giving developers visibility into whether notifications are being delivered successfully and providing a way to debug failures when they happen. Telegraph enables detailed logging across all Lambda functions and gateways using AWS CloudWatch. Though thorough, the sheer volume of logs generated can make diagnosing issues with CloudWatch logs alone difficult.

Our dashboard is meant to act as a bridge between visualizing your Telegraph instance and diagnosing problems using CloudWatch logs. It provides a quicker, more user-friendly way to interpret metrics, logs, and failed messages. Developers can use the notification logs generated for a notification request to narrow their search of CloudWatch logs and resolve problems faster.

**video**

Key features of the dashboard include:

1. A notification logs page, where failed messages and other errors are clearly signaled. A drawer provides extra details to help isolate the problem.

2. A users page allows the administrator to search users, their preferences, and logs associated with those users.

3. An analytics page showing the distribution of successful and failed notifications sent in the last month.

4. An observability tool for the Dead Letter Queue, which toggles red when a notification processing has failed more than 3 times.

### Traffic Spikes

<figure className="image-container">
   <img src="/case-study/images/architecture_queue.png" className="diagram" alt="architecture-queue"/>
</figure>

Handling traffic spikes is one of the tricky parts of building a notification system. Even though AWS Lambda scales automatically, there are concurrency limits, and DynamoDB, while it auto-scales, has its own read and write rate limits. We wanted to make sure Telegraph could handle sudden surges in traffic without hitting those limits and causing issues. To manage this, we added a queue to rate limit the traffic flowing through the system.

AWS offers two types of queues: FIFO and Standard. A FIFO queue, as the name suggests, processes messages in the exact order they are received. This seemed like a nice feature, but it was not strictly necessary for our use case. The downside of a FIFO queue is that it has a throughput limit of 300 requests per second. Also, to preserve the ordering of the messages, if there is an error processing a batch, all unprocessed messages have to go back to the queue. Since the queue uses the number of times a message appears in the queue as its criteria for sending that message to the dead letter queue (DLQ), this meant that it was possible for a message to be sent to the DLQ without ever being attempted to be processed.

A Standard queue forgoes enforcing FIFO behavior and is instead optimized for high message throughput, which Amazon states is unlimited. Without the strict first-in-first-out ordering rules, this meant we could process a batch of messages returning only the failed messages to the queue and eliminate the risk of a valid message being inadvertently sent to the DLQ. With these cumulative benefits, we decided to choose the Standard queue.

To then use the queue as a rate limiter in our system, we configured the Lambda consuming from it. The Lambda takes up to 100 messages from the queue with a concurrency limit of 10, creating a ceiling on the number of notification requests that are processed at a given time. Buffering requests and processing them asynchronously allows us to keep downstream components from being overloaded during spikes in traffic.

## Load Testing

To ensure that Telegraph could handle high traffic scenarios and scale effectively, we conducted load testing on the key entry points of the application: the WebSocket Gateway and the HTTP Gateway. The objective of the testing was to evaluate our capacity under heavy loads, focusing on whether the connection requests would be successfully passed on to the integrated lambdas. We simulated a high volume of simultaneous users and interactions using artillery.io and a high capacity EC2 instance (32 vCPU, 128 GiB memory).

### WebSocket Gateway

The WebSocket Gateway was tested to evaluate how it handles a high volume of connections. We started with a connection rate to establish a baseline and gradually increased the load. Throughout the tests, latency remained consistent, and we didn’t encounter any errors. This confirmed that the WebSocket Gateway can handle up to 500 new connections per second, aligning with AWS's specifications [[1]](#references).

| Metric                         | Test 1 | Test 2 | Test 3 |
| ------------------------------ | ------ | ------ | ------ |
| Test Duration                  | 20     | 20     | 600    |
| Maximum connections per second | 10     | 200    | 500    |
| Total Conections               | 200    | 1239   | 291126 |
| Latency (ms)                   | 38     | 26     | 21     |
| Errors                         | 0      | 0      | 0      |

### HTTP Gateway

For the HTTP Gateway, the focus was on API request handling. At light and moderate request rates, the system was able to process all requests. However, at a heavy load of 8,000 requests per second, we hit the AWS Lambda's regional concurrency limit of 1,000 [[2]](#references). This caused about 1.6% of requests to be throttled, as there weren’t enough Lambdas available to process them. Despite this, the requests that were processed maintained stable latency, and no errors occurred.

| Metric                  | Test 1 | Test 2 | Test 3 |
| ----------------------- | ------ | ------ | ------ |
| Test Duration (seconds) | 30     | 60     | 60     |
| API Requests per second | 5      | 100    | 8000   |
| Total Requests Made     | 150    | 6000   | 480000 |
| Throttled Requests      | 0      | 0      | 7854   |
| Latency (ms)            | 156    | 44     | 78     |
| Errors                  | 0      | 0      | 0      |

### Bottlenecks

The main performance bottleneck for Telegraph was the Lambda concurrency limit. While components like API Gateway and DynamoDB scaled well during load tests, Lambda’s default concurrency cap of 1,000 executions per region imposed by AWS became a limiting factor. This limit wasn’t reached during the WebSocket Gateway tests, but when the HTTP Gateway test ramped up to 8,000 requests per second, throttling began as all 1,000 Lambdas were already in use.

### Capactiy

Based on our results, we estimate that this bottleneck can be avoided if WebSocket connections are kept under 500 per second and API requests stay below 5,000 per second. It is worth noting that the concurrency limit of lambdas is a soft limit that AWS allows you to increase by contacting support. The maximum increase they permit isn’t publicly disclosed, but there are some anecdotal reports indicating that this can be increased five- or even ten-fold at no cost. In that case, it would be reasonable to extrapolate that any increase in the concurrency limit will also increase Telegraph’s API request capacity by the same factor.

## Future Work

Our HMAC-based authentication approach, while robust, currently has two notable limitations: the lack of expiration and the absence of automated secret key rotation. Automating secret key rotation using a secure key management system like AWS Key Management Service would mitigate risks by periodically updating keys.

To improve the observability metrics of our dashboard, we could enhance its granularity by providing detailed insights into each stage of the notification delivery pipeline. Currently, the dashboard displays notification logs, their status, and timestamps, but it lacks visibility into where failures occur within the process. By incorporating stage-specific metrics, such as whether the notification failed during API processing, message queueing, or client delivery, we can offer a more precise diagnosis for failures. Additionally, integrating visualizations like success/failure rates, retry attempts, and latency distributions across stages would enable users to understand performance bottlenecks better and identify trends. These improvements would enable users to troubleshoot issues more effectively and optimize their notification workflows.

Currently, the system lacks built-in retry logic for failed notification deliveries. While failed deliveries are logged and displayed on the dashboard, any reattempt to send these notifications must be done manually. Introducing automated retry logic to attempt delivery two or three times before marking a notification as failed could reduce the likelihood of prematurely abandoning notifications.

## Footnotes

1. Under typical AWS usage scenarios, delivering 10,000 notifications with Telegraph incurs an estimated monthly cost of $14

## References

1. https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html
2. https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html
