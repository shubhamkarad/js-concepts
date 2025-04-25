What is DNS?

DNS (Domain Name System) is like the phonebook of the Internet. It translates human-readable domain names (like www.google.com) into IP addresses (like 142.250.74.238) that computers use to identify each other on the network.

Why Do We Need DNS?

Humans find it easier to remember names than numbers. For example:

It's easy to remember www.amazon.com but not its IP address, such as 192.0.2.44.

DNS solves this problem by acting as a directory to match domain names to their corresponding IP addresses.

How DNS Works (Step-by-Step with Example)

Imagine you want to visit www.google.com in your browser.

1. User Types the URL

You type www.google.com into your browser.

1. Browser Checks the Cache

Your browser first checks if it already knows the IP address of www.google.com (from a previous visit). If it does, it skips the DNS lookup.

If not, it proceeds to the next step.

1. Query Sent to Recursive Resolver

The browser asks a DNS Resolver (usually your Internet Service Provider's server) to find the IP address.

1. Contacting the Root Server

The resolver contacts a Root DNS Server, which doesn't know the exact IP address but knows where to look next (points to the correct Top-Level Domain (TLD) server).

1. TLD Server Lookup

The resolver contacts the TLD server for .com, which knows where the DNS records for google.com are stored (points to Google's Authoritative DNS Server).

1. Authoritative DNS Server

The resolver finally contacts Google's authoritative server, which provides the IP address for www.google.com.

1. IP Address Returned

The IP address (142.250.74.238) is sent back to your browser.

1. Website Loaded

The browser uses the IP address to request the website from Google’s server, and the webpage is loaded.

Example of DNS in Action

You enter: www.youtube.com

DNS lookup happens:

Recursive resolver contacts the root server, then TLD server, and finally authoritative server.

IP address 142.250.64.206 is returned.

Browser connects to: YouTube’s server at that IP to load the site.

Key Components of DNS

Domain Names:

Example: www.google.com

Structured hierarchically:

.com is the Top-Level Domain (TLD).

google is the Second-Level Domain.

www is the Subdomain.

DNS Servers:

Root Server: Points to the TLD server.

TLD Server: Points to the authoritative server.

Authoritative Server: Provides the final IP address.

DNS Resolver:

Acts as an intermediary between your computer and DNS servers.
