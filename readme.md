I used chartJS to make an chart with an API that i made.

# API

I made it with **Express** and **Cors**. <br><br>

It doesn't accept any queries yet, just an raw and simple API for study.

## Creation

To create this API i thought about how to make my life easier and simple, so i took some notes:

### The chart needs:

**arr** labels: data name<br>
**str** title: chart title ( not necessary )

---

### Each topic needs:

**str** label: data label<br>
**arr** data: raw data

## The first API

So, i made _exactly_ what i wrote above, like this:

![First API view](https://imgur.com/dM2yVnt.jpg)

## The better one

**Then i realized**: Oh no! This API is a big mess! I could really do it better; then i did it! Now it looks like this:

![Second API version view](https://imgur.com/zbOkbn3.jpg)

I made it easier to read and to use! really proud of myself.

# How to install

You need to **clone** this repository, then you can just type: `npm install` or `yarn install`.<br><br>

Then you need to start **Express Server** to run the API. Just go to this repository's folder and type `node api.js` in the terminal, to run the server. <br><br>

Then you need just run the **html** file!

### Made with

* Express
* Cors
* ChartJS
* HTML ( to render it )

> Coded with: VSCode

## Thank you!

That's my project, i hope you liked it, there's a bunch more coming! :purple_heart: