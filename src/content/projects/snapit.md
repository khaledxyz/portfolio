---
title: "SnapIt - URL Shortener"
description: "A simple url shortener and a playground project for testing Better Auth and auto-generated API clients. Built with Next.js, NestJS, and PostgreSQL."
slug: "snapit-url-shortener"
thumbnail: "/projects/snapit-thumbnail.webp"
github: "https://github.com/khaledxyz/snapit"
demo: "https://app.snapit.one"
tags: ["Next.js", "NestJS", "PostgreSQL", "Tailwind"]
date: "2024-03-15"
---

# SnapIt - URL Shortener

A URL shortener that doubles as my testing ground for Better Auth and SDK generation. Simple concept, but packed with lessons learned.

## Features

- GitHub login
- Create, edit, and delete short links
- Password protection for sensitive URLs
- Basic click tracking

## What I Learned

This project was really a sandbox for two things I wanted to test:

### Better Auth

I've tried rolling my own auth, used Firebase, Kinde, and Clerk. Better Auth is hands down the easiest solution I've found. It's so simple I don't think it can be topped.

The best part? Unlike other auth services, you actually own the infrastructure and code. And unlike rolling your own, you don't have to worry about features or security, it's all handled for you.

### Auto-Generated SDKs

I've always hated maintaining types across the frontend and backend. It's tedious and I'm never satisfied with the result. Creating your own API wrapper feels like busywork.

Using `@hey-api/openapi-ts` to generate SDKs was the missing piece. It handles all the types and API calls between clients and the backend. Better developer experience, cleaner code, zero type drift.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: NestJS
- **Database**: PostgreSQL
- **Auth**: Better Auth

## The Takeaway

Sometimes the best projects are the ones where you test ideas. SnapIt might just be a URL shortener, but it taught me better ways to handle auth and API communication that I'll use in every project going forward.
