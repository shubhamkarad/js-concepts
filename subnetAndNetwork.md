Subnet Masks and Basics of Networking

In networking, subnet masks are used to divide an IP address into two parts: the network part and the host part. This helps to organize and manage network addresses effectively. Let’s break it down step by step with simple explanations and examples.

What is Networking?

Networking refers to the practice of connecting computers and devices to share data and resources. A network allows devices like computers, smartphones, and printers to communicate with each other, either within a local area (LAN) or over the internet (WAN).

In a network, every device needs an IP address (Internet Protocol address) to communicate. Think of it as an address in a city, where each device has a unique address. But how do networks know which devices belong to them and which are on other networks?

This is where subnetting comes in!

What is Subnetting?

Subnetting is the process of dividing a large network into smaller, more manageable sub-networks or subnets. This helps improve efficiency, security, and the management of IP addresses. Each subnet has a network portion (which identifies the network) and a host portion (which identifies the specific device in that network).

What is a Subnet Mask?

A subnet mask is a 32-bit address that helps determine which part of an IP address represents the network and which part represents the host (the device in the network).

Subnet Mask Structure

The subnet mask is written in the same format as an IP address, such as:

IP Address: 192.168.1.1

Subnet Mask: 255.255.255.0

Both are made up of four octets (sets of 8 bits), and each octet ranges from 0 to 255.

In a subnet mask:

255 means the corresponding bit is part of the network.

0 means the corresponding bit is part of the host.

How Subnet Mask Works:

Consider the example below:

IP Address: 192.168.1.100

Subnet Mask: 255.255.255.0

Now, let’s break down the binary representation of both:

Octet	IP Address	Subnet Mask

1st	192	255

2nd	168	255

3rd	1	255

4th	100	0

Binary Representation:

IP Address (binary): 11000000.10101000.00000001.01100100

Subnet Mask (binary): 11111111.11111111.11111111.00000000

Network Portion (Where 1s are in the subnet mask):

The first three octets (255.255.255) represent the network.

The last octet (0) represents the host.

So, in this case, the network portion of the IP address is 192.168.1, and the host portion is 100. This means that the first three octets identify the network, and the last octet identifies the device (host) within that network.

Why Use Subnet Masks?

Efficient IP Address Management:

By dividing networks into subnets, you can manage IP addresses more efficiently, especially in large networks. You don’t waste IP addresses in each subnet.

Network Security:

Subnetting helps in isolating certain parts of a network for security reasons, making it harder for unauthorized users to access devices.

Improved Performance:

Smaller subnets reduce the overall size of the broadcast domain. This means devices only need to process the traffic relevant to their subnet, reducing network congestion.

Common Subnet Masks:

Here are some common subnet masks and their corresponding IP ranges:

255\.255.255.0 (or /24):

This is the most common subnet mask.

It means the first 24 bits are for the network, and the last 8 bits are for hosts.

It allows for 254 hosts (since 2 addresses are reserved — one for the network and one for the broadcast).

Example: 192.168.1.0/24

255\.255.0.0 (or /16):

The first 16 bits are for the network, and the remaining 16 bits are for hosts.

This allows for 65,534 hosts.

Example: 10.0.0.0/16

255\.0.0.0 (or /8):

The first 8 bits are for the network, and the remaining 24 bits are for hosts.

This allows for 16,777,214 hosts.

Example: 10.0.0.0/8

How Subnetting is Used in Real Life:

Let's say you are managing a network for a small company. The company has 200 employees, and you want to divide your network into two subnets:

Subnet 1: For the Sales Team (needs 100 devices).

Subnet 2: For the IT Team (needs 100 devices).

You can use subnetting to create two smaller networks out of a larger one, ensuring that IP addresses are efficiently distributed. For example:

Sales Subnet: 192.168.1.0/25 (This allows 126 devices).

IT Subnet: 192.168.1.128/25 (This also allows 126 devices).

Each subnet has its own address range, and the devices can communicate internally without interference from other networks.
