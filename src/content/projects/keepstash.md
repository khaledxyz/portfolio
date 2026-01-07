---
title: "KeepStash"
description: "A modern, minimal bookmarking app that doesn't suck. Built for self-hosting with React, NestJS, and PostgreSQL."
slug: "keepstash"
thumbnail: "/projects/keepstash-thumbnail.webp"
github: "https://github.com/khaledxyz/keepstash"
demo: "https://keepstash.khaledxyz.com"
tags: ["React", "NestJS", "PostgreSQL", "PWA", "Docker"]
date: "2026-01-07"
---

# KeepStash

A bookmarking app with a modern UI that actually feels good to use. Built to be easily self-hostable because your bookmarks shouldn't live on someone else's server.

## Why I Built This

I wanted a bookmarking app with a UI that feels nice to interact with. Something modern and minimal that I'd actually enjoy using every day. Plus, I wanted full control over where my data lives, which means self-hosting.

So I built KeepStash.

## Features

The MVP is live and I'm using it daily. Still polishing rough edges, but it's functional:

- **Smart Organization**: Folders, tags, and filters (search, creation date, sorting)
- **Auto-Generated Metadata**: Titles and descriptions pulled automatically
- **Soft Delete**: Because we all make mistakes
- **PWA Support**: First time building a PWA, and I'm pretty happy with how it turned out

Future plans include optional AI tagging and folder suggestions using your own LLM API keys. Keeping it free means you bring your own API, not paying for mine.

## What I Learned

### Features Folder Structure

This was my first time organizing a React project by features instead of by type (components, hooks, utils, etc.). Everything bookmark-related lives in `features/bookmarks`, and it just clicks. No more hunting through a components folder with 50 files. If it's related, it's together.

### Better API Type Generation

I used `@hey-api/openapi-ts` again after SnapIt, but this time with better naming schemas for the generated types. The output is cleaner and more maintainable. Small improvement, big quality of life boost.

### Self-Hosting is Hard

Building for production and building for self-hosting are different beasts. Things I never thought about:

- Self-hosters don't need a landing page
- Email verification? Pointless when you're the only user
- Account creation should be toggle-able for security
- React runtime variables vs build-time variables matter more than I expected

I'm working through these edge cases to make KeepStash as plug-and-play as possible. Docker images are on Docker Hub, but there's still polish needed.

### PWAs Are Cool

First PWA I've built, and it's surprisingly satisfying. Having a bookmarking app feel native on mobile without actually building a mobile app? Yeah, I'll take that.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: NestJS
- **Database**: PostgreSQL
- **Deployment**: Docker

## Current State

The MVP is out and I'm testing it myself. It needs some polish here and there, but overall I'm happy with it. There are bugs being fixed, features being refined, but it's ready enough that I've made it my daily driver.

If you want a modern bookmarking app you can actually own and host yourself, give it a shot. And if you find bugs, well, that's what GitHub issues are for.
