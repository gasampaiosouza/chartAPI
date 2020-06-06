I used chartJS to make an chart with an API that i made.

# API

I made it with **Express** and **Cors**. <br><br>

It doesn't accept any queries yet, just an raw and simple API for study.

## Creation

To create this API i thought about how to make my life easier and simple, so i took some notes:

### The chart needs:

**arr** _labels_: data name<br>
**str** _title_: chart title ( not necessary )

---

### Each topic needs:

**str** _label_: data label<br>
**arr** _data_: raw data

## The first API

So, i made _exactly_ what i wrote above, like this:

![First API view](https://imgur.com/dM2yVnt.jpg)

## The better one

Then i realized: This API is a big mess. I could really do it better. <br>
Then i did it! Now it is like this:

![Second API version view](https://imgur.com/zbOkbn3.jpg)

I made it easier to read and to use! Really proud of myself.

# How to install

You need to _clone_ this repository, then you can just type: `npm install` or `yarn install`.<br><br>

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