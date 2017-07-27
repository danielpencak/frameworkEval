# Framework Evaluator
Created by: Daniel Pencak

## Project Description

Framework Evaluator allows the user to compare various GitHub data for four different JavaScript frameworks.

## What problem does it solve?

I'd like an application that will allow me to compare different JavaScript frameworks based on data from GitHub.

## Who has this problem?

Jim works at a design firm and wants to pick the best JavaScript framework for an upcoming project.

## Context:

Jim is working on a new project and he is investigating new JavaScript frameworks to use on the project. He wants to be able to compare usage data from GitHub so that he can pick the most used, most supported framework.

## How does the application solve this problem?

1. The application displays the four frameworks on one page so the user can easily view the data.

2. The user can click the framework image to be taken to the GitHub page to get further information on the framework.

## What was the biggest challenge to overcome?

While working with the GitHub API I ran into some rate limiting issues. When the user is not authenticated the rate is 60 requests per hour. If authenticated the rate limit jumps to 5000 requests per hour. I considered having the user authenticate but decided to not go through with it. I wanted the user, no matter if they have a GitHub account or not, to be able to get updates on the data. I used the setTimeout function on the componentDidUpdate lifecycle in order to get updates. In this case the application updates every 15 minutes. While this is not ideal it leaves some breathing room with the 60 request per hour rate limit. I tried several different timings but received 403 errors. Performing overnight tests on the application has shown that the application will not crash with the current timing and I decided it was an acceptable tradeoff for not having the user authenticate.
