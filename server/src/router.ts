import {
  createUser,
  getAllUsers,
  getUserById,
  signInUser,
} from './controller/user';
import { setTopics } from './controller/topic';
import { fetchTweets, generateTweet, queueTweet, tweetStatusPosted } from './controller/tweet';
import express, { Request, Response } from 'express';
import {   getAccessToken, oauth } from './integration/twitter-api.service';

const router = require('express').Router();

/* USER MANAGEMENT */
router.post('/user/signup', createUser);
router.post('/user/signin', signInUser);

router.get('/user/:id', getUserById);
// router.get('/', getAllUsers)

/* TOPICS MANAGEMENT */
router.post('/topic/set-topics', setTopics);
router.post('/tweets/generate-tweet', generateTweet);


/* TWEETS MANAGEMENT */
//route to fetch tweets with status 'suggested' or 'queued'
router.get('/user/:id/tweets/:status', fetchTweets)

// route to modify status of tweet from 'suggested' to 'queued'
router.put('/user/:id/queue-tweet/:tweetId', queueTweet);

// route to modify status of tweets to 'posted'
router.put('/user/:id/post-tweet-status/:tweetId', tweetStatusPosted);


/* TWITTER REQUESTS MANAGEMENT? */
router.get('/oauth', oauth)
router.get('/user/:id/oauth', oauth)
router.get('/callback', getAccessToken)

export default router;
